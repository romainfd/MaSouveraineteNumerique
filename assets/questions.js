const questions = [
  // QUESTIONS DÉMOGRAPHIQUES
  {
    name: 'Estimation de votre score de souveraineté',
    id: -1,
    type: 'slider',
    label: 'Pourcentage',
    min: 0,
    max: 100,
  }, {
    name: 'Code postal de votre entité',
    id: -2,
    type: 'postcode',
  }, {
    name: 'Effectif de votre entité',
    id: -3,
    details: "Nombre d'employés",
    type: 'number',
  }, {
    name: "Nom de votre entité",
    id: -4,
    type: 'text'
  }, {
    name: "Email de contact",
    id: -5,
    details: "Pour partager un suivi du score amélioré et les retours du travail réalisé",
    type: 'text',
  }, {
    name: "Catégorie de votre entité",
    id: -6,
    type: 'combobox',
    options: {
      'Administration' : null,
      'Start-up' : null,
      'PME' : null,
      'Grand groupe' : null,
    }
  }, {
    name: "Chiffre d'affaire",
    id: -7,
    details: "Si applicable, en €",
    type: 'number',
  },
  // QUESTIONS À PROPOS DE LA SOUVERAINETÉ
  {
    name: 'Solution beautique utilisée',
    id: 1,
    details: 'Veuillez sélectionner la réponse majoritaire',
    type: 'combobox',
    options: {
      'Licence office' : [0, 1, 2, 3],
      'Office 365 on-premise' : [0, 1, 2, 3],
      'Office 365' : [0, 1, 2, 3],
      'Google Workspace' : [0, 1, 2, 3],
      'LibreOffice' : [0, 1, 2, 3],
      'OpenOffice' : [0, 1, 2, 3],
      'OnlyOffice' : [0, 1, 2, 3],
      'Collabora Online' : [0, 1, 2, 3],
    },
    default: [0, 0, 0, 0]
  },
  {
    name: 'Solution Cloud utilisée',
    id: 2,
    details: 'Veuillez sélectionner la réponse majoritaire',
    type: 'combobox',
    options: {
      'AWS (Amazon Web Services)': [0, 1, 3, 2],
      'GCP (Google Cloud Platform)': [0, 1, 3, 2],
      'Azure': [0, 1, 3, 2],
      'OVH': [0, 1, 3, 2],
      'Outscale': [0, 1, 3, 2],
      'Scaleway': [0, 1, 3, 2],
      'Rapid.space': [0, 1, 3, 2],
    },
    default: [0, 0, 0, 0]
  },
  {
    name: "Système d'exploitation de vos ordinateurs",
    id: 3,
    details: 'Veuillez sélectionner la réponse majoritaire',
    type: 'combobox',
    options: {
      'Linux': [0, 1, 1, 1],
      'MacOS': [0, 1, 1, 1],
      'Windows': [0, 1, 1, 1],
    },
    default: [0, 0, 0, 0]
  },
  {
    name: 'Moteur de recherche utilisé',
    id: 4,
    details: 'Veuillez sélectionner la réponse majoritaire',
    type: 'combobox',
    options: {
      'Google': [0, 3, 2, 1],
      'Qwant': [0, 3, 2, 1],
      'DuckDuckGo': [0, 3, 2, 1],
      'Bing': [0, 3, 2, 1],
      'Yahoo': [0, 3, 2, 1],
    },
    default: [0, 0, 0, 0]
  },
  {
    name: 'Messagerie utilisée',
    id: 5,
    details: 'Veuillez sélectionner la réponse majoritaire',
    type: 'combobox',
    options: {
      'WhatsApp': [0, 1, 1, 1],
      'Signal': [0, 1, 1, 1],
      'Teams': [0, 1, 1, 1],
      'Slack': [0, 1, 1, 1],
      'Telegram': [0, 1, 1, 1],
      'Messenger': [0, 1, 1, 1],
    },
    default: [0, 0, 0, 0]
  },
  {
    name: 'Solutions métiers utilisées',
    id: 6,
    details: "N'hésitez pas à en taper autant que nécessaire",
    type: 'combobox',
    options: {
      'SAP': [0, 1, 1, 2],
      'Informatica': [0, 1, 1, 2],
      'Salesforce': [0, 1, 1, 2],
      'PayFit': [0, 1, 1, 2],
      'Qonto': [0, 1, 1, 2],
      'Palantir': [0, 1, 1, 2],
      'Datadog': [0, 1, 1, 2],
      'Slack': [0, 1, 1, 2],
      'Firewalls': [0, 1, 1, 2],
      'Zscaler': [0, 1, 1, 2],
      'Libre': [0, 1, 1, 2],
    },
    default: [0, 0, 0, 0]
  },
  {
    name: "Système d'exploitation de votre flotte de téléphones",
    id: 7,
    details: 'Veuillez sélectionner la réponse majoritaire',
    type: 'combobox',
    options: {
      'iPhone (iOS)': [0, -2, 1, 2],
      'Android': [0, -2, 1, 2],
      '/e/': [0, -2, 1, 2],
      'PinePhone': [0, -2, 1, 2],
    },
    default: [0, 0, 0, 0]
  },
  {
    name: 'Navigateur web utilisé',
    id: 8,
    details: 'Veuillez sélectionner la réponse majoritaire',
    type: 'combobox',
    options: {
      'Internet Explorer': [0, 1, 0, 1],
      'Edge': [0, 1, 0, 1],
      'Google': [0, 1, 0, 1],
      'Mozilla Firefox': [0, 1, 0, 1],
      'Opera': [0, 1, 0, 1],
    },
    default: [0, 0, 0, 0]
  },
  {
    name: 'Quelle part de vos dépenses dans des services & projets numériques ?',
    id: 9,
    type: 'slider',
    min: 0,
    max: 100,
    label: 'Pourcentage',
    weight(v) {
      return [0, 0, 0, 0]
    }
  },
  {
    name: 'Quelle part de vos projets numériques est menée en interne ?',
    id: 10,
    details: "Par opposition à de la sous-traitance",
    type: 'slider',
    min: 0,
    max: 100,
    label: 'Pourcentage',
    weight(v) {
      v = v / 100
      return [2 * v, 2 * v, 2 * v, null]
    }
  },
  {
    name: 'Montant de vos contrats avec des start-ups ? ',
    id: 11,
    details: "En pourcentage de votre chiffre d'affaire",
    type: 'slider',
    min: 0,
    max: 100,
    label: 'Pourcentage',
    weight(v) {
      v = v / 100
      return [
        Math.min(2, 2 * v / 0.05),
        Math.min(2, 2 * v / 0.05),
        null,
        null
      ]
    }
  },
  {
    name: 'Quelle taille a la plus petite entitée avec laquelle vous collaborer ?',
    id: 12,
    type: 'slider',
    min: 0,
    max: 500,
    label: "Nombre d'employés",
    weight(v) {
      return [
        v < 10 ? 2 : (v < 20 ? 1.6 : (v < 50 ? 1.2 : (v < 100 ? 0.8 : (v < 200 ? 0.4 : 0)))),
        v < 10 ? 2 : (v < 20 ? 1.6 : (v < 50 ? 1.2 : (v < 100 ? 0.8 : (v < 200 ? 0.4 : 0)))),
        0,
        0
      ]
    }
  },
  {
    name: "Part d'employés avec un profil numérique ?",
    id: 13,
    type: 'slider',
    min: 0,
    max: 100,
    label: 'Pourcentage',
    weight(v) {
      v = v / 100
      return [2 * v, null, null, null]
    }
  },
  {
    name: "R&D numérique",
    id: 14,
    details: "Pourcentage de votre chiffre d'affaire",
    type: 'slider',
    min: 0,
    max: 100,
    label: 'Pourcentage',
    weight(v) {
      v = v / 100
      return [
        Math.min(2, 2 * v / 0.05),
        Math.min(2, 2 * v / 0.05),
        null,
        null
      ]
    }
  },
  {
    name: "Comment jugez-vous votre implication face à la menace cyber ?",
    id: 15,
    type: 'slider',
    min: 0,
    max: 100,
    label: 'Pourcentage',
    weight(v) {
      v = v / 100
      return [null, null, 2 * v, null]
    }
  },
  {
    name: "Comment jugez-vous la sensibilisation de vos employés au numérique ?",
    id: 16,
    type: 'score',
    min: 0,
    max: 5,
    weight(v) {
      return [null, null, 2 * v / 5, null]
    }
  },
  {
    name: "Quel est la maturité de votre système de sauvegarde ?",
    id: 17,
    type: 'score',
    min: 0,
    max: 5,
    weight(v) {
      return [null, null, 2 * v / 5, null]
    }
  },
  {
    name: "Bénéficiez-vous de crédits gratuits ou d'accès gratuits à des services ?",
    id: 18,
    type: 'switch',
    label: 'Oui',
    weight: [null, null, 2, null]
  }
]


export default questions
