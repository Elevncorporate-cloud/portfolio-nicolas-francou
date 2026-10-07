# Portfolio de Nicolas Francou - mode d'emploi

## Contenu du dossier

```
portfolio-nicolas-francou/
├── index.html            Le site (structure, styles, fonctionnement). Ne pas modifier pour changer un texte.
├── content.js            TOUS les textes, projets, médias et réglages. C'est ici qu'on modifie.
├── assets/
│   ├── bannieres/        27 bannières illustrant les cartes des méthodes (générées par IA, 1200 x 400)
│   ├── captures/         Captures d'écran des réalisations
│   ├── videos/           Vidéos, couvertures et sous-titres (.vtt)
│   └── documents/        Certificat Qualiopi, exemples de CV (PDF) dans exemples-cv/
├── livrables/
│   ├── briefs-video.md       Un brief d'enregistrement par réalisation
│   ├── pieces-a-fournir.md   Captures, liens et fichiers à fournir
│   ├── checklist-faits.md    Faits à valider avant publication
│   └── trames-orales.md      Deux présentations orales de trois minutes
└── LISEZ-MOI.md
```

## Ouvrir le site

Double-cliquez sur `index.html`. Il s'ouvre dans le navigateur, sans serveur ni installation.

- Le site s'organise en une page d'accueil puis trois onglets : **Nos réalisations**, **Formateur certifié**, **Chef de projet IA**.
- `index.html#realisations`, `index.html#formateur`, `index.html#chef-de-projet` ouvrent directement un onglet ; `index.html#projet-machine-a-cv` ouvre une réalisation précise, détail déplié.
- `index.html?travail=1` ouvre le **mode travail** : les éléments en préparation (sites, exemple e-learning, preuves à fournir) sont affichés avec un repère. Ils restent masqués dans la version présentable.

## Modifier un texte, un projet, un média

1. Ouvrez `content.js` avec un éditeur de texte (TextEdit en mode texte brut, VS Code, Notepad…).
2. Modifiez le texte entre guillemets. Conservez les guillemets, les virgules et les accolades.
3. Enregistrez, puis rechargez la page dans le navigateur.

Points utiles :

