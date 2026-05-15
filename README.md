# Analyseur Contrôle Laitier — SAGB
## Application hors-ligne / PWA — v2.1

---

### 📁 Contenu du dossier (simplifié)

```
sagb-cl/
├── index.html      ← Application complète (tout-en-un, 1.5 MB)
├── manifest.json   ← Configuration PWA
├── sw.js           ← Service Worker (cache hors-ligne)
├── icon-192.png    ← Icône application
├── icon-512.png    ← Icône application (grande)
└── README.md       ← Ce fichier
```

> ⚡ **Les bibliothèques JS (xlsx, chart, jspdf) sont intégrées directement
> dans index.html** — aucun fichier JS externe nécessaire.

---

### 💻 Utilisation sur PC

**Double-clic direct :**
1. Ouvrir le dossier
2. Double-cliquer sur `index.html`
3. L'application s'ouvre dans Chrome

**Installer comme application :**
1. Ouvrir dans Chrome
2. Icône ⊕ dans la barre d'adresse → Installer

---

### 📱 Utilisation sur téléphone Android

1. Ouvrir l'URL GitHub Pages dans Chrome
2. Menu ⋮ → "Ajouter à l'écran d'accueil"
3. Fonctionne ensuite hors-ligne

---

### 🌐 URL GitHub Pages

```
https://votre-nom.github.io/sagb-cl
```

---

### ⚙️ Colonnes Excel attendues

**Contrôle Laitier :**
Nom Prod · Date Controle · SNIT · Date Naiss · Date Der Vel
Qte Tot Lait · MG · MP · UREE · CELL · NUM LACT · MML

**Inséminations :**
Nom Prod · SNIT · Date I.A. · Taureau · Race Animal · Date Naiss.

---

### 💾 Sauvegarde des données

- **Exporter** : bouton "💾 Sauvegarder JSON"
- **Importer** : bouton "📤 Charger JSON"
- **Partager** : exporter JSON → WhatsApp → importer sur autre appareil

---

### 🔧 Version
**v2.1** — Mai 2026
SAGB — Chtouka-Ait Baha — Souss-Massa
COPAG — Contrôle Laitier
