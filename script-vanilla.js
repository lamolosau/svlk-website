document.addEventListener("DOMContentLoaded", () => {
  // Navbar Scroll
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Parallaxe
  const hero = document.getElementById("hero");
  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    if (hero) {
      hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    }
  });

  // --- GÉNÉRATEUR DE LUCIOLES (FIREFLIES) ---
  const particlesContainer = document.getElementById("particles-container");

  if (particlesContainer) {
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      createFirefly();
    }

    function createFirefly() {
      const firefly = document.createElement("div");
      firefly.classList.add("firefly");

      // Randomisation
      firefly.style.left = Math.random() * 100 + "%";

      // Durée plus lente pour les lucioles (flottement)
      const duration = Math.random() * 10 + 5; // entre 5 et 15s
      firefly.style.animationName = "float"; // Utilise l'animation "float" du CSS Vanilla
      firefly.style.animationDuration = duration + "s";
      firefly.style.animationTimingFunction = "ease-in-out";
      firefly.style.animationIterationCount = "infinite";

      firefly.style.animationDelay = Math.random() * 5 + "s";

      // Taille petite
      const size = Math.random() * 3 + 2;
      firefly.style.width = size + "px";
      firefly.style.height = size + "px";

      particlesContainer.appendChild(firefly);
    }
  }

  // Fonction Copier IP Vanilla
  window.copyIP = function () {
    const ip = "svlkvanilla.lakel.dev";
    navigator.clipboard
      .writeText(ip)
      .then(() => {
        const feedback = document.getElementById("copy-feedback");
        const ipText = document.getElementById("ip-text");

        if (ipText) ipText.innerText = "Copié !";
        if (feedback) feedback.classList.add("visible");

        setTimeout(() => {
          if (feedback) feedback.classList.remove("visible");
          if (ipText) ipText.innerText = ip;
        }, 2000);
      })
      .catch((err) => {
        console.error("Erreur copie :", err);
      });
  };

  // VRAI Statut Serveur Vanilla
  const serverIp = "svlkvanilla.lakel.dev"; // Ton IP Vanilla
  const statusText = document.getElementById("player-count");
  const statusDot = document.querySelector(".status-dot");

  fetch(`https://api.mcsrvstat.us/3/${serverIp}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.online) {
        statusText.innerText = `En ligne • ${data.players.online} Joueurs`;
        statusText.style.color = "#dcfce7";
        statusDot.classList.remove("offline");
        statusDot.classList.add("online");
      } else {
        statusText.innerText = "Maintenance / Hors ligne";
        statusText.style.color = "#ef4444";
        statusDot.classList.remove("online");
        statusDot.classList.add("offline");
      }
    })
    .catch((err) => {
      console.error("Erreur API:", err);
      statusText.innerText = "Statut indisponible";
    });
});
