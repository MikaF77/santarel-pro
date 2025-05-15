# 🌿 Santarel – Site Professionnel

Ce dépôt contient le code du **site professionnel du Laboratoire Santarel**, destiné aux praticiens de santé partenaires.  
Ce portail permet aux professionnels de se connecter, consulter leurs mouvements de compte, l'historique de leurs patients, les produits, les formations et gérer leurs commandes.

---

## 🚀 Fonctionnalités principales

- ✅ Connexion sécurisée via AWS Cognito
- 📊 Tableau de bord du praticien
- 🧾 Mouvements de compte (factures, règlements, avoirs)
- 👥 Historique clients et commandes
- 🧴 Produits disponibles avec tarifs pro
- 🎓 Webinaires & Formations en ligne
- 📦 Commandes pro (à venir)
- 🧍 Profil utilisateur et préférences
- 🔒 Déconnexion globale (`signOut({ global: true })`)

---

## 🧱 Architecture technique

- **Frontend** : Next.js 15.3.1 (App Router) + React 19 + Tailwind CSS  
- **Auth** : AWS Cognito (User Pool) + `aws-amplify@5.x`  
- **Backend** : API REST (connectée à HyperFileSQL via WinDev)  
- **Stockage fichiers (images)** : AWS S3  
- **Déploiement** : Vercel (ou hébergeur interne)

---

## 📂 Structure du projet

```
santarel-pro/
├── src/
│   ├── app/
│   │   ├── page.tsx               → Page de connexion (accueil)
│   │   ├── dashboard/             → Dashboard protégé
│   │   ├── activite/            → Mouvements du compte
│   │   ├── patients/               → Historique des patients
│   │   ├── produits/              → Produits disponibles
│   │   ├── formation/            → Webinaires & replays
│   │   ├── contact/               → Formulaire de contact
│   │   └── mon-compte/            → Profil utilisateur
│   ├── components/
│   │   └── AmplifyProvider.tsx    → Wrapper client pour `Amplify.configure(...)`
│   │   ├── DashboardLayout.tsx
│   │   ├── Header.tsx
│   │   ├── PageLayout.tsx
│   ├── lib/
│   │   └── amplify-client.ts      → (optionnel) initialisation Amplify
│   ├── aws-exports.ts            → Configuration Cognito / Amplify
│   └── styles/
│       └── globals.css
├── public/
├── package.json
└── tsconfig.json
```

---

## 🔧 Installation & Configuration requise

1. **Créer un User Pool** dans la région `eu-west-3`  
2. **Créer un App Client** (sans secret) et **cochez** au minimum :
   - `ALLOW_USER_SRP_AUTH`
   - **(optionnel)** `ALLOW_USER_PASSWORD_AUTH` si vous souhaitez le flux mot de passe simple  
   - `ALLOW_REFRESH_TOKEN_AUTH`
3. **Mettre à jour** `src/aws-exports.ts` **pour v5** (pas de bloc `Cognito` imbriqué) :

   ```ts
   // src/aws-exports.ts
   const awsconfig = {
     Auth: {
       region: 'eu-west-3',
       userPoolId: 'eu-west-3_ptH9upn19',
       userPoolWebClientId: '4vfbgahm30kjk72u071n3sj1kf',
       // facultatif : 'USER_SRP_AUTH' ou 'USER_PASSWORD_AUTH'
       authenticationFlowType: 'USER_PASSWORD_AUTH',
     }
   };
   export default awsconfig;
   ```
4. **Installer** les dépendances :

   ```bash
   npm install aws-amplify@^5.2.7 next@15 react@19 react-dom@19 tailwindcss postcss autoprefixer
   ```
5. **Configurer Amplify** au démarrage client :

   ```ts
   // src/components/AmplifyProvider.tsx
   'use client';
   import { Amplify } from 'aws-amplify';
   import awsconfig from '../aws-exports';
   Amplify.configure(awsconfig);
   export default function AmplifyProvider({ children }) { return <>{children}</>; }
   ```
6. **Démarrer** le serveur de développement :

   ```bash
   npm run dev
   ```

---

## 🧩 Composants clés

| Composant         | Rôle                                            |
|-------------------|--------------------------------------------------|
| `Header.tsx`      | Affiche le logo, le titre, le menu, le compte   |
| `PageLayout.tsx`  | Conteneur commun à toutes les pages pros        |
| `AmplifyProvider` | Initialise Amplify côté client                  |

---

## 📦 Versions recommandées

- `next`: 15.3.1  
- `aws-amplify`: ^5.2.7  
- `tailwindcss`: ^4.x  
- `typescript`: ^5.x  

---

## 🔐 Accès pro

> Ce site est réservé aux praticiens de santé disposant d’un compte partenaire validé par l’équipe Santarel.

Pour toute question : [contact@santarel.fr](mailto:contact@santarel.fr)