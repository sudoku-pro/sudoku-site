# Choix de confidentialité

Sudoku est une application conçue hors ligne en priorité, avec des pratiques minimales en matière de données. Cette page présente vos options de confidentialité et la manière de contrôler vos données.

## Vos données restent sur votre appareil (par défaut)

- Toutes les données de jeu — réglages, état de la partie, notes au crayon et statistiques — sont stockées localement sur votre appareil par défaut.
- Le cœur du jeu ne nécessite aucun accès réseau.
- Il n'y a ni publicité, ni analyse d'audience, ni suivi.

## Fonctions cloud facultatives

### Synchronisation iCloud

Si vous choisissez d'activer la synchronisation iCloud :

- Les données sont synchronisées uniquement vers **votre compte iCloud personnel** — jamais vers un serveur que nous contrôlons.
- CloudKit d'Apple assure le chiffrement en transit et au repos.
- Vous pouvez la désactiver à tout moment : Réglages → [Votre nom] → iCloud → Apps utilisant iCloud → désactivez Sudoku.

### Game Center

Si vous choisissez d'utiliser Game Center :

- Les scores des classements peuvent apparaître publiquement sous votre nom d'affichage Game Center.
- La progression des succès est enregistrée par Game Center.
- Vous pouvez la désactiver en vous déconnectant de Game Center dans les réglages.

## La seule fonction réseau hors cloud : « Plus d'apps »

Le seul autre accès réseau est la section facultative **« Plus d'apps »** dans les réglages, qui récupère une liste d'applications de la même famille. Cette fonction :

- N'envoie aucune donnée personnelle — elle récupère seulement une liste de noms et de liens d'applications.
- Peut être totalement ignorée, sans aucune incidence sur le jeu.
- Ne vous suit pas et ne stocke aucun identifiant.

## Effacer vos données

Pour supprimer toutes les données de l'application de votre appareil :

- **iPhone/iPad** : supprimez puis réinstallez l'application
- **Mac** : quittez Sudoku, puis supprimez le conteneur :

```bash
rm -rf ~/Library/Containers/com.w3cub.sudoku
```

Pour effacer également les données synchronisées via iCloud :
1. Ouvrez **Réglages → [Votre nom] → iCloud → Gérer le stockage du compte**
2. Recherchez Sudoku dans la liste des applications
3. Touchez **Supprimer les données**

Cette opération supprime définitivement d'iCloud tous les réglages, les statistiques, les parties sauvegardées et la progression du défi quotidien.

## Aucun suivi, aucune publicité

Sudoku ne contient ni publicité, ni analyse d'audience, ni pixel de suivi, ni intégration de partage de données avec des tiers. L'application ne nécessite aucun accès réseau pour jouer.

## Récapitulatif des demandes de confidentialité

| Demande | Obligatoire ? | Ce qu'elle fait |
|---------|-----------|-------------|
| Stockage local | Oui (automatique) | Stocke les données de jeu sur l'appareil |
| Synchronisation iCloud | Facultative | Synchronise les données entre vos appareils via CloudKit |
| Game Center | Facultative | Classements et succès |
| Réseau (« Plus d'apps ») | Facultative | Récupère la liste des applications de la même famille |

Étant donné qu'aucune donnée personnelle n'est collectée ni transmise à des serveurs que nous contrôlons, il n'existe aucune base de données centrale à consulter, supprimer ou exporter. Toutes les données sont soit locales, soit gérées par les services d'Apple (iCloud et Game Center).

## Contact

Si vous avez des questions sur ce processus, ouvrez une issue à l'adresse `https://github.com/sudoku-pro/sudoku-site/issues` ou écrivez à sudoku@w3cub.com.
