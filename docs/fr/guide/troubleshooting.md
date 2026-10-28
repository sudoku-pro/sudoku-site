# Dépannage

Cette page rassemble les problèmes courants et la manière de les résoudre.

## L'application ne démarre pas ou plante au lancement

Symptômes : Sudoku ne s'ouvre pas, plante immédiatement ou affiche une erreur inattendue.

Étapes à essayer :

1. Vérifiez que votre appareil répond à la configuration minimale (iOS/iPadOS 16+, macOS 15+).
2. Forcez la fermeture de l'application, puis relancez-la.
3. Redémarrez votre appareil.
4. Réinstallez l'application depuis l'App Store.
5. Si le problème persiste, ouvrez une issue sur le dépôt du projet en fournissant les détails.

## Problèmes de performance

Si le jeu saccade ou ralentit :

1. Fermez les autres applications gourmandes en ressources.
2. Sur Mac, consultez le Moniteur d'activité pour repérer une utilisation élevée du processeur.
3. Sur les appareils plus anciens, essayez un niveau de difficulté plus simple (Facile ou Moyen).

## La synchronisation iCloud ne fonctionne pas

Si votre progression ne se synchronise pas entre vos appareils :

1. Vérifiez que vous êtes connecté au même identifiant Apple sur tous les appareils.
2. Vérifiez que iCloud Drive est activé dans Réglages Système (Mac) ou Réglages (iOS/iPadOS).
3. Assurez-vous de disposer d'une connexion internet active.
4. Désactivez puis réactivez iCloud pour Sudoku dans Réglages → [Votre nom] → iCloud → Apps utilisant iCloud.
5. Redémarrez tous les appareils, puis réessayez.

## Game Center ne se connecte pas

Si les succès ou les classements Game Center ne se mettent pas à jour :

1. Vérifiez que vous êtes connecté à Game Center (Réglages → Game Center sur iOS ; Réglages Système sur Mac).
2. Vérifiez votre connexion internet.
3. Déconnectez-vous de Game Center, puis reconnectez-vous.

## Consulter les journaux

Pour diagnostiquer les plantages, les journaux de l'application sont utiles. Dans les versions sandbox (App Store) sur Mac, consultez :

```
~/Library/Containers/com.w3cub.sudoku/Data/Library/Logs/sudoku/sudoku.log
```

Sur iOS/iPadOS, connectez votre appareil à un Mac et utilisez Console.app pour consulter les journaux en filtrant sur « Sudoku ».

## Réinitialiser l'application

Pour réinitialiser les réglages et effacer les données locales (Mac) :

1. Quittez Sudoku
2. Supprimez le conteneur (attention : cela efface tous les réglages, les statistiques et les parties sauvegardées) :

```bash
rm -rf ~/Library/Containers/com.w3cub.sudoku
```

3. Rouvrez Sudoku et reconfigurez l'application.

Sur iPhone/iPad, supprimez puis réinstallez l'application pour réinitialiser toutes les données.

**Remarque** : si vous utilisez la synchronisation iCloud, une réinitialisation sur un appareil peut entraîner un nouveau téléchargement des données depuis iCloud après le redémarrage. Pour une réinitialisation complète sur tous les appareils, vous devrez peut-être la faire sur chacun d'eux.

## Signaler un problème

Lorsque vous ouvrez une issue, indiquez :

- Le type d'appareil (iPhone, iPad ou Mac)
- La version du système (Réglages → Général → Informations)
- La version de Sudoku (Réglages → À propos)
- Les étapes pour reproduire le problème
- Les journaux ou captures d'écran si vous en avez

Cela aide les mainteneurs à identifier et à corriger le problème plus rapidement.
