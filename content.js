/* =====================================================================
   CONTENU DU PORTFOLIO - NICOLAS FRANCOU
   ---------------------------------------------------------------------
   Ce fichier centralise tous les textes, médias et réglages du site.
   Pour modifier le site, modifiez ce fichier uniquement, puis rechargez
   index.html dans le navigateur.

   Règles :
   - visible: true  -> l'élément apparaît dans la version présentable.
   - visible: false -> l'élément est conservé dans la structure de travail
                       et masqué dans la version présentable. Il apparaît
                       seulement en mode travail (index.html?travail=1),
                       avec un repère « en préparation ».
   - Les médias (captures, vidéos, documents) sont déclarés par leur
     chemin dans le dossier assets/. Un média absent (chemin vide ou
     null) ne crée jamais de lecteur vide ni de bouton inactif.
   - Aucun chiffre, résultat, témoignage ou certification ne doit être
     ajouté ici sans preuve. La checklist des faits à valider se trouve
     dans livrables/checklist-faits.md.
   ===================================================================== */

window.PORTFOLIO = {

  /* ------------------------------------------------------------------
     RÉGLAGES GÉNÉRAUX
     ------------------------------------------------------------------ */
  reglages: {
    parcoursParDefaut: "formateur",          // "formateur" ou "chef-de-projet"
    videoAccueil: false,   // true pour remettre la vidéo des agents sur la page d'accueil (sera remplacée par une animation)
    portrait: "assets/portrait.jpg",           // photo principale (onglet Formateur). Autres options : assets/portrait-option-1/2/3.jpg
    portraitAvatar: "assets/portrait.jpg",        // petit rond de la page d'accueil (même cadrage que la grande photo)         // portrait professionnel ; vide = composition typographique NF
    cvPdf: "",                               // ex. "assets/documents/cv-nicolas-francou.pdf"
    certificatQualiopi: "assets/documents/certificat-qualiopi-elevn-corporate.pdf",
    contact: {
      email: "elevncorporate@gmail.com",
      site: "https://elevencorporate.com",
      siteLibelle: "elevencorporate.com",
      linkedin: "",                          // ex. "https://www.linkedin.com/in/..." (vide = masqué)
      novoia: "https://novoia.fr"
    },
    messageCentral: "Nicolas sait comprendre un besoin métier, concevoir une solution et accompagner les utilisateurs jusqu'à l'autonomie.",
    appelAction: "Confiez-nous vos projets : ils seront entre de bonnes mains."
  },

  /* ------------------------------------------------------------------
     PREMIER ÉCRAN
     ------------------------------------------------------------------ */
  identite: {
    nom: "Nicolas Francou",
    titre: "Formateur IA · Chef de projet IA",
    fondateur: "Fondateur d'Elev'n Corporate et de Novoia",
    qualiopi: "Fondateur d'Elev'n Corporate, organisme de formation certifié Qualiopi.",
    accroche: "Concevoir des solutions utiles. Transmettre les compétences pour les utiliser.",
    introduction: "J'associe management de terrain, ingénierie pédagogique et conception de solutions numériques pour accompagner les équipes vers une utilisation responsable, sécurisée et opérationnelle de l'intelligence artificielle générative : formation, acculturation, prompting, vérification, protection des données.",
    dimensions: [
      {
        numero: "01",
        titre: "Comprendre et concevoir",
        texte: "Je comprends les besoins métier et conçois des solutions numériques avec l'IA, en partant du travail réel des utilisateurs."
      },
      {
        numero: "02",
        titre: "Expliquer et accompagner",
        texte: "Je sais expliquer les solutions et accompagner leur prise en main, jusqu'à ce que les équipes les utilisent sans moi."
      },
      {
        numero: "03",
        titre: "Former dans un cadre structuré",
        texte: "Je conçois et anime des formations dans un cadre professionnel structuré, avec des objectifs, une progression et une évaluation."
      }
    ]
  },

  /* ------------------------------------------------------------------
     PARCOURS (ordre des sections et angle de lecture)
     Les identifiants font référence aux sections déclarées plus bas.
     ------------------------------------------------------------------ */
  parcours: {
    "formateur": {
      libelle: "Formateur IA",
      sousTitre: "Pédagogie, cadre Qualiopi, e-learning et accompagnement vers l'autonomie.",
      ordre: ["positionnement", "elevn", "methode-pedagogique", "elearning", "demonstration", "realisations", "proposition"],
      realisationsIntro: "Les réalisations ci-dessous servent de supports de compréhension : elles montrent comment je traduis un besoin en solution, puis en explication accessible.",
      realisationsOrdre: ["agents-elevn", "machine-a-cv", "hintoofoot", "usinage", "devis-baumier", "sites", "elearnings"]
    },
    "chef-de-projet": {
      libelle: "Chef de projet IA",
      sousTitre: "Cadrage, pilotage, projets métier et adoption par les équipes.",
      ordre: ["positionnement", "methode-cadrage", "realisations", "adoption", "elevn", "methode-pedagogique", "elearning", "demonstration", "proposition"],
      realisationsIntro: "Projets industriels, outils grand public et sites : pour chacun, le besoin, ma contribution exacte, la solution et l'état réel du projet.",
      realisationsOrdre: ["usinage", "devis-baumier", "agents-elevn", "machine-a-cv", "hintoofoot", "sites", "elearnings"]
    }
  },

  /* ------------------------------------------------------------------
     PARCOURS PROFESSIONNEL (section positionnement)
     ------------------------------------------------------------------ */
  parcoursPro: {
    titre: "Une continuité : du terrain à la transmission, de la transmission à la conception",
    etapes: [
      {
        periode: "Plus de 18 ans",
        titre: "Retail et management",
        texte: "Management d'équipes et de points de vente, notamment chez JD Sports et Nike : recrutement, formation et accompagnement des équipes, pilotage d'objectifs au quotidien."
      },
      {
        periode: "Plus de 15 ans, en parallèle",
        titre: "Formation et transmission",
        texte: "Formateur en parallèle du management, bien avant la création de ma première société, Elev'n Corporate, en 2021. Interventions auprès de Digital College, My Business School, Icademie et France Travail, pour des publics aux niveaux de maîtrise numérique variés."
      },
      {
        periode: "Aujourd'hui",
        titre: "Conception et accompagnement des usages IA",
        texte: "Conception de formations, de supports, de parcours e-learning et de solutions numériques, avec l'IA générative comme outil de travail et comme objet de formation. Cofondateur de Novoia, dédiée aux produits et solutions IA (novoia.fr)."
      }
    ]
  },

  /* ------------------------------------------------------------------
     ELEV'N CORPORATE ET QUALIOPI
     ------------------------------------------------------------------ */
  elevn: {
    titre: "Elev'n Corporate, organisme de formation certifié Qualiopi",
    intro: "Elev'n Corporate est l'organisme de formation que j'ai fondé et que je dirige, à Aubagne. Il est certifié Qualiopi par ALTICERT pour la catégorie « actions de formation » (certificat n° 2025-307-01, valable du 3 novembre 2025 au 2 novembre 2028). La certification porte sur l'organisme et sur ce périmètre : elle atteste d'un cadre de travail structuré, pas d'une expertise individuelle ni d'une qualité des logiciels présentés ici. L'entreprise s'appuie aussi sur sa propre équipe d'agents IA, présentée dans les réalisations.",
    competences: [
      { titre: "Ingénierie pédagogique", image: "assets/bannieres/savoir-01-ingenierie.jpg", texte: "Analyse du besoin, objectifs pédagogiques, découpage en séquences, choix des modalités." },
      { titre: "Adaptation aux publics", image: "assets/bannieres/savoir-02-publics.jpg", texte: "Prise en compte du niveau numérique initial, des contraintes métier et du rythme de chacun." },
      { titre: "Animation de formations", image: "assets/bannieres/savoir-03-animation.jpg", texte: "Sessions en présentiel et à distance, alternance d'explications, de pratique et de retours." },
      { titre: "Supports et parcours e-learning", image: "assets/bannieres/savoir-04-elearning.jpg", texte: "Création de supports, d'activités et de parcours en ligne pour prolonger la formation." },
      { titre: "Évaluation des acquis", image: "assets/bannieres/savoir-05-evaluation.jpg", texte: "Évaluation avant, pendant et après la formation, pour mesurer la progression réelle." },
      { titre: "Accompagnement vers l'autonomie", image: "assets/bannieres/savoir-06-autonomie.jpg", texte: "Transfert en situation de travail et suivi, jusqu'à ce que l'apprenant n'ait plus besoin du formateur." }
    ],
    certificatLibelle: "Consulter le certificat Qualiopi",
    mentionLogo: "Le logo Qualiopi est affiché uniquement avec les éléments officiels et selon leurs règles d'usage."
  },

  /* ------------------------------------------------------------------
     MÉTHODE PÉDAGOGIQUE
     ------------------------------------------------------------------ */
  methodePedagogique: {
    titre: "Ma méthode pédagogique",
    intro: "Une formation réussie se mesure à ce que les participants font ensuite, seuls, dans leur travail. Ma méthode suit cinq temps.",
    illustration: { src: "assets/captures/elearning-plateforme-module-ia.jpg", alt: "Module e-learning IA conçu par Nicolas Francou", etiquette: "En situation", titre: "Exemple : un module e-learning IA", legende: "Un module e-learning IA : l'apprenant agit à chaque séquence.", lien: "#projet-elearnings" },
    etapes: [
      { numero: "1", titre: "Comprendre", image: "assets/bannieres/pedago-01-comprendre.jpg", texte: "Identifier les usages réels, le niveau initial et les attentes du public. Une formation IA pour des agents administratifs ne ressemble pas à une formation pour des développeurs." },
      { numero: "2", titre: "Expliquer", image: "assets/bannieres/pedago-02-expliquer.jpg", texte: "Donner les repères essentiels avec des exemples accessibles : ce qu'un outil fait, ce qu'il ne fait pas, et pourquoi." },
      { numero: "3", titre: "Faire pratiquer", image: "assets/bannieres/pedago-03-pratiquer.jpg", texte: "Exercices sur des cas métier des participants, pas sur des exemples abstraits. On apprend en faisant, avec un retour immédiat." },
      { numero: "4", titre: "Apprendre à vérifier et à protéger", image: "assets/bannieres/pedago-04-verifier.jpg", texte: "Repérer les erreurs et les biais, vérifier les réponses, savoir quelles informations ne doivent jamais être transmises à un outil." },
      { numero: "5", titre: "Évaluer et accompagner la suite", image: "assets/bannieres/pedago-05-evaluer.jpg", texte: "Mesurer l'autonomie acquise, identifier ce qui reste à consolider et organiser le relais dans l'équipe." }
    ]
  },

  /* ------------------------------------------------------------------
     MÉTHODE DE CADRAGE ET DE PILOTAGE (parcours chef de projet)
     ------------------------------------------------------------------ */
  methodeCadrage: {
    titre: "Ma méthode de cadrage et de pilotage",
    intro: "Un projet IA utile commence par une bonne compréhension du métier et se termine par des utilisateurs autonomes. Entre les deux, un cadrage précis et des décisions explicites.",
    illustration: { src: "assets/captures/baumier-04-nouveau-devis.jpg", alt: "Interface de saisie du devis automatisé", etiquette: "Exemple réel", titre: "Exemple : le devis automatisé", legende: "Devis automatisé : des règles métier formalisées avec les utilisateurs, des calculs vérifiables.", lien: "#projet-devis-baumier" },
    etapes: [
      { numero: "1", titre: "Découverte métier", image: "assets/bannieres/cadrage-01-decouverte.jpg", texte: "Observer le travail réel, rencontrer les utilisateurs, comprendre les règles, les exceptions et les irritants." },
      { numero: "2", titre: "Contraintes et périmètre", image: "assets/bannieres/cadrage-02-contraintes.jpg", texte: "Données disponibles, confidentialité, outils existants, délais. Ce qui est possible aujourd'hui, ce qui ne l'est pas." },
      { numero: "3", titre: "Priorisation", image: "assets/bannieres/cadrage-03-priorisation.jpg", texte: "Choisir le cas d'usage qui apporte le plus avec le moins de risque, plutôt que de tout vouloir faire en même temps." },
      { numero: "4", titre: "Cadrage d'un pilote", image: "assets/bannieres/cadrage-04-pilote.jpg", texte: "Objectif, utilisateurs, critères de validation, règles qui doivent rester explicites et vérifiables, rôle exact de l'IA." },
      { numero: "5", titre: "Validation et adoption", image: "assets/bannieres/cadrage-05-validation.jpg", texte: "Tests avec les utilisateurs, corrections, formation à la prise en main, suivi jusqu'à l'autonomie." }
    ]
  },

  /* ------------------------------------------------------------------
     FORMATION, ADOPTION ET CONDUITE DU CHANGEMENT (parcours chef de projet)
     ------------------------------------------------------------------ */
  adoption: {
    titre: "Formation, adoption et conduite du changement",
    intro: "Un outil livré mais non utilisé est un projet raté. La pédagogie fait partie du pilotage : elle commence dès le cadrage et se poursuit après la mise en service.",
    illustration: { src: "assets/captures/usinage-check-list.jpg", alt: "Check-list terrain de l'application de planification d'usinage", etiquette: "Exemple réel", titre: "Exemple : la planification d'usinage", legende: "Planification d'usinage : un écran terrain pensé pour la prise en main, sans formation longue.", lien: "#projet-usinage" },
    points: [
      { titre: "Impliquer tôt", image: "assets/bannieres/adoption-01-impliquer.jpg", texte: "Les utilisateurs participent aux tests et aux arbitrages. Ils comprennent les choix et les acceptent plus facilement." },
      { titre: "Expliquer les règles", image: "assets/bannieres/adoption-02-regles.jpg", texte: "Ce que l'outil fait, ce qu'il ne décide pas, ce que l'utilisateur garde sous son contrôle. Une doctrine d'usage commune, écrite et partagée." },
      { titre: "Former à la prise en main", image: "assets/bannieres/adoption-03-former.jpg", texte: "Sessions courtes, sur les cas réels, avec des supports consultables ensuite." },
      { titre: "Organiser le relais", image: "assets/bannieres/adoption-04-relais.jpg", texte: "Constituer un réseau d'agents relais ou d'ambassadeurs, capables d'accompagner leurs collègues et de faire remonter les besoins." },
      { titre: "Mesurer l'usage", image: "assets/bannieres/adoption-05-mesurer.jpg", texte: "Mesurer l'acquisition des compétences et l'évolution des pratiques, ajuster, et proposer un accompagnement post-formation là où c'est nécessaire." }
    ]
  },

  /* ------------------------------------------------------------------
     CRÉATION D'E-LEARNINGS (section du parcours formateur)
     L'exemple de parcours réel est masqué tant que les supports ne sont
     pas fournis. La démarche, elle, est visible.
     ------------------------------------------------------------------ */
  elearning: {
    titre: "Création de parcours e-learning",
    intro: "Je conçois des parcours en ligne où l'apprenant progresse et applique ce qu'il apprend. Un e-learning n'est pas une succession de vidéos : c'est une progression construite, avec des activités, des évaluations et un accompagnement.",
    principes: [
      { titre: "Objectif pédagogique", image: "assets/bannieres/elearn-01-objectif.jpg", texte: "Chaque module répond à une question précise : à la fin, l'apprenant sait faire quoi ?" },
      { titre: "Public et prérequis", image: "assets/bannieres/elearn-02-prerequis.jpg", texte: "Le parcours tient compte du niveau de départ et propose des points d'entrée différents si nécessaire." },
      { titre: "Progression", image: "assets/bannieres/elearn-03-progression.jpg", texte: "Des séquences courtes, ordonnées du simple au complexe, avec des rappels des acquis précédents." },
      { titre: "Activités", image: "assets/bannieres/elearn-04-activites.jpg", texte: "Exercices, mises en situation, cas à résoudre : l'apprenant agit à chaque séquence." },
      { titre: "Évaluation", image: "assets/bannieres/elearn-05-evaluation.jpg", texte: "Des contrôles de compréhension et une évaluation finale reliée aux objectifs annoncés." },
      { titre: "Accompagnement", image: "assets/bannieres/elearn-06-accompagnement.jpg", texte: "Temps d'échange, réponses aux questions, suivi de l'application en situation de travail." }
    ],
    exemple: {
      visible: true,
      statut: "Réalisation",
      titre: "Un parcours en ligne réel : « Maîtrise l'IA pour booster ton business »",
      objectif: "Rendre un professionnel capable d'utiliser les outils d'IA dans son activité : gagner du temps, lancer une activité en ligne, créer du contenu.",
      public: "Entrepreneurs, indépendants et salariés sans prérequis technique.",
      progression: ["Introduction : ce qu'est vraiment l'IA, son histoire des années 1950 à aujourd'hui", "Module 1 : les IA pour gagner du temps", "Module 2 : les IA pour lancer une activité en ligne", "Module 3 : les IA pour créer du contenu texte", "Modules suivants : image, vidéo, automatisation"],
      activite: "Chaque module alterne une leçon, une mise en pratique sur les outils et une prise de notes dans la plateforme.",
      evaluation: "Progression suivie module par module (pourcentage complété), avec validation de chaque leçon.",
      accompagnement: "Commentaires et questions directement dans la plateforme, annexes et temps d'échange.",
      captures: [
        { src: "assets/captures/elearning-plateforme-module-ia.jpg", alt: "Plateforme e-learning : sommaire des modules à gauche, leçon « L'histoire de l'IA » à droite", legende: "La plateforme : sommaire des modules, suivi de progression, leçon, prise de notes et commentaires." }
      ],
      video: null
    }
  },

  /* ------------------------------------------------------------------
     DÉMONSTRATION PÉDAGOGIQUE INTERACTIVE
     Exemple pédagogique conçu pour ce portfolio. Les situations sont
     fictives et présentées comme telles.
     ------------------------------------------------------------------ */
  demonstration: {
    titre: "Démonstration pédagogique : vérifier une réponse d'IA",
    statut: "Exemple pédagogique",
    intro: "Un extrait d'exercice tel que je l'anime en formation. Le participant lit une réponse produite par un assistant d'IA, repère ce qui doit être vérifié, puis applique une règle de prudence. Les situations sont fictives.",
    etapes: [
      {
        titre: "Lire la réponse",
        consigne: "Un agent demande à un assistant d'IA : « Quelles pièces sont nécessaires pour une demande d'autorisation de stationnement temporaire ? » Voici la réponse obtenue. Lisez-la avant de passer à l'étape suivante.",
        reponseIA: [
          "Pour une demande d'autorisation de stationnement temporaire, il faut généralement fournir :",
          "1. Un formulaire de demande complété.",
          "2. Un justificatif d'identité du demandeur.",
          "3. Un plan ou une description de l'emplacement concerné.",
          "4. Selon l'arrêté municipal n° 2019-487 du 12 mars 2019, la demande doit être déposée au moins 21 jours avant la date souhaitée.",
          "5. Le dépôt en ligne est obligatoire depuis 2023."
        ]
      },
      {
        titre: "Repérer ce qui doit être vérifié",
        consigne: "Sélectionnez les affirmations qui doivent être vérifiées avant d'être réutilisées. Il peut y en avoir plusieurs.",
        propositions: [
          { texte: "Un formulaire de demande complété.", averifier: false, explication: "Formulation générale et plausible. Elle reste à confirmer avec la procédure locale, mais elle ne présente pas de signal d'alerte particulier." },
          { texte: "Un justificatif d'identité du demandeur.", averifier: false, explication: "Même remarque : plausible, sans détail inventé." },
          { texte: "Selon l'arrêté municipal n° 2019-487 du 12 mars 2019, la demande doit être déposée au moins 21 jours avant.", averifier: true, explication: "Une référence précise (numéro, date, délai) est exactement le type de détail qu'un assistant d'IA peut produire de façon crédible mais inexacte. Elle doit être vérifiée dans la source officielle avant toute réutilisation." },
          { texte: "Le dépôt en ligne est obligatoire depuis 2023.", averifier: true, explication: "Affirmation datée et catégorique, sans source. À vérifier auprès du service concerné." }
        ],
        retour: {
          reussite: "Vous avez repéré les affirmations sensibles : les références précises et les règles datées sont celles qui demandent une vérification systématique.",
          partiel: "Vous avez repéré une partie des points sensibles. Règle à retenir : tout ce qui est précis (numéro, date, délai, obligation) doit être vérifié dans la source officielle."
        }
      },
      {
        titre: "Appliquer une règle de prudence",
        consigne: "L'agent souhaite maintenant demander à l'assistant de rédiger la réponse à l'usager. Quel texte peut-il coller dans l'outil ?",
        choix: [
          { texte: "Le nom, l'adresse et le numéro de téléphone de l'usager, avec sa demande complète.", correct: false, explication: "Des données personnelles ne doivent pas être transmises à un outil dont on ne maîtrise pas la confidentialité. Ce n'est pas nécessaire pour rédiger une réponse type." },
          { texte: "La demande reformulée sans aucun élément identifiant, et la liste des pièces vérifiées.", correct: true, explication: "On transmet uniquement ce qui est utile à la rédaction, sans donnée personnelle, et avec des informations déjà vérifiées." },
          { texte: "Le dossier scanné en pièce jointe, pour que l'IA ait tout le contexte.", correct: false, explication: "Un dossier complet contient des données personnelles et parfois des pièces sensibles. Le contexte utile peut être décrit sans les transmettre." }
        ]
      }
    ],
    conclusion: "Ce que l'exercice démontre : expliquer, faire pratiquer sur un cas proche du métier, apprendre à vérifier et à protéger. Trois des cinq temps de ma méthode, en quelques minutes."
  },

  /* ------------------------------------------------------------------
     RÉALISATIONS
     Statuts possibles : "Réalisation", "Projet en cours", "Exemple pédagogique"
     ------------------------------------------------------------------ */
  realisations: [
    {
      id: "agents-elevn",
      visible: true,
      statut: "Réalisation",
      categorie: "Plateforme d'agents IA",
      titre: "L'équipe d'agents IA d'Elev'n Corporate",
      resume: "Une plateforme interne où quinze agents IA, chacun avec un rôle défini, prennent en charge le marketing, le commercial et l'organisation de l'entreprise, sous la coordination d'un agent chef d'orchestre.",
      besoin: "Une petite structure doit assurer seule la prospection, le contenu, les propositions commerciales, le suivi des rendez-vous, la comptabilité et la gestion des candidatures. Le besoin : une équipe d'assistants spécialisés, disponibles en permanence, dont chaque rôle est clairement délimité et dont les règles de travail sont explicites (données honnêtes, français sans anglicismes, aucune invention de chiffre ni de témoignage).",
      parcoursUtilisateur: [
        "Une demande est adressée à Nico, l'agent chef d'orchestre, ou directement à l'agent concerné dans son espace de travail.",
        "L'agent produit le livrable (brief, post, proposition, rapport, deck) selon son rôle, son format et ses règles.",
        "Les agents s'enchaînent quand c'est utile : un rendez-vous analysé par Jules devient une proposition commerciale rédigée par Victor ; un brief d'Antoine devient un contenu de Léa puis des visuels de Mia.",
        "Les livrables sont rangés par agent, et les outils externes (messagerie, calendrier, comptabilité, production vidéo) sont connectés quand l'entreprise le décide."
      ],
      choix: [
        "Un rôle par agent, avec un périmètre et des règles écrites : un agent qui fait tout fait tout moyennement.",
        "Un chef d'orchestre qui produit directement le livrable au lieu de renvoyer l'utilisateur d'un agent à l'autre.",
        "Des garde-fous communs à toute l'équipe : aucun chiffre ni témoignage inventé, français professionnel, ton sobre.",
        "Des connexions par étapes : chaque agent fonctionne d'abord en mode démonstration, puis se branche à l'outil réel quand l'entreprise est prête."
      ],
      contribution: "Conception de l'organisation de l'équipe (rôles, périmètres, enchaînements), rédaction des règles de chaque agent, identité visuelle et configuration de la plateforme pour Elev'n Corporate, à partir d'un socle logiciel existant que j'ai adapté et personnalisé.",
      solution: "Plateforme web interne, un espace de travail par agent, un chef d'orchestre, et des livrables classés par agent.",
      roleIA: "Ici, l'IA est le cœur de la solution : chaque agent est un modèle de langage encadré par un rôle, des règles et des outils précis. Ce qui fait la valeur n'est pas le modèle, c'est le cadrage de chaque rôle et les garde-fous.",
      pedagogie: "Chaque agent est décrit comme un collègue : ce qu'il sait faire, ce qu'il ne fait pas, ce qu'il faut lui fournir. C'est la même approche que je transmets en formation pour expliquer ce qu'une IA fait et ne fait pas.",
      etat: "En usage interne chez Elev'n Corporate. Mise en ligne et adaptation à d'autres entreprises en préparation.",
      precautions: "Aucune donnée interne (clients, finances, messages) n'est présentée. Les démonstrations se font sur des données fictives.",
      preuves: ["Vidéo de démonstration de la plateforme (interface réelle)"],
      lien: null,
      captures: [],
      video: {
        src: "assets/videos/agents-elevn-demo.mp4",
        poster: "assets/videos/agents-elevn-demo-couverture.jpg",
        duree: "1 min 13",
        legende: "La plateforme en situation : l'accueil avec les agents, puis Léa, créatrice de contenu, qui produit une publication à partir d'un brief."
      },
      sommaire: "Agents IA Elev'n",
      faits: ["15 agents, un rôle chacun", "Un chef d'orchestre : Nico", "Garde-fous écrits : rien d'inventé"],
      agentsListe: [
        { nom: "Nico", role: "Chef d'orchestre", texte: "Reçoit chaque demande, identifie l'agent compétent et produit directement le livrable en appliquant ses règles. Répond lui-même aux questions simples sur l'entreprise." },
        { nom: "Antoine", role: "Stratège", texte: "Analyse une niche, construit le profil de client idéal, formule le positionnement et la proposition de valeur, puis rédige un brief de campagne que les autres agents peuvent exécuter." },
        { nom: "Léa", role: "Créatrice de contenu", texte: "Rédige à partir d'un brief : publications LinkedIn, scripts de Reels et TikTok, scripts YouTube, fils de discussion, e-mails, avec une structure rédactionnelle annoncée." },
        { nom: "Mia", role: "Directrice artistique", texte: "À partir de la charte (couleurs, typographies, logo, ton), conçoit une stratégie créative, produit les visuels en série, les répertorie et prépare leur programmation." },
        { nom: "Léo", role: "Analyste", texte: "Lit les exports de statistiques des réseaux sociaux, en tire des constats et livre un rapport de performance avec un plan d'optimisation sur trente jours. Règle absolue : aucun chiffre inventé." },
        { nom: "Hugo", role: "Présentateur", texte: "Transforme un brief ou un rapport en présentation structurée, diapositive par diapositive, lisible sans orateur." },
        { nom: "Inès", role: "Assistante e-mail", texte: "Trie la boîte de réception par contact, repère les urgences, produit une liste de tâches priorisée et prépare des réponses." },
        { nom: "Jules", role: "Analyste des rendez-vous", texte: "Analyse les transcriptions de rendez-vous clients et prospects : résumé, décisions, plan d'action pour l'équipe, priorités de relance." },
        { nom: "Victor", role: "Proposition commerciale", texte: "Reprend l'analyse du rendez-vous et rédige une proposition commerciale claire et personnalisée, prête à être envoyée." },
        { nom: "Clara", role: "Recruteuse", texte: "Compare chaque candidature à la fiche de poste, attribue un score de correspondance détaillé et prépare les réponses aux candidats." },
        { nom: "Emma", role: "Agente e-commerce", texte: "Conseille sur les formats de vidéos produit et pilote leur production avec des avatars IA, puis gère l'historique et la programmation." },
        { nom: "Sacha", role: "Agent prospection", texte: "Détecte des entreprises correspondant au profil visé, les qualifie, personnalise l'approche et prépare les messages de contact." },
        { nom: "Nina", role: "Veille tendances", texte: "Repère les contenus les plus vus d'une thématique sur Instagram, en relève les indicateurs et en extrait la structure pour nourrir la création de contenu." },
        { nom: "Chloé", role: "Comptable", texte: "Suit factures, dépenses, TVA et trésorerie, produit des rapports financiers lisibles et alimente un tableau de bord." },
        { nom: "Clément", role: "Cerveau de l'entreprise", texte: "Connecté à la base de connaissance interne (offres, prix, réunions, clients, processus), répond aux questions de l'équipe à toute heure." }
      ]
    },
    {
      id: "machine-a-cv",
      visible: true,
      statut: "Réalisation",
      categorie: "Outil grand public",
      titre: "La Machine à CV",
      resume: "Un outil de création de CV qui construit chaque partie du document à partir de l'offre d'emploi ou du métier visé, pour un CV lisible par les systèmes de suivi des candidatures (ATS) et par les recruteurs.",
      besoin: "Beaucoup de candidats produisent des CV visuellement soignés mais mal lus par les logiciels de tri des candidatures, ou bien lisibles mais sans rapport précis avec l'offre visée. Le besoin : un document qui parle le vocabulaire de l'annonce, que la machine lit correctement et que le recruteur a envie de lire, sans compétence technique de la part de l'utilisateur.",
      parcoursUtilisateur: [
        "L'utilisateur renseigne son parcours ou importe ses informations, puis indique l'offre d'emploi ou le métier visé.",
        "Un agent IA analyse l'annonce ou le métier et en extrait les mots-clés attendus (une centaine).",
        "Chaque partie du CV (titre, accroche, expériences, compétences, outils) est rédigée en fonction de ces mots-clés, puis relue et ajustée par l'utilisateur.",
        "Le CV est généré en moins de dix secondes ; l'utilisateur choisit ensuite parmi 25 modèles de mise en page, tous construits sur une structure lisible par les ATS, puis exporte."
      ],
      choix: [
        "Partir de l'annonce ou du métier plutôt que d'une mise en forme : le contenu d'abord.",
        "Une structure de sections standard et un ordre de lecture linéaire, pour faciliter l'extraction automatique.",
        "25 modèles qui séparent le style de la structure : le design se démarque, l'ordre des informations reste lisible, et l'on change de modèle sans rien ressaisir.",
        "L'utilisateur garde la main : chaque proposition de l'IA est modifiable avant l'export."
      ],
      contribution: "Conception du produit et du parcours utilisateur, définition de la structure des documents et des modèles, conception du rôle de l'agent d'analyse des annonces, développement de la plateforme avec des outils de développement assistés par l'IA, tests et corrections.",
      solution: "Plateforme en ligne (interface web, base de données, export de documents). Mon propre CV a été réalisé avec cet outil.",
      roleIA: "Un agent IA extrait les mots-clés de l'offre ou du métier et rédige les parties du CV en conséquence. La structure du document, les modèles et l'export ne dépendent pas de l'IA : ils sont déterministes.",
      pedagogie: "L'outil montre à l'utilisateur ce qu'un recruteur et un logiciel de tri attendent, pas seulement une mise en forme. Il sert aussi de support en atelier d'insertion professionnelle.",
      etat: "En service. Le site est public.",
      avantApres: {
        titre: "Résultat observé",
        avant: "Un CV rédigé sans l'annonce en tête, sans mots-clés métier et souvent mal interprété par les logiciels de tri (exemple réel dans la galerie).",
        apres: "Le même parcours, reconstruit en moins de dix secondes sur le vocabulaire du métier visé, avec 25 modèles au choix. Sur les tests réalisés, les documents produits obtiennent des scores de compatibilité ATS compris entre 92 et 99 %.",
        source: "Scores mesurés lors de tests internes avec un outil d'analyse de compatibilité ATS ; les systèmes de tri diffèrent d'un recruteur à l'autre et aucun résultat de recrutement n'est garanti."
      },
      precautions: "Aucune compatibilité universelle avec tous les ATS n'est promise : les systèmes diffèrent. Les scores affichés proviennent de tests et ne garantissent pas un recrutement.",
      preuves: ["Site public", "Exemple réel avant / après", "Captures du parcours de création et de l'analyse ATS finale", "Mon propre CV réalisé avec l'outil (à fournir)"],
      lien: { url: "https://lamachineacv.fr", libelle: "Voir le site" },
      boutonCv: true,
      captures: [
        { src: "assets/captures/machine-a-cv-exemple-avant.jpg", alt: "CV d'origine d'une candidate avant utilisation de l'outil", legende: "Avant : le CV d'origine, tel qu'il a été transmis.", fichier: "assets/documents/exemples-cv/cv-exemple-avant.pdf" },
        { src: "assets/captures/machine-a-cv-exemple-apres-modele-noir.jpg", alt: "Le même parcours reconstruit par La Machine à CV, modèle noir", legende: "Après : le même parcours reconstruit par l'outil, modèle « Noir ».", fichier: "assets/documents/exemples-cv/cv-exemple-apres-modele-noir.pdf" },
        { src: "assets/captures/machine-a-cv-exemple-apres-modele-or.jpg", alt: "Le même CV avec un autre modèle de mise en page, modèle or", legende: "Même contenu, autre modèle (« Or ») : on change de design sans rien ressaisir.", fichier: "assets/documents/exemples-cv/cv-exemple-apres-modele-or.pdf" }
      ],
      etapes: {
        titre: "Le parcours de création, étape par étape",
        intro: "Captures réelles de l'assistant de création (16 étapes), sur mon propre profil.",
    liste: [
          { src: "assets/captures/machine-a-cv-etape-01.jpg", legende: "Étape 3 : le métier visé pilote toutes les suggestions (accroche, compétences, score ATS)." },
          { src: "assets/captures/machine-a-cv-etape-02.jpg", legende: "Étape 5 : l'offre d'emploi est analysée et un référentiel ATS de mots-clés est construit (ici 60)." },
          { src: "assets/captures/machine-a-cv-etape-03.jpg", legende: "Étape 6 : la phrase d'accroche, améliorable par l'IA." },
          { src: "assets/captures/machine-a-cv-etape-05.jpg", legende: "Étape 7 : les expériences, avec une optimisation globale ou par expérience." },
          { src: "assets/captures/machine-a-cv-etape-04.jpg", legende: "Étape 8 : les compétences, suggérées selon le métier." },
          { src: "assets/captures/machine-a-cv-etape-06.jpg", legende: "Étape 9 : logiciels et outils." },
          { src: "assets/captures/machine-a-cv-etape-07.jpg", legende: "Étape 10 : les qualités humaines, avec une ligne d'explication chacune." },
          { src: "assets/captures/machine-a-cv-etape-08.jpg", legende: "Étape 11 : les formations." },
          { src: "assets/captures/machine-a-cv-etape-09.jpg", legende: "Étape 12 : les langues." },
          { src: "assets/captures/machine-a-cv-etape-10.jpg", legende: "Étape 13 : centres d'intérêt." },
          { src: "assets/captures/machine-a-cv-etape-11.jpg", legende: "Étape 14 : l'analyse ATS finale, avec les mots-clés manquants et une optimisation automatique (ici 89/100 avant optimisation)." }
        ]
      },
      video: null,
      vignetteImage: "assets/captures/site-lamachineacv-hero.jpg",
      sommaire: "La Machine à CV",
      faits: ["CV généré en moins de 10 s", "25 modèles", "Score ATS mesuré dans l'outil"]
    },
    {
      id: "hintoofoot",
      visible: true,
      statut: "Réalisation",
      categorie: "Application mobile",
      titre: "HINTOOFOOT",
      resume: "Application mobile de quiz football éditée par Novoia, dont je suis cofondateur. « Un indice, un joueur, à toi de trouver. » Disponible sur l'App Store et Google Play.",
      besoin: "Proposer aux passionnés de football un jeu de culture football rapide, accessible et rejouable, pensé pour être joué entre amis.",
      parcoursUtilisateur: [
        "Lancement d'une partie en quelques secondes.",
        "Un joueur à deviner à partir d'indices qui se dévoilent progressivement.",
        "Mode principal « Partie entre potes » de 3 à 8 joueurs, avec un animateur qui tourne à chaque manche.",
        "Score, classement de la soirée et envie de rejouer."
      ],
      choix: [
        "Des parties courtes, adaptées à un usage mobile et à une soirée entre amis.",
        "Une difficulté progressive grâce aux indices : débutants et connaisseurs y trouvent leur place.",
        "Une interface simple, sans surcharge, où l'on comprend quoi faire sans explication."
      ],
      contribution: "Cofondateur. Conception du concept, de l'expérience de jeu et du moteur des indices avec l'équipe, pilotage du lancement et de la communication (contenus et campagnes sur les réseaux sociaux). Le développement a été réalisé par l'équipe HINTOOFOOT sur plusieurs mois.",
      solution: "Application mobile publiée sur l'App Store et Google Play (septembre 2026), éditée par Novoia.",
      roleIA: "L'IA a servi d'outil de conception tout au long du projet : conception de l'application, construction du moteur des indices (sélection et gradation des indices qui se dévoilent progressivement), puis production des contenus de communication. Dans le jeu lui-même, le joueur n'interagit pas avec une IA : les parties reposent sur une base d'indices préparée en amont.",
      pedagogie: null,
      etat: "Publiée, en phase de lancement.",
      avantApres: {
        titre: "Premier résultat",
        avant: "Lancement fin septembre 2026, avec un budget de communication limité et des contenus produits en interne.",
        apres: "Classée n°20 de la catégorie Quiz sur l'App Store France une semaine après sa sortie.",
        source: "Capture de la fiche App Store France, octobre 2026 (visible dans la galerie)."
      },
      precautions: "Le classement indiqué est celui de la catégorie Quiz de l'App Store France à la date de la capture ; il ne s'agit pas d'un classement toutes catégories.",
      preuves: ["Capture de la fiche App Store France (classement n°20, catégorie Quiz)", "Vidéos de lancement", "Liens des fiches App Store et Google Play (à fournir)"],
      lien: null,
      captures: [
        { src: "assets/captures/hintoofoot-app-store-n20-quiz.png", alt: "Fiche App Store de Hintoo Foot indiquant le classement n°20 de la catégorie Quiz", legende: "Fiche App Store France : classement n°20, catégorie Quiz, une semaine après la sortie." }
      ],
      video: null,
      videos: [
        { src: "assets/videos/hintoofoot-ep1-le-joueur-mystere.mp4", poster: "assets/videos/hintoofoot-ep1-couverture.jpg", duree: "17 s", titre: "Épisode 1 · Le joueur mystère" },
        { src: "assets/videos/hintoofoot-ep2-ramene-tes-potes.mp4", poster: "assets/videos/hintoofoot-ep2-couverture.jpg", duree: "19 s", titre: "Épisode 2 · Ramène tes potes" }
        // Épisode 3 disponible : { src: "assets/videos/hintoofoot-ep3-le-duel-arrive.mp4", poster: "assets/videos/hintoofoot-ep3-couverture.jpg", duree: "18 s", titre: "Épisode 3 · Le duel arrive" }
      ],
      vignetteImage: "assets/captures/hintoofoot-vignette.jpg",   // image utilisée dans les grilles de vignettes (onglets Formateur / Chef de projet)
      sommaire: "HINTOOFOOT",
      faits: ["N°20 Quiz App Store France", "Moteur des indices conçu avec l'IA", "Parties de 3 à 8 joueurs"]
    },
    {
      id: "usinage",
      visible: true,
      statut: "Réalisation",
      categorie: "Projet industriel",
      titre: "Application SaaS de planification des opérations d'usinage",
      resume: "Un logiciel en ligne qui remplace un planning d'atelier tenu à la main dans Excel : affectation des opérations aux machines, priorités, et conservation des décisions à chaque actualisation.",
      besoin: "Dans cet atelier, le planning vivait dans un fichier Excel rempli à la main, plusieurs heures chaque semaine. Chaque mise à jour effaçait les décisions prises par le responsable (réaffectations, priorités). Le besoin : un outil qui actualise les données automatiquement sans perdre les décisions humaines, et qui se lit d'un coup d'œil sur le terrain.",
      parcoursUtilisateur: [
        "Import automatique des opérations depuis la source de l'atelier.",
        "Visualisation par machine : ce qui est planifié, ce qui attend.",
        "Affectation et réordonnancement par le responsable, en quelques clics.",
        "Actualisation des données : les décisions prises sont conservées."
      ],
      choix: [
        "Partir de la source réelle de l'atelier (Excel) plutôt que d'imposer une nouvelle saisie, avec une évolution possible vers une API.",
        "Distinguer clairement les données importées et les décisions prises par le responsable.",
        "Des interfaces adaptées au terrain : lisibles rapidement, peu de clics."
      ],
      contribution: "Analyse des besoins avec les utilisateurs, conception fonctionnelle (règles d'affectation, priorités, logique de conservation des décisions), conception des interfaces et développement avec des outils de développement assistés par l'IA.",
      solution: "Logiciel en ligne de planification par machine, alimenté automatiquement par la source de l'atelier.",
      roleIA: "Aucune décision de planification n'est confiée à l'IA. Les outils d'IA ont servi à concevoir et à développer la solution, pas à son fonctionnement.",
      pedagogie: "Un outil de planification n'est adopté que si les responsables comprennent ce qu'il conserve et ce qu'il recalcule. L'accompagnement à la prise en main fait partie du projet.",
      etat: "En service dans l'atelier.",
      avantApres: {
        titre: "Avant / après",
        avant: "Un fichier Excel rempli à la main, plus de 7 heures par semaine, et des décisions perdues à chaque mise à jour.",
        apres: "Un planning alimenté automatiquement, sans saisie, qui conserve les décisions du responsable.",
        source: "Temps estimé par l'utilisateur avant la mise en place de l'outil."
      },
      precautions: "Aucune donnée interne de l'atelier n'est présentée. Les captures sont anonymisées.",
      preuves: ["Capture de l'application (check-list d'un ordre de fabrication)", "Lien vers le logiciel (à fournir)"],
      lien: null,
      captures: [
        { src: "assets/captures/usinage-check-list.jpg", alt: "Écran check-list de l'application de planification d'atelier : validation par service d'un ordre de fabrication", legende: "Check-list d'un ordre de fabrication : Méthodes, Programmation et Contrôle valident chacun leurs tâches ; une anomalie bloquante s'affiche sur toutes les opérations." }
      ],
      video: null,
      sommaire: "SaaS usinage",
      faits: ["Avant : Excel à la main, 7 h / semaine", "Après : planning automatique", "Les décisions sont conservées"]
    },
    {
      id: "devis-baumier",
      visible: true,
      statut: "Réalisation",
      categorie: "Projet industriel",
      titre: "Devis automatisé",
      resume: "Solution de devis industriel pour un sous-traitant de Naval Group : des règles métier formalisées, un moteur de calcul déterministe et une génération de documents Excel. Un devis se prépare désormais en quelques minutes.",
      besoin: "L'établissement des devis reposait sur des règles connues de quelques personnes et appliquées à la main : chaque devis demandait de tout ressaisir, pour plusieurs heures de travail, avec un risque d'erreur et une dépendance aux personnes. Le besoin : rendre les règles explicites, fiabiliser les calculs et produire un document propre sans ressaisie.",
      parcoursUtilisateur: [
        "Saisie du client et des paramètres du devis dans une interface guidée.",
        "Calcul automatique selon les règles formalisées, avec les contrôles associés.",
        "Génération du document Excel prêt à être transmis.",
        "Vérification et correction si nécessaire."
      ],
      choix: [
        "Formaliser les règles métier par écrit avec les utilisateurs avant toute ligne de code.",
        "Un moteur de calcul déterministe : les mêmes entrées donnent toujours le même résultat, vérifiable à la main.",
        "Des contrôles de cohérence à la saisie pour éviter les devis incomplets."
      ],
      contribution: "Recueil et formalisation des règles métier, conception de l'interface et des contrôles, conception de la génération documentaire, développement avec des outils assistés par l'IA, tests et corrections, accompagnement des utilisateurs à la prise en main.",
      solution: "Interface de saisie, moteur de calcul et génération de documents Excel.",
      roleIA: "L'IA a assisté la conception et le développement. Les calculs, eux, ne dépendent d'aucun modèle d'IA : ils doivent rester fiables, explicites et vérifiables. C'est une distinction que j'explique systématiquement aux utilisateurs.",
      pedagogie: "Les règles formalisées servent de support de formation : chacun peut comprendre comment un devis est calculé et vérifier un résultat.",
      etat: "Livré et utilisé.",
      avantApres: {
        titre: "Avant / après",
        avant: "Tout ressaisir à la main pour chaque devis : plusieurs heures de travail.",
        apres: "Renseigner le client, le reste est automatique : un devis en environ 5 minutes.",
        source: "Temps estimés par le client avant et après la mise en place de la solution."
      },
      precautions: "Aucun montant ni document interne n'est présenté. Les démonstrations utilisent des données fictives.",
      preuves: ["Captures de l'application sur données fictives", "Exemple de document généré avec données fictives (à fournir)"],
      lien: null,
      captures: [
        { src: "assets/captures/baumier-02-tableau-de-bord.jpg", alt: "Tableau de bord de l'application de devis", legende: "Tableau de bord : ce qu'il reste à faire, avec la raison de chaque blocage." },
        { src: "assets/captures/baumier-04-nouveau-devis.jpg", alt: "Création d'un devis en quatre étapes", legende: "Nouveau devis : client, contact, besoin, chiffrage." },
        { src: "assets/captures/baumier-07-chiffrage-synthese.jpg", alt: "Synthèse financière d'un chiffrage fictif", legende: "Synthèse financière d'une affaire fictive : le prix de vente et ce qui l'explique." },
        { src: "assets/captures/baumier-09-devis-detail.jpg", alt: "Détail d'un devis avec écart acquitté", legende: "Devis et écart : le commercial garde la main, l'écart doit être justifié." },
        { src: "assets/captures/baumier-11-referentiels-taux.jpg", alt: "Référentiel des taux horaires", legende: "Taux horaires historisés : changer un tarif ne réécrit jamais un devis établi." },
        { src: "assets/captures/baumier-01-connexion.jpg", alt: "Écran de connexion", legende: "Connexion : le logo, deux champs, un bouton." }
      ],
      video: null,
      sommaire: "Devis automatisé",
      faits: ["Avant : plusieurs heures par devis", "Après : environ 5 minutes", "Calculs déterministes, pas d'IA"]
    },
    {
      id: "sites",
      visible: true,
      statut: "Réalisation",
      categorie: "Sites internet",
      titre: "Plus de 300 sites internet créés · quelques exemples",
      resume: "Plus de 300 sites conçus et réalisés, pour mes activités et pour des clients. Quelques exemples ci-dessous, et Movento : une galerie de 189 sites où chaque site peut être créé avec un seul prompt.",
      besoin: "",
      parcoursUtilisateur: [],
      choix: [],
      contribution: "Conception, structure, rédaction et intégration, avec des outils de développement assistés par l'IA.",
      solution: "",
      roleIA: null,
      pedagogie: null,
      etat: "En ligne.",
      precautions: "",
      preuves: ["Sites publics"],
      lien: null,
      captures: [],
      video: { src: "assets/videos/movento-galerie.mp4", poster: "assets/videos/movento-couverture.jpg", duree: "28 s", format: "portrait", legende: "Movento, ma galerie de 189 sites : chaque site peut être créé avec un seul prompt.", type: "video/mp4" },
      sommaire: "Sites internet",
      faits: ["Plus de 300 sites créés", "Movento : 189 sites, un prompt chacun", "Conception et intégration"],
      sitesListe: [
        { titre: "Movento", url: "https://movento.dev", capture: "assets/captures/site-movento.jpg", public: "Créateurs de sites, indépendants, agences", besoin: "Galerie de 189 sites premium : chaque site se génère à partir d'un seul prompt, prêt à copier.", contribution: "Conception du site, de la galerie et de l'offre, rédaction, intégration." },
        { titre: "Novoia", url: "https://novoia.fr", capture: "assets/captures/site-novoia.jpg", public: "Dirigeants de PME et de TPE", besoin: "Expliquer l'offre d'agents IA, d'automatisation et de développement sur mesure, et obtenir un premier échange.", contribution: "Structure, rédaction, intégration." },
        { titre: "La Machine à CV", url: "https://lamachineacv.fr", capture: "assets/captures/site-lamachineacv.jpg", public: "Candidats et accompagnants à l'emploi", besoin: "Présenter l'outil, ses modèles et sa méthode, et convertir en création de compte.", contribution: "Conception du site et de l'outil, rédaction, intégration." },
        { titre: "Elev'n Corporate", url: "https://elevencorporate.com", capture: "assets/captures/site-elevencorporate.jpg", public: "Entreprises et professionnels en recherche de formation", besoin: "Présenter l'organisme, ses formations et ses services, et faciliter la prise de contact.", contribution: "Structure, contenus, intégration." },
        { titre: "Easy Auto Trade", url: "https://easyautotrade.audemarmedia.com", capture: "assets/captures/site-easyautotrade.jpg", public: "Personnes souhaitant lancer une activité d'import-export automobile", besoin: "Page de vente d'une formation en ligne : méthode, programme, formateur, tarif.", contribution: "Conception de la page, rédaction, programme de formation." }
      ]
    },
    {
      id: "elearnings",
      visible: true,
      statut: "Réalisation",
      categorie: "E-learning",
      titre: "Parcours e-learning « Maîtrise l'IA pour booster ton business »",
      resume: "Un parcours en ligne conçu et produit pour des professionnels sans prérequis technique : modules progressifs, mise en pratique sur les outils, suivi de la progression.",
      besoin: "Permettre à des entrepreneurs et des salariés d'apprendre à utiliser l'IA à leur rythme, avec une progression construite et pas une simple suite de vidéos.",
      parcoursUtilisateur: ["Introduction : ce qu'est vraiment l'IA et son histoire.", "Module 1 : les IA pour gagner du temps.", "Module 2 : les IA pour lancer une activité en ligne.", "Module 3 : les IA pour créer du contenu texte.", "Modules suivants : image, vidéo, automatisation."],
      choix: ["Des leçons courtes et une mise en pratique à chaque module.", "Une progression visible (pourcentage complété) pour entretenir la motivation.", "Prise de notes, annexes et commentaires intégrés à la plateforme."],
      contribution: "Conception pédagogique, rédaction des leçons, production des supports, mise en ligne sur la plateforme.",
      solution: "Parcours en ligne sur une plateforme LMS, accessible à distance.",
      roleIA: null,
      pedagogie: "Objectif par module, progression du simple au complexe, pratique sur les outils, suivi de l'avancement.",
      etat: "En ligne.",
      precautions: "Aucun taux de réussite ni volume d'apprenants n'est avancé.",
      preuves: ["Capture de la plateforme"],
      lien: null,
      captures: [
        { src: "assets/captures/elearning-plateforme-module-ia.jpg", alt: "Plateforme e-learning : sommaire des modules à gauche, leçon « L'histoire de l'IA » à droite", legende: "La plateforme : sommaire des modules, suivi de progression, leçon, prise de notes et commentaires." }
      ],
      video: null,
      sommaire: "E-learning",
      faits: ["Modules progressifs", "Pratique sur les outils", "Progression suivie"]
    }
  ],

  /* ------------------------------------------------------------------
     AVIS (recommandations LinkedIn, récupérées le 7 octobre 2026)
     Chaque avis : nom, poste, date, relation, texte, lien du profil,
     photo (null = initiales). Ordre : le plus récent en premier.
     ------------------------------------------------------------------ */
  avis: {
    titre: "Plus de 5 000 personnes formées.",
    sous: "Ce que disent les apprenants, les stagiaires et les équipes, en école comme en entreprise. Recommandations publiées sur LinkedIn.",
    lienTous: "https://www.linkedin.com/in/nicolas-francou-39373778/details/recommendations/",
    afficherDates: false,   // true pour afficher la date de chaque recommandation
    // "photoIllustration": true = photo d'illustration (reprise du site Easy Auto Trade), pas la personne elle-même.
    liste: [
      {
            "nom": "Stephanie Tourillon",
            "poste": "",
            "date": "21 mai 2026",
            "relation": "Nicolas a été le client de Stephanie",
            "texte": "Dans ma fonction de manager, j’ai bénéficié d’une formation individualisée avec Nicolas. Grâce à ses expériences, son écoute et son dynamisme, Nicolas met en place des sessions riches dont il s’assure de leur utilité et de leur appropriation. Le temps passe vite avec Nicolas et la boîte à outils est bien remplie au sortir de la formation, merci beaucoup Nicolas !",
            "lien": "https://www.linkedin.com/in/stephanie-tourillon-536082a/",
            "photo": "assets/avis/stephanie-tourillon-536082a.jpg"
      },
      {
            "nom": "Baya Dali Youcef",
            "poste": "Conseiller en mutuelle chez Solimut Mutuelle de France | Conseils en assurance santé",
            "date": "27 mars 2026",
            "relation": "Baya a été le client de Nicolas",
            "texte": "Nicolas est un professionnel très impliqué, doté d’une solide expérience en management et en formation. Il sait transmettre ses connaissances avec clarté et s’adapte facilement à ses interlocuteurs.\nSon sens de l’organisation, son écoute et son professionnalisme font de lui un atout précieux pour toute structure.\nJe recommande vivement Nicolas pour ses compétences et son sérieux.",
            "lien": "https://www.linkedin.com/in/baya-dali-youcef-b090a4357/",
            "photo": "assets/avis/baya-dali-youcef-b090a4357.jpg"
      },
      {
            "nom": "Julie P.",
            "poste": "Agent d’administration Direction des affaires financières.",
            "date": "24 mars 2026",
            "relation": "Julie a été le client de Nicolas",
            "texte": "Merci Nicolas pour ta formation sur la gestion du stress. J’ai appris plein de nouvelle chose dans la bienveillance et la bonne humeur.\nJe vais pouvoir appliquer tout ce que tu nous a appris tant au niveau pro et perso.\nBonne continuation",
            "lien": "https://www.linkedin.com/in/julie-p-7849a916a/",
            "photo": "assets/avis/apprenant-4.jpg", "photoIllustration": true
      },
      {
            "nom": "Christophe Condamin",
            "poste": "",
            "date": "24 mars 2026",
            "relation": "christophe a été le client de Nicolas",
            "texte": "Très bon formateur, gestion du stress assimilée, mise en confiance au top. Très bel échange entre tous les intervenants.",
            "lien": "https://www.linkedin.com/in/christophe-condamin-803b9b372/",
            "photo": "assets/avis/christophe-condamin-803b9b372.jpg"
      },
      {
            "nom": "Romane Carrara",
            "poste": "Juriste en droit social&RH",
            "date": "24 mars 2026",
            "relation": "Romane a été le client de Nicolas",
            "texte": "Merci pour cette formation « gestion du stress » très complète, qualitative et utile dans toutes les dimensions, professionnelles et personnelles.\nNicolas est très pédagogue, sympathique et a l’écoute!\nMerci beaucoup! Formateur et formation de qualité.",
            "lien": "https://www.linkedin.com/in/romane-carrara-058a58206/",
            "photo": "assets/avis/romane-carrara-058a58206.jpg"
      },
      {
            "nom": "Olivia Michal",
            "poste": "Adjoint administratif chez Ambassade de France au Qatar",
            "date": "26 février 2026",
            "relation": "Olivia a été le client de Nicolas",
            "texte": "Je remercie infiniment Nicolas Francou pour son atelier \"CV percutant\". Il m'a aidé dans la création d'un CV plus adapté au marché de l'emploi et les agences d'intérim, ma conseillère et employeurs l'apprécient particulièrement. Nicolas est une personne simple, dynamique et pleine d'humour qui vous apporte des conseils très justes.",
            "lien": "https://www.linkedin.com/in/olivia-michal-0278a423b/",
            "photo": "assets/avis/apprenant-2.jpg", "photoIllustration": true
      },
      {
            "nom": "Esteban Cela",
            "poste": "Social Entrepreneur | Président Association Universal Esport | Esport Content Creator",
            "date": "20 janvier 2026",
            "relation": "Esteban avait Nicolas comme responsable direct",
            "texte": "J’ai eu la chance de suivre les cours de Monsieur Francou, et j’ai énormément apprécié sa méthodologie de travail. Sa manière d’amener le module de cours et les exercices rendait chaque leçon vivante et concrète, en s’appuyant sur son expérience personnelle. Cela m’a permis de me projeter plus facilement dans des situations réelles et de développer des compétences concrètes que je peux appliquer dans mon quotidien professionnel.\nJe recommande vivement Monsieur Francou pour son approche pédagogique engageante et son savoir-faire, qui permettent à ses étudiants de progresser efficacement tout en restant motivés.",
            "lien": "https://www.linkedin.com/in/esteban-cela-1b2631255/",
            "photo": "assets/avis/esteban-cela-1b2631255.jpg"
      },
      {
            "nom": "Morgane Ehrhardt",
            "poste": "📈Accompagnement 🦵Douleurs chroniques & 🧠 gestion des émotions 🌿Thérapies non médicamenteuses  - Profond, personnalisé et sécurisant - Séance individuelle et Atelier collectif",
            "date": "23 décembre 2025",
            "relation": "MORGANE a été le client de Nicolas",
            "texte": "Nicolas a un sens de l’équipe performant et subtil ;\nIl permet à chacun de trouver sa placer, de percevoir ses potentiels et axes d’améliorations sans confrontations en gardant toujours l’objectif en tête.\nNicolas m’a permise de percevoir et d’apprendre une gestion d’équipe efficace subtil sans confrontation directe et qui reste tout de même authentique.\nJ’ai developper la conscience de mes compétences grace au mise en situation et jeu de rôle.\nJ’ai pu effectuer des taches que je n’aime pas du tout  faire avec efficacité et plus de joie.\nMerci Nicolas",
            "lien": "https://www.linkedin.com/in/morgane-ehrhardt/",
            "photo": "assets/avis/morgane-ehrhardt.jpg"
      },
      {
            "nom": "Khalid Kalloubi",
            "poste": "Commercial chez celio",
            "date": "20 septembre 2024",
            "relation": "Khalid avait Nicolas comme responsable direct",
            "texte": "Formateur très agréable, un grand plaisir d'apprendre avec lui",
            "lien": "https://www.linkedin.com/in/khalid-kalloubi-7535ba32a/",
            "photo": "assets/avis/apprenant-3.jpg", "photoIllustration": true
      },
      {
            "nom": "Laurent Blayac",
            "poste": "Technicien cnd chez INTERCONTROLE",
            "date": "28 mai 2024",
            "relation": "laurent avait Nicolas comme responsable direct",
            "texte": "Suite à une formation pour \"remettre le pied à l'étrier \" dans le mode du travail, nous avons eu comme coach, Nicolas, une personne toujours très dynamique et pleine d'humour , qui à permit, à tout le groupe, de nous faire évoluer,grâce à sa capacité à nous faire tous participer pour créer de l'émulation.\nDonc je vous recommande Nicolas FRANCOU.",
            "lien": "https://www.linkedin.com/in/laurent-blayac-689741243/",
            "photo": "assets/avis/apprenant-3.jpg", "photoIllustration": true
      },
      {
            "nom": "Marie-chantal Belkheir",
            "poste": "Agent polyvalente restauration chez La Poste Colbert",
            "date": "28 mai 2024",
            "relation": "Marie-chantal avait Nicolas comme responsable direct",
            "texte": "Suite à des recommandations de formation j'ai eu le privilège d'être formé par Nicolas grâce à son accompagnement et son programme de formation j'ai pu en ressortir meilleure et plus confiante de mes capacités et compétences je suis plus motivépour rechercher du travail, je remercie fortement Nicolas pour sa et l'équipe dans la quelle j'étais c'était chouette\nje vous recommande Nicolas comme formateur il est génial, très compréhensif et très pro( aller l'OM)😁💙🤍",
            "lien": "https://www.linkedin.com/in/marie-chantal-belkheir-97a379309/",
            "photo": "assets/avis/apprenant-4.jpg", "photoIllustration": true
      },
      {
            "nom": "Aliou Sy",
            "poste": "Employé libre service  chez Carrefour",
            "date": "28 mai 2024",
            "relation": "Aliou avait Nicolas comme responsable direct",
            "texte": "c'est coach qui nous à aidé à évoluers c'est un homme dynamique toujours de bonne humeur et surtout à l'écoute je vous recommande à tout prix Nicolas francou\nmerci l'artiste !!",
            "lien": "https://www.linkedin.com/in/aliou-sy-44637a309/",
            "photo": "assets/avis/apprenant-3.jpg", "photoIllustration": true
      },
      {
            "nom": "Maïssa Ounas",
            "poste": "Alternante en master stratégie d’entreprise / développement commercial",
            "date": "25 avril 2024",
            "relation": "Maïssa était le responsable direct de Nicolas",
            "texte": "Je suis ravi de recommandé Mr Nicolas Francou en tant qu'intervenant pour digital college.il a fait preuve d'un engagement exceptionnel envers l'excellence pédagogique.Son aptitude à exprimer de manière concise des concepts complexes et à les lier à des exemples concrets a considérablement amélioré l'expérience d'apprentissage de nos étudiants. Sa passion pour l'enseignement et son engagement envers leur réussite en font un atout précieux pour toute école.",
            "lien": "https://www.linkedin.com/in/ma%C3%AFssa-ounas-355b65278/",
            "photo": "assets/avis/apprenant-1.jpg", "photoIllustration": true
      },
      {
            "nom": "Ema Donikian",
            "poste": "Étudiante en Master PGE International Business Development à KEDGE Business School",
            "date": "17 avril 2024",
            "relation": "Ema était le responsable direct de Nicolas",
            "texte": "Je suis honorée de rédiger cette recommandation pour Monsieur Francou, qui a été mon professeur de management durant ma troisième année à Digital College. Exceptionnellement doué dans l'art de la pédagogie et de la gestion de classe, il possède une maîtrise remarquable des compétences en leadership et en management, faisant de lui un modèle inspirant pour ses étudiants.\nMonsieur Francou a non seulement enrichi notre compréhension théorique du management, mais il a également su éveiller en nous un intérêt sincère pour le domaine grâce à son approche pratique et engageante. Son talent pour intégrer des études de cas réels et des simulations interactives en classe nous a permis de développer des compétences pratiques qui sont directement applicables dans le milieu professionnel.\nAu-delà de ses compétences académiques et professionnelles, c’est son humanité qui marque le plus. Monsieur Francou prend le temps de connaître chacun de ses élèves, leur offrant un soutien personnalisé et des conseils pertinents qui dépassent souvent le cadre académique. Les leçons de vie qu’il partage, empreintes de sagesse et de compassion, nous ont appris l’importance de la persévérance, de l'éthique et de l’empathie dans nos carrières futures.\nUn recruteur à la recherche d'un leader capable de former, d'inspirer et de conduire des équipes vers l'excellence trouverait en Monsieur Francou une ressource inestimable. Je suis convaincue qu'il continuera à apporter une contribution significative là où son parcours professionnel le mènera.\nJe lui suis profondément reconnaissante et je sais que les leçons apprises sous sa tutelle résonneront longtemps dans ma carrière et ma vie personnelle.\nMerci Monsieur Francou !",
            "lien": "https://www.linkedin.com/in/ema-donikian-949206214/",
            "photo": "assets/avis/ema-donikian-949206214.jpg"
      },
      {
            "nom": "Nasr-eddine Sedjai",
            "poste": "Head coach chez Nike factory store, Honfleur",
            "date": "12 avril 2024",
            "relation": "Nasr-eddine a travaillé avec Nicolas, mais dans des équipes différentes",
            "texte": "Madame, Monsieur,\nC’est un réel plaisir de recommander le profil de Nicolas Francou.\nEffectivement nous nous sommes connu en 2019 à mon arrivé chez Nike lors d’un meeting dans l’Oregon au siège à Portland. Nous avons naturellement tissé des liens professionnels et amicaux de par notre relationnel et esprit d’ouverture.\nBiensur nous avions d’autres centres d’intérêts en commun notamment la passion du sport ainsi qu’une certaine addiction pour les sneakers.\nCe que je peux mettre en avant chez Nicolas, c’est son leadership naturel à travers le développement des équipes, son goût pour les challenges, toujours prêt à relever de nouveaux défis et de surcroît son réel sens des résultats.\nSa disponibilité et sa gentillesse en font une personne remarquable qui n’hésite pas à faire passer les autres avant ses intérêts personnels.\nJe recommande donc vivement le profil de Nicolas pour la suite de sa carrière qui sera sans nulle doute dans la continuité de ce qu’il a déjà accompli.\nJe reste disponible et me ferai un plaisir de recommander Nicolas Francou de vive voix.\nVous remerciant d’avoir pris le temps de me lire, je vous adresse, Madame,Monsieur mes sincères salutations.\nNasr Eddine SEDJAÏ",
            "lien": "https://www.linkedin.com/in/nasr-eddine-sedjai-72a082162/",
            "photo": "assets/avis/nasr-eddine-sedjai-72a082162.jpg"
      },
      {
            "nom": "Alicia Putorti",
            "poste": "Chargée de Mission Animations et Loisirs",
            "date": "12 avril 2024",
            "relation": "Alicia était le responsable direct de Nicolas",
            "texte": "Nicolas a été incroyable lors de notre session de Workshop. Son discours était non seulement captivant, mais aussi inspirant. Sa manière de communiquer avec les élèves était exceptionnelle, créant une atmosphère d’engagement et d’apprentissage dynamique. Je le recommande vivement !",
            "lien": "https://www.linkedin.com/in/alicia-putorti-4857a6197/",
            "photo": "assets/avis/alicia-putorti-4857a6197.jpg"
      },
      {
            "nom": "Chloé Sangiovanni",
            "poste": "Employée chez bluelobster",
            "date": "9 avril 2024",
            "relation": "Chloé avait Nicolas comme responsable direct",
            "texte": "En tant qu’étudiante à Digital collège, on a eu le privilège d’être enseigné par Nicolas. Son approche captivante et instructive a enrichi mon expérience académique. Je recommande Nicolas pour sa contribution précieuse et sa capacité à inspirer les étudiants. Une véritable valeur ajoutée pour toute institution éducative",
            "lien": "https://www.linkedin.com/in/chlo%C3%A9-sangiovanni-8027a6197/",
            "photo": "assets/avis/apprenant-2.jpg", "photoIllustration": true
      },
      {
            "nom": "Noémie Astic",
            "poste": "",
            "date": "9 avril 2024",
            "relation": "Noémie était le responsable direct de Nicolas",
            "texte": "Nicolas m’a accompagné ainsi que ma classe sur différents modules de cours, grâce à lui j’ai pu développer mes compétences, je recommande Nicolas, ce fut un très bon intervenant. Il est extrêmement professionnel ! Merci !",
            "lien": "https://www.linkedin.com/in/no%C3%A9mie-astic/",
            "photo": "assets/avis/no-c3-a9mie-astic.jpg"
      },
      {
            "nom": "Mylane Berkouk",
            "poste": "Manager de projet",
            "date": "8 avril 2024",
            "relation": "Mylane avait Nicolas comme responsable direct",
            "texte": "Intervenant dynamique et plein de ressources, Nicolas est très pédagogue. Ses cours sont très intéressants et j'ai beaucoup appris grâce de lui et son parcours extraordinaire.",
            "lien": "https://www.linkedin.com/in/mylane-berkouk/",
            "photo": "assets/avis/mylane-berkouk.jpg"
      },
      {
            "nom": "Ambre Lemdani",
            "poste": "Étudiante en Ms Webmarketing & Social Media",
            "date": "6 avril 2024",
            "relation": "Ambre avait Nicolas comme responsable direct",
            "texte": "J'ai eu le plaisir d'avoir Nicolas Francou lors de mes cours de management chez Digital College, et je peux affirmer avec confiance qu'il est vraiment excellent.\nSa pédagogie est remarquable, combinant des concepts complexes avec des exemples concrets qui les rendent accessibles à la compréhension. Sa gentillesse et son soutien envers ses étudiants créent un environnement d'apprentissage positif et encourageant.\nDe plus, sa créativité en matière d'enseignement apporte une dynamique unique à chaque cours, ce qui le rend toujours intéressant et enrichissant.\nJe recommande vivement Nicolas pour toutes ces qualités.\nAu plaisir de pouvoir peut-être prochainement travailler avec lui.",
            "lien": "https://www.linkedin.com/in/ambre-lemdani-793001211/",
            "photo": "assets/avis/apprenant-1.jpg", "photoIllustration": true
      },
      {
            "nom": "Sebastien Fourcq",
            "poste": "Directeur regional / directeur de zone",
            "date": "5 avril 2024",
            "relation": "sebastien a travaillé avec Nicolas dans la même équipe",
            "texte": "Nicolas Francou est une personne qui a à coeur de mener à bien tous les challenges qui lui sont confiés, pleinement investit dans tout ce qu'il entreprend, il saura mené à la réussite et à la performance l'équipe qui lui sera confier.  C'est une personne qui n'a pas peur des nouveaux challenges et ne s'arrête pas aux premières difficultés rencontrées, il sait rebondir et se remettre en question pour toujours atteindre l'objectif.\nPassionné et passionnant le travail à ces côtés l'est tout au autant. Il 'est être leader quand le contexte en demande un tout comme il saura s'entourer des bonnes compétences et des bonnes personnes pour réussir.\nHomme de terrain et de défis, il a su démontrer de part ces différentes expériences qu'il était capable de s'adapter à différents secteurs et différents univers.",
            "lien": "https://www.linkedin.com/in/sebastien-fourcq-4595108b/",
            "photo": "assets/avis/sebastien-fourcq-4595108b.jpg"
      },
      {
            "nom": "Iziddine Louati",
            "poste": "En formation chez digital college 😁Community Manager du Spécial 📱Chaque jour est un nouveaux jour pour apprendre, découvrir et s'amuser 💪",
            "date": "4 avril 2024",
            "relation": "Iziddine avait Nicolas comme responsable direct",
            "texte": "Trés bon prof !Les cours deviennent facile à comprendre avec Mr francou.",
            "lien": "https://www.linkedin.com/in/iziddine-louati/",
            "photo": "assets/avis/iziddine-louati.jpg"
      },
      {
            "nom": "Reissa M.",
            "poste": "Responsable Marketing",
            "date": "3 avril 2024",
            "relation": "Reissa avait Nicolas comme responsable direct",
            "texte": "J'ai eu le plaisir d'être l'élève de Nicolas François pendant la durée de mon bachelor. Non seulement est-il un enseignant compétent dans son domaine, mais sa passion pour transmettre le savoir est palpable. Sa méthode d'enseignement interactive et son dévouement à aider ses élèves à réussir font de lui un professeur exceptionnel. Je recommande vivement Nicolas Francou à tous ceux qui cherchent à apprendre dans un environnement positif et stimulant.\"",
            "lien": "https://www.linkedin.com/in/reissa-m-116b631b6/",
            "photo": "assets/avis/reissa-m-116b631b6.jpg"
      },
      {
            "nom": "Kaïna Naït Ali",
            "poste": "Community Manager |  Etudiante master 2 en marketing digital et social média",
            "date": "3 avril 2024",
            "relation": "Kaïna avait Nicolas comme responsable direct",
            "texte": "Monsieur Nicolas,\nJe tiens simplement à vous dire un grand merci. Votre passion pour l'enseignement se reflète véritablement à travers chaque cours. Je voulais souligner que vous êtes un professeur exceptionnel que je recommande vivement !",
            "lien": "https://www.linkedin.com/in/ka%C3%AFna-na%C3%AFt-ali-450007214/",
            "photo": "assets/avis/ka-c3-afna-na-c3-aft-ali-450007214.jpg"
      },
      {
            "nom": "Hugo Millian",
            "poste": "Assistant chef de projet chez UNISTELLAR",
            "date": "3 avril 2024",
            "relation": "Hugo avait Nicolas comme responsable direct",
            "texte": "J'ai énormément apprécié la méthode d'enseignement de Mr Francou, il transmet de vraies valeurs humaine au-delà de ses cours qui eux-mêmes sont très qualitatifs !",
            "lien": "https://www.linkedin.com/in/hugo-millian/",
            "photo": "assets/avis/hugo-millian.jpg"
      },
      {
            "nom": "Cédric Thevenet",
            "poste": "Je remplis ton agenda de RDV qualifiés.",
            "date": "3 avril 2024",
            "relation": "Cédric avait Nicolas comme responsable direct",
            "texte": "J’ai eu la chance d’avoir Nicolas en tant que formateur dans le cadre de mon bachelor.\nSa méthode d’enseignement, la qualité du contenu, son aura et son expertise métier m’a permis d’acquérir de nouvelles compétences rapidement.\nJe ne me suis jamais « ennuyé »\nLe tout dans une bonne ambiance et en passant rapidement à la « pratique »\nMerci encore et je le recommande en tant que formateur ✅",
            "lien": "https://www.linkedin.com/in/cedric-thevenet/",
            "photo": "assets/avis/cedric-thevenet.jpg"
      },
      {
            "nom": "Eva Mendy",
            "poste": "Recherche d’alternance en marketing et communication",
            "date": "3 avril 2024",
            "relation": "Eva avait Nicolas comme responsable direct",
            "texte": "e recommande vivement Mr Francou. Son expertise en matière de gestion et leur approche pédagogique dynamique ont profondément enrichi mon expérience. Sa capacité à transmettre des concepts de manière claire et engageante est remarquable. Mr Francou est un professionnel dévoué dont les compétences seraient un atout précieux pour toute entreprise ou programme de formation.",
            "lien": "https://www.linkedin.com/in/eva-mendy/",
            "photo": "assets/avis/eva-mendy.jpg"
      },
      {
            "nom": "Léa Pouwels",
            "poste": "👩🏻‍💻",
            "date": "3 avril 2024",
            "relation": "Léa avait Nicolas comme responsable direct",
            "texte": "Lors de ma formation en marketing digital, j'ai eu le plaisir de suivre la formation en Management dispensée par Monsieur Nicolas Francou et je souhaite vivement le recommander à quiconque recherche un formateur humain, expérimenté, compétent et pédagogue.",
            "lien": "https://www.linkedin.com/in/l%C3%A9a-pouwels/",
            "photo": "assets/avis/l-c3-a9a-pouwels.jpg"
      },
      {
            "nom": "Emy Serges",
            "poste": "Étudiante en alternance, Master 2 marketing digital & social média | En recherche d’alternance",
            "date": "3 avril 2024",
            "relation": "Emy avait Nicolas comme responsable direct",
            "texte": "Professeur compétant et à l’écoute de ses élèves. Les cours sont attractifs et très dynamique. 😇",
            "lien": "https://www.linkedin.com/in/emy-serges-b736791b1/",
            "photo": "assets/avis/emy-serges-b736791b1.jpg"
      },
      {
            "nom": "Léna Bahou",
            "poste": "Étudiante en master 2 marketing digital en alternance",
            "date": "2 avril 2024",
            "relation": "Léna avait Nicolas comme responsable direct",
            "texte": "C'est avec enthousiasme que je recommande monsieur Nicolas Francou en tant qu'intervenant pour notre programme de licence.\nSa maîtrise du sujet, son engagement envers les étudiants et son professionnalisme exemplaire en font un\natout précieux pour toute institution.\nSes interventions ont été stimulantes et instructives, et il a démontré une disponibilité et une attention particulière envers les besoins des étudiants.\nMonsieur Francou est une ressource qui a enrichit indéniablement notre programme de licence en management marketing.",
            "lien": "https://www.linkedin.com/in/l%C3%A9na-bahou-335486236/",
            "photo": "assets/avis/l-c3-a9na-bahou-335486236.jpg"
      },
      {
            "nom": "Bakoma Bathily",
            "poste": "Responsable du réseau et de l’animation – Régions Nord & Est, Leader du courtage en travaux avec un réseau de 300 courtiers ( Groupe Saint-Gobain Distribution Bâtiment France)",
            "date": "2 avril 2024",
            "relation": "Bakoma avait Nicolas comme responsable direct",
            "texte": "J'ai eu la chance de travailler avec Nicolas Francou pendant plusieurs années, notamment chez JD Sports . Nicolas  est excellent dans l’aspect management, il a su ramener une valeur et un sens à son travail. Contrôler, suivre, manager sont des points forts de sa personnalité. Nicolas n'est pas seulement un excellent leader, c'est aussi quelqu'un avec un charisme incroyable avec une excellente pédagogie.",
            "lien": "https://www.linkedin.com/in/bakoma-bathily/",
            "photo": "assets/avis/bakoma-bathily.jpg"
      },
      {
            "nom": "Alexis F.",
            "poste": "En recherche d’emploi",
            "date": "1 avril 2024",
            "relation": "Alexis avait Nicolas comme responsable direct",
            "texte": "Formateur au top, à l'écoute de es étudiants, professionnel, très bon orateur, et grande qualité d'enseignement. Je le recommande vivement !s",
            "lien": "https://www.linkedin.com/in/alexis-f-2827a6139/",
            "photo": "assets/avis/alexis-f-2827a6139.jpg"
      },
      {
            "nom": "Fahra Yekhlef",
            "poste": "Chargée de recouvrement  chez BNP Paribas Personal Finance",
            "date": "1 avril 2024",
            "relation": "Fahra était le responsable direct de Nicolas",
            "texte": "Très bon professeur, à l’écoute de ses élèves, on ressent sa passion à travers ses cours qui sont super bien travaillés et animés. Merci pour cette bonne humeur que vous nous transmettez à chaque cours !",
            "lien": "https://www.linkedin.com/in/fahra-yekhlef-ingenieur-daffaires-commercialb2b/",
            "photo": "assets/avis/fahra-yekhlef-ingenieur-daffaires-commercialb2b.jpg"
      },
      {
            "nom": "Dounia Hanna El Djidel",
            "poste": "Étudiant(e) en Master Marketing Digital et Social Média",
            "date": "1 avril 2024",
            "relation": "Dounia Hanna avait Nicolas comme responsable direct",
            "texte": "Le meilleur professeur que j'ai eu à digital collège, Nicolas a su nous captiver durant les cours du début à la fin, des cours préparer avec soin. Merci encore pour les connaissances que vous nous avez transmises durant tout au long de l'année, en espérant vous revoir très vite. Ayez un Francou dans vos vies ! =)",
            "lien": "https://www.linkedin.com/in/dounia-hanna-eldjidel/",
            "photo": "assets/avis/apprenant-2.jpg", "photoIllustration": true
      },
      {
            "nom": "Thamrat Said Ali",
            "poste": "Étudiante en Ms webmarketing & social média",
            "date": "1 avril 2024",
            "relation": "Thamrat était le responsable direct de Nicolas",
            "texte": "Un très bon prof, sans doute le meilleur prof que j’ai eu. Votre bienveillance ont eu un impact positif sur notre parcours académique. Votre engagement envers le succès de vos élèves est remarquable.❤️",
            "lien": "https://www.linkedin.com/in/thamrat-said-ali-31350a227/",
            "photo": "assets/avis/thamrat-said-ali-31350a227.jpg"
      },
      {
            "nom": "Hadia Brahmi",
            "poste": "Étudiante en Master 1 Stratégie Digital",
            "date": "1 avril 2024",
            "relation": "Hadia avait Nicolas comme responsable direct",
            "texte": "Un intervenant au top, il a su transmettre son savoir de manière intéressante avec une superbe pédagogie.\nAu delà de ses interventions c’est une personne à l’écoute avec un parcours qui motive, l’un des meilleurs prof que j’ai pu avoir dans ma scolarité , merci pour ta bonne humeur et ton apprentissage enrichissant !!",
            "lien": "https://www.linkedin.com/in/hadia-brahmi-732360280/",
            "photo": "assets/avis/apprenant-1.jpg", "photoIllustration": true
      },
      {
            "nom": "Alexandre Montmayeur",
            "poste": "Conseiller Commercial",
            "date": "1 avril 2024",
            "relation": "Alexandre a travaillé avec Nicolas dans la même équipe",
            "texte": "une personne fiable avec des vraies valeurs humaines.",
            "lien": "https://www.linkedin.com/in/alexandre-montmayeur-935380150/",
            "photo": "assets/avis/alexandre-montmayeur-935380150.jpg"
      },
      {
            "nom": "Roxane Vanparis",
            "poste": "Chargée de recrutement chez Manpower",
            "date": "1 avril 2024",
            "relation": "Roxane avait Nicolas comme responsable direct",
            "texte": "Un formateur dévoué, à l'écoute et doté d'une pédagogie remarquable !",
            "lien": "https://www.linkedin.com/in/roxane-vanparis/",
            "photo": "assets/avis/roxane-vanparis.jpg"
      },
      {
            "nom": "Berivan Aslan",
            "poste": "Étudiant à Digital Collège  (Marseille)",
            "date": "1 avril 2024",
            "relation": "Berivan avait Nicolas comme responsable direct",
            "texte": "Très bon prof, l’un des meilleurs que je n’ai jamais eu je pense. À l’écoute mais surtout toujours là pour ses élèves, il prend le temps qu’il faut pour nous expliquer avec patience. Merci monsieur Francou ! 🥰",
            "lien": "https://www.linkedin.com/in/berivan-aslan-611856264/",
            "photo": "assets/avis/berivan-aslan-611856264.jpg"
      },
      {
            "nom": "Linda Abbas",
            "poste": "Assistante Commerciale – Gestion entreprise",
            "date": "1 avril 2024",
            "relation": "Linda était le responsable direct de Nicolas",
            "texte": "Un très bon formateur qui m’a accompagner de A à Z. Malgré ma rentrer décalée ne m’a pas laisser tomber et m’a tout appris sur le management d’équipe. 🫶🏼",
            "lien": "https://www.linkedin.com/in/linda-abbas/",
            "photo": "assets/avis/apprenant-4.jpg", "photoIllustration": true
      },
      {
            "nom": "Benjamin Leclerc",
            "poste": "Lead Nike",
            "date": "1 avril 2024",
            "relation": "Benjamin avait Nicolas comme responsable direct",
            "texte": "Une monstre du travail.\nUn manager a l’écoute et intentionné.\nChallenger et compétiteur, sont management est top.",
            "lien": "https://www.linkedin.com/in/benjamin-leclerc-149913249/",
            "photo": "assets/avis/benjamin-leclerc-149913249.jpg"
      },
      {
            "nom": "Riad Achour",
            "poste": "Consultant en Direction de projets  I  IT Program Manager I  IT Project Manager",
            "date": "1 avril 2024",
            "relation": "Riad a travaillé avec Nicolas, mais dans des entreprises différentes",
            "texte": "Je recommande Nicolas pour son sérieux et son plaisir à transmettre sa connaissance à travers ses diverses expériences.\nCollaborateur et partenaires sur plusieurs projets, je recommande fortement",
            "lien": "https://www.linkedin.com/in/riad-achour-02657b43/",
            "photo": "assets/avis/riad-achour-02657b43.jpg"
      },
      {
            "nom": "Mélissa Grandsire Belaribi",
            "poste": "Cheffe de projets Marketing et CRM",
            "date": "23 mars 2024",
            "relation": "Mélissa a été le professeur de Nicolas",
            "texte": "Je recommande vivement Nicolas pour qui le management est une passion qu’il partage avec envie et beaucoup de pédagogie.\nNicolas possède cette volonté de transmettre son savoir. Chaque cours est ainsi très enrichissant.\nDe plus son parcours nous inspire et nous motive à développer des compétences managériales tout aussi remarquables.",
            "lien": "https://www.linkedin.com/in/m%C3%A9lissa-belaribi/",
            "photo": "assets/avis/m-c3-a9lissa-belaribi.jpg"
      },
      {
            "nom": "Alexandre Meresse",
            "poste": "Responsable Régional",
            "date": "14 juin 2022",
            "relation": "Alexandre a été le client de Nicolas",
            "texte": "J'ai eu le plaisir de rencontré Nicolas lors de Formation faites pas FASTE FORMATION.\nPédagogue, dynamique et organisé, je recommande ces formations.\nJe referais sans hésitez des formations animées par Nicolas.\nMerci à toi pour ton énergie et ta bienveillance.",
            "lien": "https://www.linkedin.com/in/alexandre-meresse-665a08b9/",
            "photo": "assets/avis/alexandre-meresse-665a08b9.jpg"
      }
]
  },


  /* ------------------------------------------------------------------
     PROGRAMME : FORMATION ET ACCULTURATION À L'IA GÉNÉRATIVE
     (parcours formateur) - thèmes, objectifs, méthode CRAFT, façon de travailler
     ------------------------------------------------------------------ */
  programmeIA: {
    eyebrow: "Formation et acculturation à l'IA",
    titre: "Accompagner des équipes vers une utilisation responsable, sécurisée et opérationnelle de l'IA générative",
    intro: "Un programme de formation et d'acculturation à l'intelligence artificielle, pensé pour des fonctionnaires, des agents et des équipes métier qui utilisent des outils d'IA générative au quotidien. Fondamentaux, usages professionnels des chatbots, art du prompting, vérification des réponses, protection des données, confidentialité, éthique, limites de l'automatisation et identification de cas d'usage adaptés aux activités administratives.",
    themes: [
      { titre: "Fondamentaux de l'intelligence artificielle", texte: "Ce qu'est l'IA générative, comment fonctionne un modèle de langage, ce qu'il sait faire et ce qu'il ne fait pas. Développer une culture commune de l'IA dans l'équipe.", cles: ["IA générative", "culture commune", "acculturation numérique"] },
      { titre: "Usages professionnels des chatbots", texte: "Les principaux outils de type chatbot et leurs usages professionnels : rédiger, résumer, reformuler, structurer, préparer une réunion, répondre à un usager. Rendre les agents autonomes sur les outils autorisés.", cles: ["chatbots", "outils autorisés", "autonomie"] },
      { titre: "L'art du prompting : la méthode CRAFT", texte: "Techniques de formulation, d'amélioration, d'optimisation et de contrôle des prompts, avec une méthode simple et mémorisable : CRAFT. Évaluer un prompt et l'améliorer en quelques itérations.", cles: ["prompting", "méthode CRAFT", "formulation", "optimisation", "évaluation des prompts"] },
      { titre: "Vérifier les réponses générées", texte: "Hallucinations, biais, reproduction d'erreurs : comprendre les risques, repérer ce qui doit être vérifié, croiser avec une source fiable, garder la décision humaine.", cles: ["hallucinations", "biais", "vérification", "contrôle"] },
      { titre: "Protection des données, confidentialité, sécurité", texte: "Ce qu'on ne transmet jamais à un outil d'IA : données personnelles, informations confidentielles, documents internes. Les règles de sécurité des informations et les réflexes à adopter.", cles: ["données personnelles", "confidentialité", "sécurité des informations"] },
      { titre: "Éthique, usage raisonné et limites de l'automatisation", texte: "Prévenir les usages inappropriés ou non conformes, favoriser une utilisation raisonnée des outils numériques, comprendre ce qui doit rester une décision humaine et ce que l'automatisation ne doit pas faire.", cles: ["éthique", "usage raisonné", "conformité", "limites de l'automatisation"] },
      { titre: "Cas d'usage et amélioration des processus", texte: "Identifier les cas d'usage adaptés aux activités administratives, repérer les opportunités d'amélioration des processus, et les prioriser selon leur utilité et leur niveau de risque.", cles: ["cas d'usage", "processus administratifs", "priorisation"] },
      { titre: "Relais, doctrine d'usage et suivi", texte: "Constituer un réseau d'agents relais ou d'ambassadeurs, contribuer à l'émergence d'une doctrine d'usage commune, proposer des modalités d'accompagnement post-formation, et mesurer l'acquisition des compétences et l'évolution des pratiques.", cles: ["agents relais", "ambassadeurs", "doctrine d'usage", "accompagnement post-formation", "mesure des compétences"] }
    ],
    craft: {
      titre: "CRAFT : cinq questions pour écrire un bon prompt",
      intro: "La méthode que j'enseigne pour formuler, améliorer et contrôler un prompt. Elle tient sur une main et s'applique à tous les outils de type chatbot.",
      lettres: [
        { lettre: "C", mot: "Contexte", texte: "La situation, l'organisation, le public, les contraintes. L'outil ne devine rien : on lui donne le cadre." },
        { lettre: "R", mot: "Rôle", texte: "Le point de vue à adopter : « tu es un chargé de communication interne », « tu es un relecteur exigeant »." },
        { lettre: "A", mot: "Action", texte: "La tâche précise à accomplir, avec un verbe clair : résumer, reformuler, proposer trois versions, lister les questions." },
        { lettre: "F", mot: "Format", texte: "La forme attendue : longueur, structure, tableau, liste, niveau de langue, langue de sortie." },
        { lettre: "T", mot: "Ton et cible", texte: "À qui s'adresse le résultat et sur quel ton : institutionnel, pédagogique, bienveillant, neutre." }
      ],
      exemple: {
        titre: "Exemple (situation fictive)",
        avant: "« Fais-moi un mail pour les agents sur la nouvelle procédure. »",
        apres: "« Contexte : service administratif, nouvelle procédure de dépôt des demandes en ligne à partir du 1er du mois. Rôle : tu es un chargé de communication interne. Action : rédige un message qui annonce le changement, explique les trois étapes et indique à qui s'adresser. Format : 150 mots maximum, un titre, trois puces, un contact. Ton : clair, institutionnel, rassurant, destiné à des agents non techniques. »",
        controle: "Puis le contrôle : relire, vérifier les dates et les noms, retirer ce qui n'a pas été fourni par le contexte, et ne jamais coller de données personnelles réelles dans le prompt."
      }
    },
    objectifs: {
      titre: "Ce que la formation vise, pour chaque participant",
      liste: [
        "Développer une culture commune sur l'intelligence artificielle",
        "Rendre les agents autonomes dans l'utilisation des outils autorisés",
        "Faire connaître les principaux cas d'usage applicables à une administration",
        "Enseigner les techniques de formulation, d'amélioration et de contrôle des prompts",
        "Développer la capacité à vérifier les réponses générées",
        "Prévenir les usages inappropriés ou non conformes",
        "Faire comprendre les risques liés aux hallucinations, aux biais et à la reproduction d'erreurs",
        "Favoriser une utilisation raisonnée des outils numériques",
        "Identifier les opportunités d'amélioration des processus administratifs",
        "Constituer un réseau d'agents relais ou d'ambassadeurs",
        "Contribuer à l'émergence d'une doctrine d'usage commune",
        "Proposer des modalités d'accompagnement post-formation",
        "Mesurer l'acquisition des compétences et l'évolution des pratiques"
      ]
    },
    savoirs: {
      titre: "Les savoirs que je mobilise",
      liste: [
        "Concepts fondamentaux de l'IA générative et principaux outils de type chatbot",
        "Techniques de formulation, d'optimisation et d'évaluation des prompts",
        "Limites, biais, risques d'erreur et conditions de vérification des contenus générés",
        "Protection des données personnelles, confidentialité et sécurité des informations",
        "Formation des adultes, acculturation numérique et accompagnement au changement"
      ]
    },
    posture: {
      titre: "Ma façon de travailler en mission",
      liste: [
        { titre: "En équipe", texte: "Travail en équipe avec des interlocuteurs variés : fonctionnels, techniques, utilisateurs finaux métiers." },
        { titre: "Autonome, organisé, rigoureux", texte: "Suivi d'avancement et reporting réguliers, planning tenu, livrables annoncés et livrés." },
        { titre: "Analyse, modélisation, synthèse", texte: "Comprendre une situation, la modéliser simplement, la restituer de façon claire et actionnable." },
        { titre: "Adaptation", texte: "Capacité à s'adapter aux changements et aux imprévus : un public différent, une contrainte nouvelle, un outil qui change." },
        { titre: "Relationnel et communication", texte: "Expliquer, convaincre, se tenir informé des sujets, des besoins et des contraintes de chacun." },
        { titre: "Discrétion et réserve", texte: "Accès possible à des informations confidentielles : discrétion, réserve et respect strict des règles de l'organisation." }
      ]
    }
  },

  /* ------------------------------------------------------------------
     PROPOSITION POUR LA MISSION
     Ces dispositifs sont des propositions, pas des missions réalisées
     ni des engagements convenus.
     ------------------------------------------------------------------ */
  proposition: {
    titre: "Une proposition de démarrage à construire avec vos équipes",
    intro: "Pour une organisation, entreprise ou administration, qui souhaite accompagner ses équipes vers une utilisation concrète, responsable et sécurisée de l'IA, ou cadrer un premier projet utile, voici comment je proposerais de démarrer. Ce ne sont pas des missions réalisées : ce sont des points de départ, à ajuster avec vos équipes.",
    volets: {
      "formateur": {
        titre: "Volet formation",
        etapes: [
          { titre: "Diagnostic", texte: "Rencontrer les équipes, comprendre les usages existants, le niveau initial et les attentes. Identifier les cas d'usage métier pertinents et les risques à traiter en priorité." },
          { titre: "Objectifs", texte: "Formuler des objectifs par public : fondamentaux de l'IA générative, usages professionnels des chatbots, art du prompting (méthode CRAFT), vérification des réponses, hallucinations et biais, confidentialité et protection des données, éthique et limites de l'automatisation." },
          { titre: "Ateliers pilotes", texte: "Des sessions courtes sur les cas réels des participants, avec de la pratique et des règles de prudence applicables dès le lendemain." },
          { titre: "Évaluation", texte: "Mesurer les compétences acquises et l'évolution des pratiques, avec des critères définis ensemble." },
          { titre: "Relais et doctrine d'usage", texte: "Constituer un réseau d'agents relais ou d'ambassadeurs, contribuer à une doctrine d'usage commune, proposer des modalités d'accompagnement post-formation et mesurer l'évolution des pratiques." }
        ]
      },
      "chef-de-projet": {
        titre: "Volet projet",
        etapes: [
          { titre: "Découverte métier", texte: "Observer les processus, rencontrer les utilisateurs et identifier où un usage de l'IA apporte une aide réelle." },
          { titre: "Contraintes", texte: "Confidentialité, données, outils autorisés, cadre réglementaire : ce qui est possible aujourd'hui et ce qui ne l'est pas." },
          { titre: "Priorisation", texte: "Sélectionner un cas d'usage utile, maîtrisable et visible, plutôt qu'un programme trop large." },
          { titre: "Cadrage d'un pilote", texte: "Objectif, utilisateurs, critères de validation, rôle exact de l'IA et règles qui restent explicites." },
          { titre: "Validation et adoption", texte: "Tests avec les utilisateurs, corrections, formation à la prise en main et relais dans les équipes." }
        ]
      }
    },
    precaution: "Les outils d'IA mobilisés seront ceux autorisés par votre organisation. Aucune hypothèse n'est faite ici sur les outils disponibles."
  },

  /* ------------------------------------------------------------------
     PIED DE PAGE
     ------------------------------------------------------------------ */
  pied: {
    mention: "Portfolio professionnel de Nicolas Francou. Les réalisations présentées distinguent ce qui est livré, en cours ou proposé. Aucune donnée confidentielle n'est publiée."
  }
};
