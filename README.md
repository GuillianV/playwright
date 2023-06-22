## Requirements

- Node >= v18
- npm

## Install

Copy `.env.exemple` to `.env`

Installer les dépendances
`npm i`

Installer prisma
`npx prisma generate`

Lancer l'application
`npm run dev`

## Tests

Les tests doivent être effectués pendant que l'application est lancée. Il faut ouvrir un nouveua terminal dans le projet pour éxucter les commandes pour les points suivants.

### Tests de charges

Tests effectués sur locust

![](https://github.com/GuillianV/playwright/blob/master/static/images/locus1.PNG)
![](https://github.com/GuillianV/playwright/blob/master/static/images/locus2.PNG)

### Tests fonctionnels

1. Installer Playwright

`npx playwright install`

2. Lancer Playwright

`npx playwright test`

### Tests unitaires

Utilisation de Jest dans le fichier `/tests/unitaire/unitaire.test.js`

Pour lancer les tests unitaires, faire la commande :
`npm run testUnitaire`

### Tests api

Utilisation de Jest dans le fichier `/tests/api/api.test.js`

Pour lancer les tests d'API, faire la commande :
`npm run testAPI`

### Mock

Un mock est utilisé dans le test d'API
