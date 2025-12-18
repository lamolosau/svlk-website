document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const bars = document.querySelectorAll(".bar");
      if (navMenu.classList.contains("active")) {
        bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
      } else {
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
      }
    });
  }

  const particlesContainer = document.getElementById("particles-container");

  if (particlesContainer) {
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      createEmber();
    }

    function createEmber() {
      const ember = document.createElement("div");
      ember.classList.add("ember");

      ember.style.left = Math.random() * 100 + "%";
      ember.style.bottom = "-20px";

      const duration = Math.random() * 5 + 4;
      ember.style.animation = `rise ${duration}s linear infinite`;
      ember.style.animationDelay = Math.random() * 5 + "s";

      const size = Math.random() * 4 + 2;
      ember.style.width = size + "px";
      ember.style.height = size + "px";
      ember.style.opacity = Math.random() * 0.7;

      particlesContainer.appendChild(ember);
    }

    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes rise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(${
            Math.random() * 100 - 50
          }px); opacity: 0; }
        }
      `;
    document.head.appendChild(styleSheet);
  }

  window.copyIP = function () {
    const ip = "svlk.lakel.dev";
    navigator.clipboard
      .writeText(ip)
      .then(() => {
        const feedback = document.getElementById("copy-feedback");
        const ipText = document.getElementById("ip-text");

        if (ipText) ipText.innerText = "Copié !";
        if (feedback) feedback.style.opacity = "1";

        setTimeout(() => {
          if (feedback) feedback.style.opacity = "0";
          if (ipText) ipText.innerText = ip;
        }, 2000);
      })
      .catch((err) => {
        console.error("Erreur copie :", err);
      });
  };

  const serverIp = "svlk.lakel.dev";
  const footerCount = document.getElementById("footer-count");
  const statusDot = document.querySelector(".status-dot");

  if (footerCount) footerCount.innerText = "Recherche...";

  fetch(`https://api.mcsrvstat.us/2/${serverIp}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.online) {
        if (footerCount)
          footerCount.innerText = `${data.players.online} Joueurs en ligne`;
        if (statusDot) {
          statusDot.style.background = "#22c55e";
          statusDot.style.boxShadow = "0 0 10px #22c55e";
        }
      } else {
        if (footerCount) footerCount.innerText = "Serveur Hors-ligne";
        if (statusDot) {
          statusDot.style.background = "#ef4444";
          statusDot.style.boxShadow = "none";
        }
      }
    })
    .catch((err) => {
      console.log("Erreur API status:", err);
      if (footerCount) footerCount.innerText = "Non disponible";
    });

  const form = document.getElementById("whitelistForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = document.getElementById("submitBtn");
      const originalText = btn.innerText;

      btn.innerText = "Envoi en cours...";
      btn.style.opacity = "0.7";

      setTimeout(() => {
        btn.innerText = "Candidature Envoyée !";
        btn.style.background = "#22c55e";
        form.reset();
        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.background = "";
          btn.style.opacity = "1";
        }, 3000);
      }, 1500);
    });
  }
});
