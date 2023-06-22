# Application CRM
#### Par ANTHOINE-MILHOMME Justin et VIBERT-VALLET Guillian
Le projet reprend le design d'un CRM de l'an 2003, très design et ergonomique pour son époque (artistique).

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

Les tests doivent être effectués pendant que l'application est lancée. Il faut ouvrir un nouveua terminal dans le projet pour éxucter les commandes pour les tests suivant.

### Tests de charges

Tests effectués sur locust et sur le site `back.petitbac.online`

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

Résultat:

<img width="505" alt="image" src="https://github.com/GuillianV/playwright/assets/45208166/fdb1938e-e21f-4404-93f3-af346d93319b">


### Tests api

Utilisation de Jest dans le fichier `/tests/api/api.test.js`

Pour lancer les tests d'API, faire la commande :
`npm run testAPI`

Résultat:

<img width="524" alt="image" src="https://github.com/GuillianV/playwright/assets/45208166/f2af93d9-eaee-491c-9879-415508eda242">

### Mock

Un mock est utilisé dans le test d'API
