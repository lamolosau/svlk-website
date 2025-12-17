document.addEventListener("DOMContentLoaded", () => {
  // 1. Navbar Glass Effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Parallaxe Fond
  const hero = document.getElementById("hero");
  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    // Vérification de sécurité si hero existe
    if (hero) {
      hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    }
  });

  // 3. Particules (Braises) - CORRIGÉ
  const particlesContainer = document.getElementById("particles-container");

  if (particlesContainer) {
    const particleCount = 50; // Nombre de particules

    for (let i = 0; i < particleCount; i++) {
      createEmber();
    }

    function createEmber() {
      const ember = document.createElement("div");
      ember.classList.add("ember");

      // Randomisation position horizontale
      ember.style.left = Math.random() * 100 + "%";

      // Durée aléatoire
      const duration = Math.random() * 5 + 3; // entre 3 et 8s
      ember.style.animationName = "rise";
      ember.style.animationDuration = duration + "s";
      ember.style.animationTimingFunction = "ease-in";
      ember.style.animationIterationCount = "infinite";

      // Délai aléatoire
      ember.style.animationDelay = Math.random() * 5 + "s";

      // Taille aléatoire
      const size = Math.random() * 4 + 3; // Un peu plus grosses (3px à 7px)
      ember.style.width = size + "px";
      ember.style.height = size + "px";

      // Couleur forcée ici pour être sûr
      ember.style.backgroundColor = "#ff5500";

      particlesContainer.appendChild(ember);
    }
  }

  // 4. Copier IP - MISE A JOUR
  window.copyIP = function () {
    // Rendu global pour être sûr que le HTML le trouve
    const ip = "svlk.lakel.dev";
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

  // 5. Statut Serveur (Simulation)
  setTimeout(() => {
    const statusText = document.getElementById("player-count");
    const statusDot = document.querySelector(".status-dot");

    if (statusText && statusDot) {
      statusText.innerText = "En ligne • 12 Joueurs";
      statusText.style.color = "#fff";
      statusDot.classList.add("online");
    }
  }, 1500);
});
