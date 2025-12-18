# 🔥 SVLK Modded - Site Web (ATM10)

Site web vitrine pour le serveur Minecraft Moddé **SVLK (All The Mods 10)**.
Ce projet est une adaptation du site SVLK Vanilla, repensé avec une esthétique "Magma/Industriel" utilisant le Glassmorphism.

## 📋 Fonctionnalités

- **Design Réactif** : Interface fluide adaptée aux mobiles et desktops.
- **Thème ATM10** : Palette de couleurs Orange/Magma, animation de particules (braises) et fond Nether.
- **Statut Serveur en Direct** : Affichage du nombre de joueurs via l'API `mcsrvstat.us`.
- **Système de Whitelist** : Formulaire de candidature (prêt pour intégration Webhook Discord).
- **Navigation Cross-Network** : Lien rapide pour basculer vers le site Vanilla.

## 📂 Structure du Projet

```text
/
├── index.html          # Page d'accueil (Présentation, Features)
├── whitelist.html      # Page de formulaire de candidature
├── style.css           # Feuilles de style (Variables, Animations, Responsive)
├── script.js           # Logique (Navbar, API Statut, Particules, Formulaire)
├── background.jpg      # Image de fond (Nether/Shader)
└── README.md           # Documentation

```

## 🚀 Installation & Hébergement

Ce site est **statique** (HTML/CSS/JS). Il ne nécessite pas de base de données ou de PHP.

### En local

1. Clonez ce dépôt ou téléchargez les fichiers.
2. Ouvrez `index.html` dans votre navigateur.

### Hébergement

Vous pouvez héberger ce site gratuitement et facilement sur :

- **Vercel** ou **Netlify** (Recommandé).
- **GitHub Pages**.
- Un serveur web classique (Apache/Nginx/Caddy).

## ⚙️ Configuration

### 1. Changer l'IP du Serveur

Pour que le widget "État du serveur" et le bouton "Copier IP" fonctionnent :

1. Ouvrez `script.js`.
2. Cherchez la variable `const ip = "svlk.lakel.dev";` (vers la ligne 90).
3. Cherchez la variable `const serverIp = "svlk.lakel.dev";` (vers la ligne 115).
4. Remplacez par votre IP ou domaine.

### 2. Configurer le Webhook Discord (Whitelist)

Le formulaire simule actuellement un envoi. Pour le relier à Discord :

1. Créez un Webhook dans votre serveur Discord (Paramètres du salon > Intégrations > Webhooks).
2. Dans `script.js`, à l'intérieur de l'événement `submit` (fin du fichier), remplacez la simulation par :

```javascript
const webhookURL = "VOTRE_URL_WEBHOOK_ICI";

const payload = {
  embeds: [
    {
      title: "🔥 Nouvelle Candidature ATM10",
      color: 16734208, // Orange
      fields: [
        {
          name: "Pseudo",
          value: document.getElementById("ign").value,
          inline: true,
        },
        {
          name: "Discord",
          value: document.getElementById("discord").value,
          inline: true,
        },
        {
          name: "Motivation",
          value: document.getElementById("motivation").value,
        },
      ],
    },
  ],
};

fetch(webhookURL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
}).then(() => {
  // Code de succès (Afficher message "Envoyé")
});
```

### 3. Changer le lien vers le Vanilla

Dans `index.html` et `whitelist.html` (dans la `<nav>`), modifiez le lien :

```html
<a
  href="[https://votre-site-vanilla.com](https://votre-site-vanilla.com)"
  class="vanilla-link"
  >Vanilla 🌱</a
>
```

## 🎨 Personnalisation du Style

Toutes les couleurs sont gérées via des variables CSS au début de `style.css`.

- `--primary` : Couleur principale (Actuellement Orange #f97316).
- `--bg-dark` : Couleur de fond derrière l'image.
- `--glass-bg` : Opacité et teinte des cadres en verre.

## 🖼️ Assets

- Assurez-vous d'avoir une image nommée `background.jpg` à la racine pour le fond d'écran. Privilégiez une image sombre (Nether ou Shader de nuit) pour la lisibilité.

---

© 2025 SVLK Network.
