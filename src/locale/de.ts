import { faClaude, faDeskpro } from "@fortawesome/free-brands-svg-icons";
import { faArrowTrendUp, faBorderAll, faBullseye, faChartLine, faCircleQuestion, faComputer, faCube, faDatabase, faDesktop, faFolderOpen, faImage, faLaptopCode, faLayerGroup, faLightbulb, faLock, faMessage, faMicrochip, faRobot, faServer, faShareNodes, faTableCells, faUsers } from "@fortawesome/free-solid-svg-icons";
import chatOnSS1 from '../assets/projects/chatOnSS1.png';
import chatOnSS2 from '../assets/projects/ChatOnSS2.png';
import chatOnSS3 from '../assets/projects/ChatOnSS3.png';
import chatOnSS4 from '../assets/projects/chatOnSS4.png';
import chatOnSS5 from '../assets/projects/chatOnSS5.png';
import papier from "../assets/projects/paper.png"
import plastic from "../assets/projects/plastic.jpg"
import cardboard from "../assets/projects/cardboard.png"
import glass from "../assets/projects/glass.png"

export const de = {
    common: {
        admin: {
name: "Jern",
        },
      technologies: {
        react: 'React',
        reactNative: 'React Native',
        angular: 'Angular',
        python: 'Python',
        firebase: 'Firebase',
        javascript: 'JavaScript',
        android: 'Android',
        java: 'Java',
        firestore: 'Firestore',
        authentication: 'Authentication',
      },
      github: 'GitHub',
    },
    navbar: {
      me: 'Über mich',
      experience: 'Erfahrung',
      projects: 'Projekte',
      learningLog: 'Learning Log'
    },
    home: {
      title: 'Full-Stack-Softwareentwickler',
      description:
        'Ich entwickle moderne und skalierbare Software mit intuitiven Benutzererlebnissen und zuverlässigen Backend-Systemen. Mein Fokus liegt auf sauberem Code und wartbaren Lösungen.',
      joined: 'Beigetreten 2016',
      location: 'München, Deutschland',
      buttonProject: "Go to Projects"
    },
   me: {
  cards: [
    {
      title: "Hallo! 👋🏾",
      text: "Ich bin Jern. Willkommen in meinem Portfolio! Hier teile ich meinen Werdegang, meine Erfahrungen und die Projekte, die ich auf meiner Reise durch die Welt der Softwareentwicklung umgesetzt habe."
    },
    {
      title: "Alltag 🌱",
      text: "Programmieren, Bugs lösen, Neues lernen, gutes Essen genießen, ausreichend schlafen und eine gesunde Balance zwischen Arbeit und Erholung finden."
    },
    {
      text: "Ich löse gerne anspruchsvolle Probleme, lerne neue Technologien kennen und entwickle Software, die Ideen in nützliche und sinnvolle Lösungen verwandelt."
    },
    {
      title: "Fun Fact ☕",
      text: "Was vor fünf Jahren als kurzes Praktikum begann, wurde zu einem neuen Kapitel meines Lebens. Ich habe mich entschieden, in München zu bleiben, die Stadt zu meinem Zuhause zu machen und mich sowohl persönlich als auch beruflich weiterzuentwickeln."
    },
    {
      title: "Außerhalb des Programmierens 🌍",
      text: "Ich entdecke gerne neue Orte, finde versteckte Highlights, lerne ständig Neues und achte auf eine gute Balance zwischen Beruf und Privatleben."
    }
  ],
},

experience: {
  items: [
    {
      year: "2022 – Heute",
      icon: "👩🏽‍💻",
      title: "Full-Stack Software Engineer",
      subtitle: "Aktuelle Position",
      description:
        "Ich entwickle und betreue Full-Stack-Webanwendungen. Dabei implementiere ich Backend-Services mit C#, REST-APIs, BFFs und Endpunkten sowie responsive Frontends mit JavaScript, jQuery, Kendo UI und Webpack. Außerdem arbeite ich mit Azure DevOps und CI/CD-Pipelines und habe meine Kenntnisse in React kontinuierlich erweitert."
    },
    {
      year: "Jul 2021 – Okt 2021",
      icon: "📱",
      title: "Mobile Developer Erasmus+",
      subtitle: "Praktikum",
      description:
        "Ich entwickelte plattformübergreifende mobile Anwendungen für Android und iOS mit Flutter."
    },
    {
      year: "Nov 2020 – Jun 2021",
      icon: "💼",
      title: "Mobile Developer",
      subtitle: "Werkstudent",
      description:
        "Ich entwickelte mobile Anwendungen für Android und iOS mit React Native, arbeitete eng mit Designern zusammen, um benutzerfreundliche Oberflächen zu gestalten, und veröffentlichte die Apps im App Store und bei Google Play."
    },
    {
      year: "2020",
      icon: "📲",
      title: "Android Development Bootcamp (Turkcell)",
      subtitle: "Android-App-Entwicklung",
      description:
        "Ich nahm an einem Android-Entwicklungswettbewerb teil und entwickelte eine Android-Anwendung mit Java und Android Studio. Als Abschlussprojekt erstellte und veröffentlichte ich eine App für die türkische Gebärdensprache."
    },
    {
      year: "2019",
      icon: "🤖",
      title: "KI-Sommercamp",
      subtitle: "Deep Learning & Image Processing",
      description:
        "Ich nahm an einem KI-Sommercamp mit Schwerpunkt Machine Learning und Bildverarbeitung teil. Gemeinsam mit einem Team entwickelte ich ein Deep-Learning-Modell zur Klassifizierung von Wertstoffen und Abfallarten und präsentierte unser Projekt."
    },
    {
      year: "Juli 2019 – Okt. 2019",
      icon: "📊",
      title: "Softwareentwickler",
      subtitle: "Sommerpraktikum",
      description:
        "Ich entwickelte Geschäftsanwendungen mit ABAP in der SAP-Umgebung."
    },
    {
      year: "2016 – 2021",
      icon: "🎓",
      title: "Bachelor of Computer Science and Engineer",
      subtitle: "Universität",
      description:
        "Ich studierte Informatik und schloss mein Studium als Zweitbester meines Jahrgangs mit einem Notendurchschnitt von 3,29/4,00 ab."
    }
  ],
},
    projects: {
  restaurantRatings: {
    title: 'Restaurant Ratings & Reviews',
    description:
      'Eine Full-Stack-Plattform, die Restaurantbewertungen aus verschiedenen Quellen wie Zomato, TripAdvisor und Google aggregiert und Nutzern sowie Restaurantbesitzern eine einheitliche Ansicht von Bewertungen, Vergleichen und statistischen Analysen bietet.',
  },

  calculator: {
    title: 'Calculator',
    description:
      'Eine Bot-basierte Taschenrechner-Anwendung, die mathematische Operationen über Befehle ausführt und Zugriff auf die letzten 10 berechneten Vorgänge ermöglicht.',
  },

  chatOn: {
    title: 'ChatOn',
    description:
      'Eine Echtzeit-Messaging-Anwendung, die es Nutzern ermöglicht, über Textnachrichten zu kommunizieren, Fotos zu teilen, Bildfilter anzuwenden und Profileinstellungen mit sicherer Authentifizierung zu verwalten.',
  },

  classificationOfRecycling: {
    title: 'Classification of Recycling',
    description:
      'Ein KI-gestütztes Bildklassifizierungsprojekt, das Deep-Learning- und Bildverarbeitungstechniken nutzt, um recycelbare Materialien und Abfallarten zu erkennen und dabei eine Genauigkeit von bis zu 97 % auf Testdaten erreicht.',
  },
},
    restaurantRatings: {
  hero: {
    title1: 'Restaurants',
    title2: 'Reviews & Ratings',
    description:
      'Eine Analyse-Webanwendung, die Restaurantbewertungen aus mehreren Quellen zusammenführt und einheitliche Einblicke, Vergleiche und Leistungstrends durch interaktive Visualisierungen bietet.',
    button: 'Live-Demo',
    tag: 'Full-Stack-Projekt',
  },
  technologies: {
    title: 'Verwendete Technologien',
  },
  gallery: {
    title: 'Galerie',
  },
  keyFeatures: {
    title: 'Hauptfunktionen',
    items: [
      {
        title: 'Bewertungsaggregation über mehrere Plattformen',
        icon: faDatabase,
        description:
          'Sammelt und kombiniert Restaurantbewertungen aus verschiedenen Quellen in einer einheitlichen Analyseplattform.',
      },
      {
        title: 'Interaktives Analyse-Dashboard',
        icon: faChartLine,
        description:
          'Bietet Bewertungsvergleiche, Leistungsanalysen und Visualisierungen, um Restauranttrends zu verstehen.',
      },
      {
        title: 'KI-gestützte Bewertungsvorhersage & Empfehlungen',
        icon: faRobot,
        description:
          'Nutzt Machine-Learning-Modelle, um Bewertungen vorherzusagen und Restaurants basierend auf gesammelten Daten zu empfehlen.',
      },
    ],
  },
},
    calculator: {
      title: 'Rechner',
      description:
        'Eine moderne Rechneranwendung mit einer intuitiven und benutzerfreundlichen Oberfläche.',
      button: 'Live-Demo',
      viewOnGitHub: 'Auf GitHub ansehen',
      details: [
        {
          icon: 'database',
          label: 'Kategorie',
          value: 'Frontend-Entwickler',
        },
        {
          icon: 'code',
          label: 'Technologie-Stack',
          value: 'HTML, CSS, JavaScript',
        },
        {
          icon: 'clock',
          label: 'Entwicklungszeit',
          value: '2 Wochen',
        },
      ],
      aboutTheProject: {
        title: 'Über das Projekt',
        description:
          'Diese Rechneranwendung wurde entwickelt, um Nutzern eine einfache und effiziente Möglichkeit zu bieten, grundlegende Rechenoperationen durchzuführen. Sie verfügt über eine übersichtliche und intuitive Benutzeroberfläche, die eine einfache Bedienung für Menschen jeden Alters ermöglicht.',
        tools: [
          {
            label: 'Frontend',
            icon: faDesktop,
          },
          {
            label: 'Backend',
            icon: faServer,
          },
          {
            label: 'Datenbank',
            icon: faDatabase,
          },
          {
            label: 'Hosting',
            icon: faClaude,
          },
        ],
      },
      keyFeatures: {
        title: 'Hauptfunktionen',
        items: [
          'Grundlegende Rechenoperationen: +, −, ×, ÷',
          'Verlauf der Berechnungen',
          'Löschen- und Zurücksetzen-Funktion',
          'Responsives Design für alle Geräte',
          'Übersichtliches und intuitives UI/UX',
        ],
      },
      techStack: {
        title: 'Technologie-Stack',
        items: [
          {
            icon: 'database',
            color: 'text-yellow-400',
            title: 'JavaScript',
            subtitle: 'Logik & Funktionalität',
          },
          {
            icon: 'database',
            color: 'text-orange-500',
            title: 'HTML',
            subtitle: 'Struktur',
          },
          {
            icon: 'clock',
            color: 'text-blue-500',
            title: 'CSS',
            subtitle: 'Styling & Layout',
          },
        ],
      },
      whatILearned: {
        title: 'Was ich gelernt habe',
        items: [
          'Mein Verständnis von JavaScript und dessen Einsatz bei der Entwicklung interaktiver Webanwendungen vertieft.',
          'Erfahrung im Erstellen responsiver Designs gesammelt, die auf verschiedenen Geräten reibungslos funktionieren.',
          'Meine Fähigkeiten im Debugging und in der Optimierung von Code zur Verbesserung der Performance erweitert.',
          'Die Bedeutung einer guten Benutzererfahrung kennengelernt und gelernt, benutzerfreundliche sowie intuitive Oberflächen zu gestalten.',
        ],
      },
    },
    chatOn: {
  tag: 'Android-App',
  title1: 'Chat',
  title2: 'On',
  subTitle: 'Echtzeit-Messaging-Plattform',

  description:
    'ChatOn ist eine moderne Android-Messaging-App, mit der Nutzer über Echtzeit-Textnachrichten und das Teilen von Fotos sofort miteinander kommunizieren können. Die Anwendung bietet eine sichere Authentifizierung, anpassbare Benutzerprofile, Bildfreigabe sowie eine benutzerfreundliche Oberfläche, die auf Firebase-Diensten basiert.',

  button: 'Demo',
  viewOnGitHub: 'Auf GitHub ansehen',

  techStack: [
    'Android',
    'Android Studio',
    'Java',
    'Firebase',
    'Firebase Authentication',
    'Firebase Realtime Database',
    'Firebase Storage',
  ],

  features: {
    title: 'Hauptfunktionen',
    items: [
      {
        icon: faLock,
        title: 'Benutzerauthentifizierung',
        description:
          'Sichere Registrierung und Anmeldung mit Firebase Authentication sowie dauerhafte Benutzersitzungen.',
      },
      {
        icon: faMessage,
        title: 'Echtzeit-Messaging',
        description:
          'Sofortiger Nachrichtenaustausch mit Freunden durch Echtzeit-Synchronisierung über Firebase Realtime Database.',
      },
      {
        icon: faImage,
        title: 'Bilder teilen',
        description:
          'Fotos direkt in Unterhaltungen hochladen und über Firebase Storage mit anderen teilen.',
      },
      {
        icon: faUsers,
        title: 'Freundesverwaltung',
        description:
          'Nach Benutzern suchen, Freunde hinzufügen und private oder Gruppenunterhaltungen starten.',
      },
    ],
  },

  workflow: [
    {
      title: 'Anmelden / Registrieren',
      description:
        'Ein Konto erstellen oder sich sicher mit Firebase Authentication anmelden.',
      image: chatOnSS1,
    },
    {
      title: 'Profileinstellungen',
      description:
        'Profilinformationen anpassen und das Benutzerkonto verwalten.',
      image: chatOnSS2,
    },
    {
      title: 'Freunde finden',
      description:
        'Nach Benutzern suchen und sie zur Freundesliste hinzufügen.',
      image: chatOnSS3,
    },
    {
      title: 'Privater Chat',
      description:
        'Private Unterhaltungen mit Echtzeit-Synchronisierung starten.',
      image: chatOnSS4,
    },
    {
      title: 'Gruppenchats',
      description:
        'Gruppen erstellen und gleichzeitig mit mehreren Freunden kommunizieren.',
      image: chatOnSS5,
    },
  ],

  challenges: [
    'Synchronisierung von Nachrichten in Echtzeit zwischen mehreren Benutzern.',
    'Entwicklung einer skalierbaren Datenstruktur für Firebase Realtime Database.',
    'Effizientes Hochladen und Anzeigen von Bildern.',
    'Verwaltung der Benutzerauthentifizierung und dauerhafter Sitzungen.',
    'Sicherstellung einer flüssigen Benutzererfahrung auf verschiedenen Android-Geräten.',
  ],

  learned: [
    'Implementierung einer sicheren Benutzerauthentifizierung mit Firebase Authentication.',
    'Entwicklung von Echtzeit-Funktionen mit Firebase Realtime Database.',
    'Hochladen und Abrufen von Mediendateien mit Firebase Storage.',
    'Erstellung dynamischer Benutzeroberflächen mit RecyclerView.',
    'Verwaltung des Android-Lebenszyklus sowie von Activities und Fragments.',
  ],
},
    classificationOfRecycling: {
    tag: "Forschungsprojekt",
    title1: "Classification of",
    title2: "Recycling",
    subTitle: "Mit Deep Learning",
    description: "Ein Forschungsprojekt zur Klassifizierung von Abfallmaterialien mithilfe von Deep-Learning-Techniken.",
    techStack: ["Deep Learning", "Bildverarbeitung", "Python", "TensorFlow", "Keras"],
    buttonViewOnGitHub: "Auf GitHub ansehen",
    buttonResearch: "Forschung",
    summaryPart: [
        {
            icon: faImage,
            value: '2527',
            label: 'Bilder gesamt',
            color: 'text-green-500',
        },
        {
            icon: faBorderAll,
            value: '6',
            label: 'Klassen',
            color: 'text-green-500',
        },
        {
            icon: faShareNodes,
            value: '3',
            label: 'CNN-Modelle',
            color: 'text-green-500',
        },
        {
            icon: faArrowTrendUp,
            value: '97%',
            label: 'Beste Genauigkeit',
            color: 'text-green-500',
        },
        {
            icon: faMicrochip,
            value: '100',
            label: 'Epochen',
            color: 'text-green-500',
        },
        {
            icon: faComputer,
            value: 'GPU',
            label: 'Training',
            color: 'text-green-500',
        },
    ],
    projectDetails: [
        {
            icon: faCircleQuestion,
            title: 'Problem',
            description:
                'Die herkömmliche Mülltrennung erfolgt manuell, ist kostspielig und fehleranfällig, was zu ineffizienten Recyclingprozessen führt.',
        },
        {
            icon: faBullseye,
            title: 'Ziel',
            description:
                'Entwicklung eines präzisen und effizienten Deep-Learning-Modells zur Klassifizierung von sechs Arten recycelbarer Materialien.',
        },
        {
            icon: faLightbulb,
            title: 'Forschungsfrage',
            description:
                'Welche vortrainierte CNN-Architektur bietet das beste Verhältnis zwischen Genauigkeit und Rechenaufwand?',
        },
    ],
    datasetOverview: {
        title: "Datensatzübersicht",
        items: [
            '2537 Bilder insgesamt',
            '6 Klassen recycelbarer Materialien',
            '70 % Training / 13 % Validierung / 17 % Test',
            'Bilder aus realen Anwendungsszenarien',
            'Klassenungleichgewicht vorhanden (Trash hat weniger Beispiele)',
        ],
        totalImagePerClass: "Gesamtzahl der Bilder pro Klasse",
        chartData: [
            { name: 'trash', value: 137 },
            { name: 'glass', value: 501 },
            { name: 'plastic', value: 482 },
            { name: 'cardboard', value: 403 },
            { name: 'paper', value: 594 },
            { name: 'metal', value: 410 },
        ]
    },
    methodology: {
        title: "Methodik",
        items: [
            { icon: faFolderOpen, label: 'Datensatz-\nerfassung' },
            { icon: faImage, label: 'Bild-\nvorverarbeitung' },
            { icon: faLaptopCode, label: 'Modell-\ntraining' },
            { icon: faChartLine, label: 'Evaluierung' },
        ],
        summary: "Die Methodik umfasst die Erfassung eines Datensatzes mit recycelbaren Materialien, die Vorverarbeitung der Bilder, die Aufteilung in Trainings-, Validierungs- und Testdaten, den Einsatz von Transfer Learning mit vortrainierten CNN-Architekturen, das Training der Modelle sowie deren Evaluierung, um das leistungsstärkste Modell für die Klassifizierung zu bestimmen."
    },
    modelsCompared: {
        title: "Verglichene Modelle",
        items: [
            {
                name: 'VGG16',
                subtitle: 'Klassische CNN-Architektur',
                color: 'purple',
                icon: faLayerGroup,
                accuracy: '75%',
                points: [
                    'Tiefe und einfache Architektur',
                    'Mehr Parameter',
                    'Höherer Rechenaufwand',
                ],
            },
            {
                name: 'MobileNet',
                subtitle: 'Leichtgewichtiges CNN',
                color: 'green',
                icon: faCube,
                accuracy: '97%',
                featured: true,
                points: [
                    'Für hohe Effizienz entwickelt',
                    'Weniger Parameter',
                    'Schnelleres Training und Inferenz',
                ],
            },
            {
                name: 'ResNet50',
                subtitle: 'Residual-Learning-Architektur',
                color: 'blue',
                icon: faCube,
                accuracy: '96%',
                points: [
                    'Sehr tiefes Netzwerk mit Skip Connections',
                    'Hohe Genauigkeit und Stabilität',
                    'Gute Generalisierungsfähigkeit',
                ],
            },
        ]
    },
    trainingResults: {
        title: "Trainingsergebnisse (Testgenauigkeit)",
        chartData: [
            { epoch: '20 Epochen', ResNet50: 0.90, MobileNet: 0.89, VGG16: 0.75 },
            { epoch: '40 Epochen', ResNet50: 0.91, MobileNet: 0.90, VGG16: 0.69 },
            { epoch: '60 Epochen', ResNet50: 0.88, MobileNet: 0.95, VGG16: 0.70 },
            { epoch: '100 Epochen', ResNet50: 0.96, MobileNet: 0.97, VGG16: 0.69 },
        ]
    },
    accuracyComparisonTable: {
        title: "Vergleich der Genauigkeit",
        bestAccuracy: "Beste Genauigkeit",
        mobileNet: {
            title: 'MobileNet',
            accuracy: '97%',
        },
        resNet50: {
            title: 'ResNet50',
            accuracy: '96%',
        },
        vgg16: {
            title: 'VGG16',
            accuracy: '75%',
        }
    },
    predictions: {
        title: "Vorhersagen",
        items: [
            {
                image: papier,
                actual: 'Papier',
                predicted: 'Papier',
                confidence: '98.6%',
            },
            {
                image: glass,
                actual: 'Glas',
                predicted: 'Glas',
                confidence: '97.3%',
            },
            {
                image: plastic,
                actual: 'Kunststoff',
                predicted: 'Kunststoff',
                confidence: '98.4%',
            },
            {
                image: cardboard,
                actual: 'Karton',
                predicted: 'Karton',
                confidence: '97.7%',
            },
        ]
    }
}
  }