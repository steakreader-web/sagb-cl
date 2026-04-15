# Analyseur Contrôle Laitier — SAGB
## Application hors-ligne / PWA

---

### 📁 Contenu du dossier

```
sagb-app/
├── index.html              ← Application principale
├── manifest.json           ← Configuration PWA
├── sw.js                   ← Service Worker (cache hors-ligne)
├── xlsx.full.min.js        ← Lecture fichiers Excel (.xlsx)
├── chart.min.js            ← Graphiques
├── jspdf.min.js            ← Génération PDF
├── jspdf.autotable.min.js  ← Tableaux dans PDF
├── icon-192.png            ← Icône application
├── icon-512.png            ← Icône application (grande)
└── README.md               ← Ce fichier
```

---

### 💻 Utilisation sur PC (Windows / Mac / Linux)

**Option A — Double-clic direct (le plus simple)**
1. Ouvrir le dossier `sagb-app`
2. Double-cliquer sur `index.html`
3. L'application s'ouvre dans votre navigateur (Chrome recommandé)

> ⚠️ Important : garder tous les fichiers dans le **même dossier**. Ne pas déplacer `index.html` seul.

**Option B — Installer comme application sur PC**
1. Ouvrir `index.html` dans Chrome ou Edge
2. Dans la barre d'adresse, cliquer sur l'icône d'installation (⊕)
3. Cliquer "Installer"
4. L'application apparaît comme un vrai programme dans le menu démarrer

---

### 📱 Utilisation sur téléphone Android

**Via fichier local :**
1. Copier tout le dossier `sagb-app` sur le téléphone (USB ou WhatsApp)
2. Ouvrir le gestionnaire de fichiers
3. Appuyer sur `index.html` → choisir Chrome
4. Chrome → menu ⋮ → "Ajouter à l'écran d'accueil"

**Via GitHub Pages (si connexion disponible une première fois) :**
1. Ouvrir l'URL GitHub Pages dans Chrome
2. Menu ⋮ → "Ajouter à l'écran d'accueil"
3. Ensuite l'app fonctionne sans internet

---

### 🌐 Déploiement sur GitHub Pages (accès URL partagée)

1. Créer un compte gratuit sur https://github.com
2. Nouveau dépôt → nom : `sagb-cl` → Public
3. Uploader tous les fichiers du dossier `sagb-app`
4. Settings → Pages → Branch: main → Save
5. URL disponible : `https://votre-nom.github.io/sagb-cl`

Tous les techniciens peuvent accéder via cette URL, **sans abonnement**, à vie.
La première visite met tout en cache → fonctionne ensuite hors-ligne.

---

### 💾 Sauvegarde des données

Les données (éleveurs, contrôles) sont stockées dans le **localStorage** du navigateur.

- **Exporter** : bouton "💾 Sauvegarder JSON" dans la barre latérale
- **Importer** : bouton "📤 Charger JSON"
- **Partager entre appareils** : exporter le JSON → envoyer par WhatsApp/email → importer sur l'autre appareil

---

### ⚙️ Colonnes attendues dans les fichiers Excel

**Fichier Contrôle Laitier :**
| Colonne | Description |
|---------|-------------|
| Nom Prod | Nom de l'éleveur |
| Date Controle | Date du contrôle (JJ/MM/AAAA) |
| SNIT | Identifiant animal |
| Date Naiss | Date naissance animal |
| Date Der Vel | Date dernier vêlage |
| Qte Tot Lait | Production totale (L/j) |
| MG | Matière grasse (g/L) |
| MP | Matière protéique (g/L) |
| UREE | Urée lait (mg/L) |
| CELL | Cellules somatiques (k/mL) |
| NUM LACT | Numéro de lactation |
| MML | Mois moyen de lactation |

**Fichier Inséminations :**
| Colonne | Description |
|---------|-------------|
| Nom Prod | Nom de l'éleveur |
| SNIT | Identifiant animal |
| Date I. A. | Date insémination |
| Taureau | Nom du taureau |
| Race Animal | Race de la vache |
| Date Naiss. | Date naissance |

---

### 🔧 Version
**v2.1** — Avril 2026  
SAGB — Chtouka-Ait Baha  
Application développée pour le suivi du contrôle laitier COPAG/SAGB
