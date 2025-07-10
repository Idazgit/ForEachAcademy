# 🛠 Excuses de Dev - README

Bonjour !  
Dans ce README de projet, vous retrouverez les **technologies utilisées** ainsi que ma **méthode de travail** et de réflexion. Pour une meilleure compréhension du code, vous trouverez dans la plupart des fichiers des petits **commentaires complémentaires**.

---

## 🚀 TECHNOLOGIES

### 🔧 Backend :

- **Node.js**
- **SQLite3**
  > J’ai choisi Node.js car c’est l’environnement avec lequel je suis le plus à l’aise. SQLite3 est une base de données légère, suffisante pour ce type de projet.

### 🎨 Frontend :

- **Vite**
- **React**
  > J’ai opté pour Vite + React car je suis en pleine phase d’apprentissage dessus.

---

## ▶️ LANCEMENT DU PROJET

```
cd excuses-de-dev
npm install
```

### Ouvrir deux terminaux :

**Premier terminal**

```
cd backend
npm install
npm run start
```

**Deuxième terminal**

```
cd frontend
npm install
npm run dev
```

Ou bien pour tout lancer automatiquement depuis la racine :

```
npm run start
```

---

## 🔍 EXPLICATIONS BACKEND

J’ai structuré le backend en **architecture en couches** :

### 📦 Models :

Dans `excuseModel.js`, vous trouverez une classe orientée objet avec une méthode `isValid()` pour vérifier les propriétés de la classe.

### 📁 Repositories :

Dans `excuseRepository.js`, j’ai choisi de ne pas inclure toutes les méthodes du CRUD car elles ne sont pas demandées. Le fichier contient des commentaires explicatifs.

### ⚙️ Services :

Dans `excuseService.js`, je récupère les méthodes du repository pour y ajouter la logique métier, notamment des validations (comme `isValid()`), puis je retourne le résultat au contrôleur.

### 🧠 Controllers :

Dans `excuseController.js`, je gère les retours d’erreurs avec les bons codes HTTP. Pour la méthode `create`, j’ai ajouté des explications directement dans le fichier.

### 🌐 Routes :

Dans `excuseRoute.js`, j'importe les controllers pour créer mes routes avec Express.

---

## 🌐 ROUTES DISPONIBLES

| Description                      | URL                                    |
| -------------------------------- | -------------------------------------- |
| Afficher toutes les excuses      | `http://localhost:4000/excuses`        |
| Ajouter une excuse               | `http://localhost:4000/excuses/create` |
| Trouver une excuse par HTTP code | `http://localhost:4000/excuses/701`    |
| Obtenir une excuse aléatoire     | `http://localhost:4000/excuses/random` |

---

## 💻 EXPLICATIONS FRONTEND

Sur la partie React, j’ai choisi de créer plusieurs composants :

- **`Menu.jsx`** : composant parent qui gère l’affichage
- **`Button.jsx`** : composant enfant pour les boutons
- **`ModalPost.jsx`** : composant du modal pour ajouter une excuse à la base de données
- **`Changecode.jsx`** : une ancienne fonction que je n’ai finalement pas utilisé, mais que j’ai laissé car je trouvais intéressant pour comprendre ma manière de penser.
