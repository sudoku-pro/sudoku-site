# Politique de confidentialité

Sudoku est une application conçue hors ligne en priorité, avec des fonctions cloud facultatives. Cette page explique quelles données (le cas échéant) l'application collecte et comment elles sont utilisées.

## Cœur hors ligne — aucune collecte de données pour le jeu

- Le jeu de puzzle principal est entièrement jouable hors ligne. Aucun accès réseau n'est nécessaire pour jouer.
- Toutes les données de jeu — réglages, état de la partie, notes au crayon et statistiques — sont stockées localement sur votre appareil.
- Il n'y a ni publicité, ni analyse d'audience, ni SDK de suivi tiers.

## Fonctions cloud facultatives

### Synchronisation iCloud (CloudKit)

Lorsque vous vous connectez à iCloud et activez la synchronisation :

- Les parties sauvegardées, les statistiques, les réglages et la progression du défi quotidien sont synchronisés vers votre **compte iCloud personnel** via le service CloudKit d'Apple.
- Les données sont chiffrées en transit et au repos par l'infrastructure d'Apple.
- Vous seul pouvez accéder à vos données synchronisées à l'aide de votre identifiant Apple.
- Cette fonction est entièrement facultative — l'application fonctionne parfaitement sans elle.

### Game Center

Lorsque vous vous connectez à Game Center :

- Les scores des classements (meilleurs temps de résolution par niveau de difficulté) peuvent être partagés sur des classements publics.
- La progression des succès est enregistrée par le service Game Center d'Apple.
- Votre nom d'affichage Game Center est visible par les autres joueurs dans les classements.
- Cette fonction est entièrement facultative.

## Le seul autre accès réseau : « Plus d'apps »

La seule fonction réseau hors cloud est une section facultative **« Plus d'apps »** dans les réglages, qui récupère auprès de nos serveurs une liste d'applications de la même famille. Cette fonction :

- Ne s'active que lorsque vous ouvrez Réglages → Plus d'apps.
- Récupère une liste légère de noms et de liens d'applications — aucune donnée personnelle n'est envoyée ni stockée.
- Peut être totalement ignorée et n'affecte en rien le jeu.

## Ce que nous ne collectons pas

- Nous ne collectons ni informations personnelles, ni fichiers, ni images, ni historique de navigation.
- Nous n'envoyons aucune donnée de jeu vers des serveurs externes (sauf dans les cas décrits ci-dessus pour iCloud et Game Center).
- Nous n'intégrons aucun SDK d'analyse d'audience ou de publicité tiers.
- Nous n'utilisons aucun service de rapport de plantage ni de télémétrie.

## Autorisations

Sudoku requiert un minimum d'autorisations :

- **iCloud** (facultatif) : pour synchroniser les données de jeu entre appareils via CloudKit.
- **Game Center** (facultatif) : pour les classements et les succès.
- **Réseau** (facultatif) : pour la synchronisation iCloud, Game Center et « Plus d'apps ».

Aucune autorisation de localisation, de contacts, d'appareil photo, de microphone ou d'autre autorisation sensible n'est demandée.

## Conservation des données

- Les données locales restent sur votre appareil jusqu'à ce que vous désinstalliez ou réinitialisiez l'application.
- Les données synchronisées via iCloud suivent la politique de conservation des données iCloud d'Apple.
- Les données Game Center suivent les politiques Game Center d'Apple.

## Demandes relatives à la confidentialité

Étant donné que Sudoku stocke toutes les données localement (et, si vous le souhaitez, dans votre iCloud personnel), aucun serveur de notre côté ne détient ou ne consulte de données. Pour effacer toutes les données de l'application :

- **Désinstallez l'application** de votre ou vos appareils.
- **Réinitialisez les données iCloud** : dans Réglages → [Votre nom] → iCloud → Gérer le stockage du compte → Sudoku → Supprimer les données.
- **Réinitialisation locale sur Mac** : consultez le guide de dépannage pour les instructions de suppression du conteneur.

## Confidentialité des enfants

Sudoku ne collecte activement aucune information personnelle, y compris auprès des enfants. L'application ne nécessite ni compte, ni fonction de messagerie, ni réseau social.

## Contact

Pour toute question relative à la confidentialité, ouvrez une issue sur le dépôt du projet (https://github.com/sudoku-pro/sudoku-site) ou écrivez-nous à sudoku@w3cub.com.