- `visible: true / false` affiche ou masque une réalisation ou un exemple.
- `statut` accepte trois valeurs : `"Réalisation"`, `"Projet en cours"`, `"Exemple pédagogique"`.
- `video: null` → aucun lecteur. Pour activer une vidéo, voir `livrables/briefs-video.md`. `videos: [...]` affiche plusieurs vidéos verticales côte à côte (HINTOOFOOT).
- Le logo de la barre est `assets/logo-elevn-corporate.jpg`.
- Les avis sont dans `avis.liste` (nom, poste, date, texte, lien, photo). Les photos sont dans `assets/avis/`. Pour retirer un avis, supprimez son bloc `{ ... },`. `avis.afficherDates: true` affiche la date de chaque recommandation (masquée par défaut). Les entrées marquées `photoIllustration: true` utilisent une photo d'illustration (`apprenant-1` à `apprenant-4`), pas la photo de la personne.
- Une capture peut porter `fichier: "assets/documents/....pdf"` : un lien « Ouvrir le PDF » apparaît sous la légende (utilisé pour les exemples de CV).
- `captures: []` → aucune galerie. Pour ajouter : `captures: [{ src: "assets/captures/fichier.png", alt: "Description", legende: "Légende" }]`.
- Après une modification de `content.js` publiée en ligne, changez le numéro dans `<script src="content.js?v=26">` (index.html) pour forcer les navigateurs à recharger les contenus.
- `reglages.portrait` (grande photo), `reglages.portraitAvatar` (petit rond d'accueil), `reglages.cvPdf`, `reglages.certificatQualiopi` : renseignez le chemin du fichier pour faire apparaître le portrait, le bouton « Consulter mon CV » et le bouton « Consulter le certificat ».
- L'accueil est une scène 3D (Three.js, fichier `assets/accueil-3d.js`, bibliothèque dans `assets/vendor/`) pilotée par le défilement : deux cubes aux couleurs de l'emblème s'assemblent puis tournent, avec des éclats flottants et une parallaxe à la souris. Trois panneaux de texte se fondent dessus (réglage `CUES` dans `index.html`). Couleurs, positions et lumières se règlent en tête de `accueil-3d.js`. Sans WebGL ou avec « réduire les animations », l'accueil affiche une image fixe (`assets/videos/accueil-embleme-affiche.jpg`).
- `reglages.videoAccueil` : `true` remet la vidéo des agents sur la page d'accueil (retirée pour éviter le doublon avec la carte des réalisations).
- `image` sur chaque étape ou point des grilles (méthode, savoir-faire, e-learning, cadrage, adoption) : la bannière affichée en haut de la carte. Pour en changer une : déposez un JPG 1200 x 400 dans `assets/bannieres/` et modifiez le chemin.
- `illustration` (dans `methodePedagogique`, `methodeCadrage`, `adoption`) : la vignette image qui complète la grille de cinq cartes (src, étiquette, légende, lien vers une réalisation).
- `vignetteImage` : image d'une réalisation dans les grilles de vignettes des onglets Formateur et Chef de projet (sinon : couverture vidéo, première capture ou premier site).
- `programmeIA` : la section « Formation et acculturation à l'IA » (thèmes avec mots-clés, méthode CRAFT et son exemple, objectifs, savoirs, façon de travailler). Tout se modifie dans ce bloc.
- `faits` : les trois coches affichées sous le résumé d'une réalisation (gardez-les courtes).
- `sitesListe` : les sites de la collection, avec leur capture.
- Les textes longs (besoin, parcours, choix, contribution, rôle de l'IA) restent dans `content.js` mais n'apparaissent qu'en cliquant « Voir le détail ».

Si la page devient blanche après une modification, une virgule ou un guillemet manque dans `content.js`. Annulez la dernière modification.

## Modes de présentation et impression

- **Mode présentation** (bouton en haut à droite) : textes agrandis, pour projeter en entretien.
- **Imprimer** : version imprimable, tous les contenus développés, sans boutons ni vidéos. Choisir « Enregistrer en PDF » dans la boîte d'impression pour obtenir un PDF transmissible.

## Publier le site

Le site est en ligne sur GitHub Pages, à partir du dépôt public `Elevncorporate-cloud/portfolio-nicolas-francou` (branche `main`, racine) :

**https://elevncorporate-cloud.github.io/portfolio-nicolas-francou/**

Tout ce qui est poussé sur la branche `main` est en ligne une à deux minutes plus tard. Le dossier `livrables/` n'est pas publié (fichier `.gitignore`), car il contient des notes de travail.

Pour mettre à jour le site :

- Depuis cette conversation : demandez simplement la modification, je pousse la nouvelle version.
- Depuis votre ordinateur : modifiez `content.js` ou un fichier de `assets/`, puis sur github.com, ouvrez le dépôt, bouton « Add file → Upload files », déposez les fichiers modifiés et validez (« Commit changes »). Pensez à changer le numéro `content.js?v=…` dans `index.html` si vous modifiez `content.js`, pour forcer le rechargement chez les visiteurs.

Pour une adresse à votre nom (par exemple `portfolio.elevencorporate.com`) : chez votre registrar, ajoutez un enregistrement DNS `CNAME` de `portfolio` vers `elevncorporate-cloud.github.io`, puis dans le dépôt, Settings → Pages → Custom domain, saisissez `portfolio.elevencorporate.com` et cochez « Enforce HTTPS ».

Avant de publier une modification de contenu, passez par `livrables/checklist-faits.md` : rien de non confirmé ne doit rester affiché.

## Police de caractères

Le site charge la police DM Sans depuis Google Fonts. Sans connexion, il utilise des polices de remplacement et reste lisible. Pour un fonctionnement entièrement hors ligne, téléchargez la police et remplacez le lien `<link href="https://fonts.googleapis.com/…">` dans `index.html` par des règles `@font-face` locales.
