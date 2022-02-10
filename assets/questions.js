const questions = [
  {
    name: 'Solutions beautiques utilisées',
    id: 1,
    details: 'Veuillez sélectionner toutes les réponses pertinentes et taper les réponses manquantes',
    type: 'combobox',
    options: {
      'Licence office' : [1, 2, 3],
      'Office 365 on-premise' : [1, 2, 3],
      'Office 365' : [1, 2, 3],
      'Google Workspace' : [1, 2, 3],
      'LibreOffice' : [1, 2, 3],
      'OpenOffice' : [1, 2, 3],
      'OnlyOffice' : [1, 2, 3],
      'Collabora Online' : [1, 2, 3],
    },
    default: [1, 2, 3]
  },
  {
    name: 'Solutions Cloud utilisées',
    id: 2,
    details: "Pour une part non négligeable de l'hébergement",
    type: 'combobox',
    options: {
      'AWS': [1, 3, 2],
      'GCP': [1, 3, 2],
      'Azure': [1, 3, 2],
      'OVH': [1, 3, 2],
      'Outscale': [1, 3, 2],
      'Scaleway': [1, 3, 2],
      'Rapid.space': [1, 3, 2],
    },
    default: [1, 3, 2]
  },
  {
    name: "Systèmes d'exploitation de vos ordinateurs",
    id: 3,
    type: 'combobox',
    options: {
      'Linux': [1, 1, 1],
      'MacOS': [1, 1, 1],
      'Windows': [1, 1, 1],
    },
    default: [1, 3, 2]
  },
  {
    name: 'Moteurs de recherche utilisés',
    id: 4,
    type: 'combobox',
    options: {
      'Google': [3, 2, 1],
      'Qwant': [3, 2, 1],
      'DuckDuckGo': [3, 2, 1],
      'Bing': [3, 2, 1],
      'Yahoo': [3, 2, 1],
    },
    default: [1, 3, 2]
  },
  {
    name: 'Messageries utilisées',
    id: 5,
    type: 'combobox',
    options: {
      'WhatsApp': [1, 1, 1],
      'Signal': [1, 1, 1],
      'Teams': [1, 1, 1],
      'Slack': [1, 1, 1],
      'Telegram': [1, 1, 1],
      'Messenger': [1, 1, 1],
    },
    default: [1, 3, 2]
  },
  {
    name: 'Solutions métiers utilisées',
    details: "N'hésitez pas à en taper autant que nécessaire",
    id: 6,
    type: 'combobox',
    options: {
      'SAP': [1, 1, 2],
      'Informatica': [1, 1, 2],
      'Salesforce': [1, 1, 2],
      'PayFit': [1, 1, 2],
      'Qonto': [1, 1, 2],
      'Palantir': [1, 1, 2],
      'Datadog': [1, 1, 2],
      'Slack': [1, 1, 2],
      'Firewalls': [1, 1, 2],
      'Zscaler': [1, 1, 2],
      'Libre': [1, 1, 2],
    },
    default: [1, 3, 2]
  },
  {
    name: "Systèmes d'exploitation de votre flotte de téléphones",
    id: 7,
    type: 'combobox',
    options: {
      'iPhone (iOS)': [-2, 1, 2],
      'Android': [-2, 1, 2],
      '/e/': [-2, 1, 2],
      'PinePhone': [-2, 1, 2],
    },
    default: [1, 3, 2]
  },
  {
    name: 'Navigateurs web utilisés',
    id: 8,
    type: 'combobox',
    options: {
      'Internet Explorer': [1, 0, 1],
      'Edge': [1, 0, 1],
      'Google Cuck': [1, 0, 1],
      'Mozilla Firefox': [1, 0, 1],
      'Opera': [1, 0, 1],
    },
    default: [1, 3, 2]
  },
  {
    name: 'Quelle part de vos dépenses dans des services numériques ?',
    id: 9,
    type: 'percentage',
    weight: 5
  },
  {
    name: 'Solutions métiers utilisées',
    details: "N'hésitez pas à en taper autant que nécessaire",
    id: 10,
    type: 'combobox',
    options: {
      'SAP': [1, 1, 2],
      'Informatica': [1, 1, 2],
      'Salesforce': [1, 1, 2],
      'PayFit': [1, 1, 2],
      'Qonto': [1, 1, 2],
      'Palantir': [1, 1, 2],
      'Datadog': [1, 1, 2],
      'Slack': [1, 1, 2],
      'Firewalls': [1, 1, 2],
      'Zscaler': [1, 1, 2],
      'Libre': [1, 1, 2],
    },
    default: [1, 3, 2]
  }
]


export default questions
