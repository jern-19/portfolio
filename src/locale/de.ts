import { faBorderAll, faChartLine, faCube, faFolderOpen, faImage, faLaptopCode, faLayerGroup, faShareNodes, faTableCells } from "@fortawesome/free-solid-svg-icons";

export const de = {
    common: {
        admin: {
name: "Jern",
        },
      technologies: {
        react: 'React',
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
    },
    home: {
      title: 'Full-Stack-Softwareentwickler',
      description:
        'Ich entwickle moderne und skalierbare Software mit intuitiven Benutzererlebnissen und zuverlässigen Backend-Systemen. Mein Fokus liegt auf sauberem Code und wartbaren Lösungen.',
      joined: 'Beigetreten 2016',
      location: 'München, Deutschland',
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
  'restaurant-ratings': {
    title: 'Restaurant Ratings & Reviews',
    description:
      'Eine Full-Stack-Plattform, die Restaurantbewertungen aus verschiedenen Quellen wie Zomato, TripAdvisor und Google aggregiert und Nutzern sowie Restaurantbesitzern eine einheitliche Ansicht von Bewertungen, Vergleichen und statistischen Analysen bietet.',
  },

  calculator: {
    title: 'Calculator',
    description:
      'Eine Bot-basierte Taschenrechner-Anwendung, die mathematische Operationen über Befehle ausführt und Zugriff auf die letzten 10 berechneten Vorgänge ermöglicht.',
  },

  'chat-on': {
    title: 'ChatOn',
    description:
      'Eine Echtzeit-Messaging-Anwendung, die es Nutzern ermöglicht, über Textnachrichten zu kommunizieren, Fotos zu teilen, Bildfilter anzuwenden und Profileinstellungen mit sicherer Authentifizierung zu verwalten.',
  },

  'classification-of-recycling': {
    title: 'Classification of Recycling',
    description:
      'Ein KI-gestütztes Bildklassifizierungsprojekt, das Deep-Learning- und Bildverarbeitungstechniken nutzt, um recycelbare Materialien und Abfallarten zu erkennen und dabei eine Genauigkeit von bis zu 97 % auf Testdaten erreicht.',
  },
},
    restaurantRatings: {
      hero: {
        title1: 'Restaurants',
        title2: 'Rezensionen und Bewertungen',
        description:
          'Eine Webanwendung, mit der Benutzer Restaurants bewerten und Rezensionen schreiben können.',
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
            title: 'Restaurants entdecken',
            description:
              'Entdecke eine große Auswahl an Restaurants, sieh dir Bewertungen und Rezensionen an und finde das perfekte kulinarische Erlebnis.',
          },
          {
            title: 'Bewerten & Rezensionen schreiben',
            description:
              'Teile deine Restaurantbesuche, indem du Restaurants bewertest und Rezensionen schreibst, um anderen bei ihrer Entscheidung zu helfen.',
          },
          {
            title: 'Analyse-Dashboard',
            description:
              'Erhalte Einblicke in die Leistung von Restaurants mit einem Analyse-Dashboard, das wertvolle Daten und Trends bereitstellt.',
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
            icon: 'desktop',
          },
          {
            label: 'Backend',
            icon: 'server',
          },
          {
            label: 'Datenbank',
            icon: 'database',
          },
          {
            label: 'Hosting',
            icon: 'cloud',
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
      tag: 'Android App',
      title1: 'Chat',
      title2: 'On',
      subTitle:
        'Eine Echtzeit-Chat-Anwendung mit Benutzerauthentifizierung und Sofortnachrichten.',
      description:
        'Eine Echtzeit-Chatanwendung mit Benutzerauthentifizierung und Sofortnachrichten.',
      button: 'Live-Demo',
      viewOnGitHub: 'Auf GitHub ansehen',
      features: {
        title: 'Hauptfunktionen',
        items: [
          {
            icon: 'checked',
            title: 'Benutzerauthentifizierung',
            description:
              'Sichere Benutzerauthentifizierung mit E-Mail und Passwort, sodass Nutzer Konten erstellen und sich in der Chatanwendung anmelden können.',
          },
          {
            icon: 'checked',
            title: 'Echtzeit-Nachrichten',
            description:
              'Sicheres Anmelde- und Registrierungssystem mit Firebase sowie Echtzeit-Synchronisierung.',
          },
          {
            icon: 'checked',
            title: 'Bilder teilen',
            description:
              'Bilder sicher hochladen und direkt mit anderen Nutzern im Chat teilen.',
          },
          {
            icon: 'checked',
            title: 'Freundesverwaltung',
            description:
              'Freunde hinzufügen, verwalten und private Unterhaltungen mit ihnen starten.',
          },
        ],
      },
      workflow: [
        {
          title: 'Konto erstellen',
          description: 'Erstelle sicher ein Konto mit Firebase Authentication.',
          image: 'chatOnSS1',
          icon: 'userPlus',
        },
        {
          title: 'Anmelden',
          description:
            'Authentifiziere dich und greife sofort auf deine Unterhaltungen zu.',
          image: 'chatOnSS2',
          icon: 'lock',
        },
        {
          title: 'Freunde finden',
          description:
            'Suche nach Nutzern und verbinde dich mit neuen Freunden.',
          image: 'chatOnSS3',
          icon: 'magnifyingGlass',
        },
        {
          title: 'Chat öffnen',
          description: 'Starte private Unterhaltungen in Echtzeit.',
          image: 'chatOnSS4',
          icon: 'comments',
        },
        {
          title: 'Nachricht senden',
          description:
            'Tausche Textnachrichten sofort mit anderen Nutzern aus.',
          image: 'chatOnSS5',
          icon: 'commentDots',
        },
      ],
      challenges: [
        'Synchronisierung von Nachrichten in Echtzeit über mehrere Geräte hinweg.',
        'Entwicklung einer einfachen und skalierbaren Firebase-Datenstruktur.',
        'Effizientes und sicheres Verwalten von Bild-Uploads.',
        'Verwaltung der Benutzerauthentifizierung und Sitzungsverwaltung.',
        'Sicherstellung einer flüssigen UI/UX auf verschiedenen Android-Geräten.',
      ],
      learned: [
        'Firebase Authentication und Benutzerverwaltung.',
        'Realtime Database und Synchronisierung von Live-Daten.',
        'Hochladen und Abrufen von Bildern mit Firebase Storage.',
        'RecyclerView und moderne Android-UI-Muster.',
        'Android-App-Lebenszyklus und Activity-Verwaltung.',
      ],
    },
    classificationOfRecycling: {
  tag: "Forschungsprojekt",
  title1: "Klassifizierung von",
  title2: "Recyclingmaterialien",
  subTitle: "Mithilfe von Deep Learning",
  description: "Ein Forschungsprojekt zur Klassifizierung von Abfallmaterialien mithilfe von Deep-Learning-Techniken.",
  techStack: ["Computer Vision", "Deep Learning", "Python", "TensorFlow", "Keras"],
  buttonViewOnGitHub: "Auf GitHub ansehen",
  buttonDemo: "Demo",
  summaryPart: [
    {
      icon: faImage,
      value: "2527",
      label: "Bilder gesamt",
      color: "text-green-500",
    },
    {
      icon: faBorderAll,
      value: "6",
      label: "Klassen",
      color: "text-green-500",
    },
    {
      icon: faShareNodes,
      value: "3",
      label: "CNN-Modelle",
      color: "text-green-500",
    },
    {
      icon: "faArrowTrendUp",
      value: "97%",
      label: "Beste Genauigkeit",
      color: "text-green-500",
    },
    {
      icon: "faMicrochip",
      value: "TensorFlow",
      label: "Framework",
      color: "text-orange-500",
    },
    {
      icon: "faComputer",
      value: "GPU",
      label: "Training",
      color: "text-green-500",
    },
  ],
  projectDetails: [
    {
      icon: "faCircleQuestion",
      title: "Problem",
      description:
        "Die herkömmliche Mülltrennung erfolgt manuell, ist kostenintensiv und fehleranfällig, was zu ineffizienten Recyclingprozessen führt.",
    },
    {
      icon: "faBullseye",
      title: "Ziel",
      description:
        "Entwicklung eines präzisen und effizienten Deep-Learning-Modells zur Klassifizierung von sechs Arten recycelbarer Materialien.",
    },
    {
      icon: "faLightbulb",
      title: "Forschungsfrage",
      description:
        "Welche vortrainierte CNN-Architektur bietet das beste Verhältnis zwischen Genauigkeit und Rechenaufwand?",
    },
  ],
  datasetOverview: {
    title: "Datensatzübersicht",
    items: [
      "2537 Bilder insgesamt",
      "6 Klassen recycelbarer Materialien",
      "70 % Training / 13 % Validierung / 17 % Testdaten",
      "Bilder aus realen Szenarien gesammelt",
      "Klassenungleichgewicht vorhanden (Trash besitzt weniger Beispiele)",
    ],
    totalImagePerClass: "Gesamtzahl der Bilder pro Klasse",
    chartData: [
      { name: "trash", value: 140 },
      { name: "glass", value: 500 },
      { name: "plastic", value: 480 },
      { name: "cardboard", value: 400 },
      { name: "paper", value: 560 },
      { name: "metal", value: 400 },
    ],
  },
  methodology: {
    title: "Methodik",
    items: [
      { icon: faFolderOpen, label: "Datensatz-\nerfassung" },
      { icon: faImage, label: "Bild-\nvorverarbeitung" },
      { icon: faTableCells, label: "Train/Val/Test-\nAufteilung (70/13/17)" },
      { icon: faLayerGroup, label: "Transfer\nLearning" },
      { icon: faLaptopCode, label: "Modell-\ntraining" },
      { icon: faChartLine, label: "Auswertung" },
    ],
    summary:
      "Die Methodik umfasst die Sammlung eines Datensatzes mit recycelbaren Materialien, die Bildvorverarbeitung, die Aufteilung in Trainings-, Validierungs- und Testdaten, den Einsatz von Transfer Learning mit vortrainierten CNN-Architekturen, das Training der Modelle sowie deren Auswertung, um das leistungsfähigste Modell zu bestimmen.",
  },
  modelsCompared: {
    title: "Verglichene Modelle",
    items: [
      {
        name: "VGG16",
        subtitle: "Klassische CNN-Architektur",
        color: "purple",
        icon: faLayerGroup,
        accuracy: "75%",
        points: [
          "Tiefe und einfache Architektur",
          "Mehr Parameter",
          "Höherer Rechenaufwand",
        ],
      },
      {
        name: "MobileNet",
        subtitle: "Leichtgewichtiges CNN",
        color: "green",
        icon: faCube,
        accuracy: "97%",
        featured: true,
        points: [
          "Für hohe Effizienz entwickelt",
          "Weniger Parameter",
          "Schnelleres Training und schnellere Inferenz",
        ],
      },
      {
        name: "ResNet50",
        subtitle: "Residual-Learning-Architektur",
        color: "blue",
        icon: faCube,
        accuracy: "96%",
        points: [
          "Sehr tiefes Netzwerk mit Skip-Connections",
          "Hohe Genauigkeit und Stabilität",
          "Gute Generalisierungsfähigkeit",
        ],
      },
    ],
  },
  trainingResults: {
    title: "Trainingsergebnisse (Testgenauigkeit)",
    chartData: [
      { epoch: "20 Epochen", ResNet50: 0.89, MobileNet: 0.83, VGG16: 0.63 },
      { epoch: "40 Epochen", ResNet50: 0.89, MobileNet: 0.84, VGG16: 0.56 },
      { epoch: "60 Epochen", ResNet50: 0.83, MobileNet: 0.95, VGG16: 0.57 },
      { epoch: "100 Epochen", ResNet50: 0.93, MobileNet: 0.97, VGG16: 0.55 },
    ],
  },
  accuracyComparisonTable: {
    title: "Vergleich der Modellgenauigkeit",
    bestAccuracy: "Beste Genauigkeit",
    mobileNet: {
      title: "MobileNet",
      accuracy: "97%",
    },
    resNet50: {
      title: "ResNet50",
      accuracy: "96%",
    },
    vgg16: {
      title: "VGG16",
      accuracy: "75%",
    },
  },
  predictions: {
    title: "Vorhersagen",
    items: [
      {
        image: "/images/paper.png",
        actual: "Papier",
        predicted: "Papier",
        confidence: "98.6%",
      },
      {
        image: "/images/glass.png",
        actual: "Glas",
        predicted: "Glas",
        confidence: "97.3%",
      },
      {
        image: "/images/plastic.png",
        actual: "Kunststoff",
        predicted: "Kunststoff",
        confidence: "98.4%",
      },
      {
        image: "/images/cardboard.png",
        actual: "Karton",
        predicted: "Karton",
        confidence: "97.7%",
      },
      {
        image: "/images/metal.png",
        actual: "Metall",
        predicted: "Metall",
        confidence: "98.2%",
      },
      {
        image: "/images/trash.png",
        actual: "Restmüll",
        predicted: "Restmüll",
        confidence: "94.7%",
      },
    ],
  },
}
  }