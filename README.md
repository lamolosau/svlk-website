# 🌍 SVLK Network - Official Website

Bienvenue sur le dépôt du site web du **SVLK Network**.
Ce projet contient les landing pages (pages d'atterrissage) pour nos deux serveurs Minecraft auto-hébergés : **Moddé (ATM10)** et **Vanilla**.

Le site est conçu en **HTML/CSS/JS pur** (sans framework lourd) pour une performance maximale et une animation fluide.

## ✨ Fonctionnalités

### 🔥 Version Moddée (ATM10)

- **Thème :** Nether / Lave / Sombre.
- **Ambiance :** Particules de braises (Embers) générées dynamiquement.
- **Design :** Interface "Glassmorphism" sombre et accents orange/rouge.

### 🌱 Version Vanilla (1.21+)

- **Thème :** Nature / Overworld / Vert.
- **Ambiance :** Particules de lucioles (Fireflies) avec animation de flottement.
- **Design :** Interface épurée, accents vert émeraude et cyan.

### ⚙️ Global

- **Statut en Temps Réel :** Utilise l'API `mcsrvstat.us` pour afficher si le serveur est en ligne et le nombre de joueurs connectés (Pterodactyl).
- **Copie d'IP :** Bouton interactif pour copier l'IP du serveur en un clic.
- **Responsive :** Adapté aux mobiles, tablettes et PC.
- **Navigation Fluide :** Menu sticky avec effet de flou et scroll fluide.

## 🛠️ Stack Technique

- **HTML5** : Structure sémantique.
- **CSS3** : Flexbox, Grid, Animations (keyframes), Variables CSS.
- **JavaScript (Vanilla)** : Logique des particules, API fetch, interaction DOM.
- **Ressources** : FontAwesome (icônes), Google Fonts (Inter & VT323).

## 📂 Structure du Projet

```text
├── index.html          # Page d'accueil (Version Moddée/Lave)
├── style.css           # Styles pour la version Moddée
├── script.js           # Logique JS pour la version Moddée
├── background.png      # Image de fond Nether
│
├── vanilla.html        # Page secondaire (Version Vanilla/Nature)
├── style-vanilla.css   # Styles pour la version Vanilla
├── script-vanilla.js   # Logique JS pour la version Vanilla
├── background-vanilla.png # Image de fond Nature
│
└── README.md           # Documentation

```

## 🚀 Installation & Utilisation

Ce site est statique. Il ne nécessite pas de backend (Node.js, PHP, etc.) pour fonctionner, car l'API de statut est externe.

1. **Cloner le repo :**

```bash
git clone https://github.com/lamolosau/svlk-website.git

```

2. **Lancer le site :**
   Il suffit d'ouvrir le fichier `index.html` dans votre navigateur.
   Pour une mise en ligne, déposez simplement les fichiers sur un hébergeur web (Apache, Nginx) ou via GitHub Pages.

## 📝 Configuration

Pour modifier les IP des serveurs ciblés par le script de statut :

1. Ouvrez `script.js` (pour le Moddé) ou `script-vanilla.js` (pour le Vanilla).
2. Modifiez la variable `serverIp` au début du bloc fetch :

```javascript
// Exemple dans script.js
const serverIp = "svlk.lakel.dev";

// Exemple dans script-vanilla.js
const serverIp = "svlkvanilla.lakel.dev";
```

## 🤝 Contribution

Ce projet est développé pour la communauté **SVLK**.
Si vous souhaitez proposer des modifications, n'hésitez pas à ouvrir une Pull Request.

## 📜 Crédits

- **Développement :** SVLK Team
- **Design Inspiration :** Minecraft Aesthetics (Nether & Overworld)
- **API Statut :** [mcsrvstat.us](https://mcsrvstat.us/)
