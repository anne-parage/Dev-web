# 🛍️ Projet Final DevWeb – Boutique avec Web Components

Ce projet est une boutique en ligne simple utilisant **HTML**, **JavaScript (Web Components)** et le **Shadow DOM**. Il inclut des cartes de produits interactives et un graphique de progression des achats.

---

## 🔧 Fonctionnalités

### ✅ Composant `<product-card>`
- Affiche un produit avec :
  - Image
  - Nom
  - Prix
  - Description
  - Bouton "Add to cart"
- Envoie un événement `add-to-cart` lors d’un clic sur le bouton.

### 📈 Composant `<progress-graph>`
- Affiche la **progression des achats** pour chaque produit.
- Affiche dynamiquement :
  - Le **nombre d’achats**
  - Le **pourcentage** par rapport au total
- Met à jour automatiquement à chaque ajout au panier.

---

## 📁 Structure du projet

📦 projet-final-devweb/
├── index.html ← Page principale
├── composant.js ← Définition des composants personnalisés
├── stitch.jpg ← Image du produit Stitch
├── casque.jpg ← Image du produit Casque
└── README.md ← Documentation du projet

---

## 🚀 Lancer le projet

1. Clone ou télécharge ce dépôt.
2. Ouvre `index.html` dans ton navigateur.
3. Clique sur les boutons **Add to cart** pour voir la progression des achats.

---

## 🧠 Concepts utilisés

- Web Components (`customElements.define`)
- Shadow DOM (`this.attachShadow`)
- Événements personnalisés (`CustomEvent`)
- Styles encapsulés pour chaque composant

---

## ✏️ Auteur

- 👨‍💻 Projet réalisé dans le cadre du cours **Développement Web**
- 🎓 Étudiant Anne & Marine

---

## 📄 Licence

Ce projet est libre d’utilisation pour un usage pédagogique.

