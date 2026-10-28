# Contribuer

Nous accueillons avec plaisir les contributions qui améliorent la documentation de Sudoku ! Que vous corrigiez une faute de frappe, ajoutiez un nouveau guide ou amélioriez un contenu existant, votre aide est la bienvenue.

## Comment contribuer

### Améliorer la documentation
- Corriger les fautes de frappe ou de grammaire
- Clarifier des instructions confuses
- Ajouter des informations manquantes
- Mettre à jour des contenus obsolètes
- Améliorer la mise en forme et la lisibilité

### Créer du contenu
- Rédiger des guides sur les problèmes courants
- Ajouter des tutoriels ou des exemples
- Traduire la documentation dans d'autres langues
- Écrire des entrées de FAQ

### Contributions techniques
- Améliorer le processus de build
- Ajouter de nouvelles fonctionnalités au site de documentation
- Corriger des bugs dans le workflow de déploiement

## Pour commencer

### Prérequis
- Node.js 18 ou version ultérieure
- Le gestionnaire de paquets pnpm
- Git

### Configurer l'environnement de développement

1. **Dupliquez le dépôt (fork)** sur GitHub
2. **Clonez votre fork** :
   ```bash
   git clone https://github.com/YOUR_USERNAME/sudoku-site.git
   cd sudoku-site
   ```
3. **Installez les dépendances** :
   ```bash
   pnpm install
   ```
4. **Lancez le serveur de développement** :
   ```bash
   pnpm docs:dev
   ```
5. Ouvrez `http://localhost:5173` dans votre navigateur

### Apporter des modifications

1. Créez une nouvelle branche pour vos modifications :
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Apportez vos modifications aux fichiers de documentation dans `docs/`
3. Testez vos modifications en construisant le site :
   ```bash
   pnpm docs:build
   ```
4. Validez vos modifications :
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### Soumettre des modifications

1. **Poussez votre branche** vers votre fork :
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Créez une Pull Request** sur GitHub
3. **Attendez la relecture** et répondez aux remarques

## Directives

### Style rédactionnel
- Utilisez un langage clair et concis
- Privilégiez la voix active lorsque c'est possible
- Soyez inclusif et accueillant
- Conservez une mise en forme cohérente
- Ajoutez des exemples de code lorsque c'est utile

### Structure des fichiers
- Les pages de documentation vont dans `docs/`
- Les guides vont dans `docs/guide/`
- Utilisez des noms de fichiers en minuscules avec des tirets : `my-new-guide.md`
- Le frontmatter n'est pas obligatoire, mais peut servir à ajouter des métadonnées

### Liens
- Utilisez des liens relatifs pour la documentation interne
- Ajoutez des liens vers des ressources externes lorsque c'est utile
- Vérifiez que tous les liens fonctionnent

### Images et ressources
- Placez les images dans `docs/public/` ou dans ses sous-répertoires
- Utilisez des noms de fichiers descriptifs
- Optimisez les images pour le web (moins de 500 Ko de préférence)

## Code de conduite

Ce projet applique un code de conduite. En y participant, vous vous engagez à :

- Faire preuve de respect et d'inclusion
- Privilégier les retours constructifs
- Assumer la responsabilité de vos erreurs

Consultez [CODE_OF_CONDUCT.md](https://github.com/sudoku-pro/sudoku-site/blob/main/CODE_OF_CONDUCT.md) pour plus de détails.

## Des questions ?

Si vous avez des questions sur la contribution :
- Consultez les [issues](https://github.com/sudoku-pro/sudoku-site/issues) et les [discussions](https://github.com/sudoku-pro/sudoku-site/discussions) existantes
- Créez une nouvelle issue si nécessaire
- Contactez les mainteneurs

Merci de contribuer à l'amélioration de la documentation de Sudoku ! 🎉
