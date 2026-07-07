export const translations = {
  en: {
    navbar: {
      me: "Me",
      experience: "Experience",
      projects: "Projects",
    },
    home: {
      title: "Full Stack Software Engineer 💼",
      description: "Building modern web applications and transforming legacy systems into scalable solutions.",
      joined: "Joined 2016",
      location: "Munich, Germany",
    },
    me: {
      cards:[
    { 
        title: "Hi!",
        text: "EN"
      },
      {
        title: "My Journey",
        text: "EN"
      }
      ] ,
    },
    experience: { items:[ { year: "Present", icon: "🚀", title: "Senior Full Stack Engineer", subtitle: "Current Position", description: "Building scalable web applications, designing modern user experiences, and delivering high-quality software solutions.", }, { year: "2023", icon: "💼", title: "Software Engineer", subtitle: "Professional Experience", description: "Developed production-ready applications using React, .NET, and cloud technologies while collaborating in agile teams.", }, { year: "2021", icon: "🖥️", title: "First Full-Time Job", subtitle: "Software Engineer", description: "Started my career as a Full Stack Developer, working on enterprise software and learning software engineering best practices.", }, { year: "2020", icon: "🤝", title: "Internship", subtitle: "First Industry Experience", description: "Worked alongside experienced developers, contributing features and gaining hands-on experience with real-world software development.", }, { year: "2020", icon: "🎓", title: "Bachelor of Computer Science", subtitle: "University", description: "Completed my degree while building personal projects and strengthening my software engineering fundamentals.", }, ] },
    
    projects: {
  "restaurant-ratings": {
    title: "Restaurant Reviews & Rating",
    description:
      "Discover restaurants, compare ratings and share reviews with a modern full-stack platform."
  },

  calculator: {
    title: "Calculator",
    description:
      "A modern calculator application with..."
  },

  "chat-on": {
    title: "ChatOn",
    description:
      "A real-time chat application..."
  },

  "classification-of-recycling": {
    title: "Classification of Recycling",
    description:
      "An AI-powered application for classifying waste materials to facilitate recycling."
  }
},
restaurantRatings: {
      hero: {
        title1: "Restaurants",
        title2: "Reviews & Ratings",
        description: "A web application that allows users to rate and review restaurants.",
        button: "Live Demo",
        tag: "Full Stack Project",
      },
      technologies: {
        title: "Technologies Used",
      },
      gallery: {
        title: "Gallery",
      },
      keyFeatures: {
        title: "Key Features",
        items: [
        {
          title:"Explore Restaurants",
          description:"Discover a wide range of restaurants, view their ratings and reviews, and find the perfect dining experience.",
        },
        {
          title:"Rate & Review",
          description:"Share your dining experiences by rating restaurants and writing reviews to help others make informed decisions.",
        },
        {
          title:"Analytics Dashboard",
          description:"Gain insights into restaurant performance with an analytics dashboard that provides valuable data and trends.",
        },
      ],
      }
      
    },
    common: {
      technologies: {
        react: "React",
        python: "Python",
        firebase: "Firebase",
        javascript: "JavaScript",
        android: "Android",
        java: "Java",
        firestore: "Firestore",
        authentication: "Authentication",
      },
      github: "GitHub",
    },
    calculator: {
      title: "Calculator",
      description: "A modern calculator application with an intuitive and user-friendly interface.",
      button: "Live Demo",
      viewOnGitHub: "View on GitHub",
      details: [
        {
          icon: "database",
          label: "Category",
          value: "Frontend Developer",
        },
        {
          icon: "code",
          label: "Tech Stack",
          value: "HTML, CSS, JavaScript",
        },
        {
          icon: "clock",
          label: "Time Spent",
          value: "2 weeks",
        },
      ],
      aboutTheProject: {
        title: "About the Project",
        description:
          "This calculator application is designed to provide users with a seamless and efficient way to perform basic arithmetic operations. It features a clean and intuitive interface, making it easy for users of all ages to use.",
        "tools": [
    {
      "label": "Frontend",
      "icon": "desktop"
    },
    {
      "label": "Backend",
      "icon": "server"
    },
    {
      "label": "Database",
      "icon": "database"
    },
    {
      "label": "Hosting",
      "icon": "cloud"
    }
  ]
      },
      keyFeatures: {
        title: "Key Features",
        items: [
          "Basic operations: +, −, ×, ÷",
          "History of calculations",
          "Delete & clear functionality",
          "Responsive for all devices",
          "Clean and intuitive UI/UX",
        ],
      },
      techStack: {
        title: "Tech Stack",
        items: [
          {
            icon: "brands",
            color: "text-yellow-400",
            title: "JavaScript",
            subtitle: "Logic & Functionality",
          },
          {
            icon: "fa-brands fa-html5",
            color: "text-orange-500",
            title: "HTML",
            subtitle: "Structure",
          },
          {
            icon: "fa-brands fa-css3-alt",
            color: "text-blue-500",
            title: "CSS",
            subtitle: "Styling & Layout",
          },
        ],
      },
      whatILearned: {
        title: "What I Learned",
        items: [
          "Enhanced my understanding of JavaScript and its application in building interactive web applications.",
          "Gained experience in creating responsive designs that work seamlessly across different devices.",
          "Improved my skills in debugging and optimizing code for better performance.",
          "Learned the importance of user experience and how to design interfaces that are intuitive and user-friendly.",
        ],
      },
      
    },
    chatOn: {
      tag: "Android App",
      title1: "Chat",
      title2: "On",
      subTitle: "A real-time chat application with user authentication and instant messaging.",
      description: "A real-time chat application with user authentication and instant messaging.",
      button: "Live Demo",
      viewOnGitHub: "View on GitHub",
      features: {
        title: "Key Features",
        items: [
          {
            icon:"checked",
            title:"User Authentication",
            description:"Secure user authentication with email and password, allowing users to create accounts and log in to the chat application.",
          },
          {
            icon:"checked",
            title:"Realtime Messaging",
            description:"Secure login and registration system with Firebase and realtime synchronization.",
          },
          {
            icon:"checked",
            title:"Image Sharing",
            description:"Secure login and registration system with Firebase and realtime synchronization.",
          },
          {
            icon:"checked",
            title:"Friend Management",
            description:"Secure login and registration system with Firebase and realtime synchronization.",
          }
        ]
      },
      workflow: [
        {
          title: "Create Account",
          description:
            "Create an account securely using Firebase Authentication.",
          image: "chatOnSS1",
          icon: "userPlus",
        },
         {
    title: "Login",
    description:
      "Authenticate and access your conversations instantly.",
    image: "chatOnSS2",
    icon: "lock",
  },
  {
    title: "Find Friends",
    description:
      "Search users and connect with new friends.",
    image: "chatOnSS3",
    icon: "magnifyingGlass",
  },
  {
    title: "Open Chat",
    description:
      "Start private conversations in real time.",
    image: "chatOnSS4",
    icon: "comments",
  },
  {
    title: "Send Message",
    description:
      "Exchange text messages instantly.",
    image: "chatOnSS5",
    icon: "commentDots",
  },
      ],
      challenges: [
        "Synchronizing messages in real time across multiple devices.",
  "Designing a simple and scalable Firebase data structure.",
  "Handling image uploads efficiently and securely.",
  "Managing user authentication and session persistence.",
  "Ensuring smooth UI/UX on various Android devices.",
      ],
      learned: [
  "Firebase Authentication and user management.",
  "Realtime Database and live data synchronization.",
  "Image upload and retrieval using Firebase Storage.",
  "RecyclerView and modern Android UI patterns.",
  "Android app lifecycle and activity management.",
]
    },
  },
  de: {
     common: {
      technologies: {
        react: "React",
        python: "Python",
        firebase: "Firebase",
        javascript: "JavaScript",
         android: "Android",
        java: "Java",
        firestore: "Firestore",
        authentication: "Authentication",
      },
      github: "GitHub",
    },
    navbar: {
      me: "Über mich",
      experience: "Erfahrung",
      projects: "Projekte",
    },
    home: {
      title: "Full Stack Software Engineer 💼",
      description: "Moderne Webanwendungen entwickeln und Altsysteme in skalierbare Lösungen transformieren.",
      joined: "Joined 2016",
      location: "München, Deutschland",
    },
    me: {
      cards:[
    { 
        title: "Hi!",
        text: "DE.",
      },
      {
        title: "My Journey",
        text: "DE."
      }
      ] ,
    },
    experience: {
  items: [
    {
      year: "Heute",
      icon: "🚀",
      title: "Senior Full-Stack-Entwickler",
      subtitle: "Aktuelle Position",
      description:
        "Entwicklung skalierbarer Webanwendungen, Gestaltung moderner Benutzererlebnisse und Bereitstellung hochwertiger Softwarelösungen.",
    },
    {
      year: "2023",
      icon: "💼",
      title: "Softwareentwickler",
      subtitle: "Berufserfahrung",
      description:
        "Entwicklung produktionsreifer Anwendungen mit React, .NET und Cloud-Technologien sowie Zusammenarbeit in agilen Teams.",
    },
    {
      year: "2021",
      icon: "🖥️",
      title: "Erste Vollzeitstelle",
      subtitle: "Softwareentwickler",
      description:
        "Beginn meiner Karriere als Full-Stack-Entwickler mit der Arbeit an Unternehmenssoftware und dem Erlernen bewährter Methoden der Softwareentwicklung.",
    },
    {
      year: "2020",
      icon: "🤝",
      title: "Praktikum",
      subtitle: "Erste Berufserfahrung",
      description:
        "Zusammenarbeit mit erfahrenen Entwicklern, Mitwirkung an neuen Funktionen und praktische Erfahrungen in der realen Softwareentwicklung gesammelt.",
    },
    {
      year: "2020",
      icon: "🎓",
      title: "Bachelor in Informatik",
      subtitle: "Universität",
      description:
        "Abschluss meines Studiums, während ich persönliche Projekte entwickelte und meine Grundlagen der Softwareentwicklung weiter vertiefte.",
    },
  ],
},
projects: {
  "restaurant-ratings": {
    title: "Restaurantbewertungen",
    description:
      "Entdecke Restaurants, vergleiche Bewertungen und teile deine eigenen Erfahrungen auf einer modernen Full-Stack-Plattform."
  },

  calculator: {
    title: "Taschenrechner",
    description:
      "Eine moderne Taschenrechner-Anwendung mit einer intuitiven und benutzerfreundlichen Oberfläche."
  },

  "chat-on": {
    title: "ChatOn",
    description:
      "Eine Echtzeit-Chat-Anwendung mit Benutzerauthentifizierung und sofortiger Nachrichtenübertragung."
  },

  "classification-of-recycling": {
    title: "Müllklassifizierung",
    description:
      "Eine KI-gestützte Anwendung zur Klassifizierung von Abfällen, um das Recycling einfacher und effizienter zu gestalten."
  }
},
    restaurantRatings: {
  hero: {
    title1: "Restaurants",
    title2: "Rezensionen und Bewertungen",
    description: "Eine Webanwendung, mit der Benutzer Restaurants bewerten und Rezensionen schreiben können.",
    button: "Live-Demo",
    tag: "Full-Stack-Projekt",
  },
  technologies: {
    title: "Verwendete Technologien",
  },
  gallery: {
    title: "Galerie",
  },
  keyFeatures: {
    title: "Hauptfunktionen",
    items:
    [
    {
      title: "Restaurants entdecken",
      description:
        "Entdecke eine große Auswahl an Restaurants, sieh dir Bewertungen und Rezensionen an und finde das perfekte kulinarische Erlebnis.",
    },
    {
      title: "Bewerten & Rezensionen schreiben",
      description:
        "Teile deine Restaurantbesuche, indem du Restaurants bewertest und Rezensionen schreibst, um anderen bei ihrer Entscheidung zu helfen.",
    },
    {
      title: "Analyse-Dashboard",
      description:
        "Erhalte Einblicke in die Leistung von Restaurants mit einem Analyse-Dashboard, das wertvolle Daten und Trends bereitstellt.",
    },
  ],
  } 
},
calculator: {
  title: "Rechner",
  description: "Eine moderne Rechneranwendung mit einer intuitiven und benutzerfreundlichen Oberfläche.",
  button: "Live-Demo",
  viewOnGitHub: "Auf GitHub ansehen",
  details: [
    {
      icon: "database",
      label: "Kategorie",
      value: "Frontend-Entwickler",
    },
    {
      icon: "code",
      label: "Technologie-Stack",
      value: "HTML, CSS, JavaScript",
    },
    {
      icon: "clock",
      label: "Entwicklungszeit",
      value: "2 Wochen",
    },
  ],
  aboutTheProject: {
    title: "Über das Projekt",
    description:
      "Diese Rechneranwendung wurde entwickelt, um Nutzern eine einfache und effiziente Möglichkeit zu bieten, grundlegende Rechenoperationen durchzuführen. Sie verfügt über eine übersichtliche und intuitive Benutzeroberfläche, die eine einfache Bedienung für Menschen jeden Alters ermöglicht.",
    "tools": [
    {
      "label": "Frontend",
      "icon": "desktop"
    },
    {
      "label": "Backend",
      "icon": "server"
    },
    {
      "label": "Datenbank",
      "icon": "database"
    },
    {
      "label": "Hosting",
      "icon": "cloud"
    }
  ]
  },
  keyFeatures: {
    title: "Hauptfunktionen",
    items: [
      "Grundlegende Rechenoperationen: +, −, ×, ÷",
      "Verlauf der Berechnungen",
      "Löschen- und Zurücksetzen-Funktion",
      "Responsives Design für alle Geräte",
      "Übersichtliches und intuitives UI/UX",
    ],
  },
  techStack: {
    title: "Technologie-Stack",
    items: [
      {
        icon: "database",
        color: "text-yellow-400",
        title: "JavaScript",
        subtitle: "Logik & Funktionalität",
      },
      {
        icon: "database",
        color: "text-orange-500",
        title: "HTML",
        subtitle: "Struktur",
      },
      {
        icon: "clock",
        color: "text-blue-500",
        title: "CSS",
        subtitle: "Styling & Layout",
      },
    ],
  },
  whatILearned: {
    title: "Was ich gelernt habe",
    items: [
      "Mein Verständnis von JavaScript und dessen Einsatz bei der Entwicklung interaktiver Webanwendungen vertieft.",
      "Erfahrung im Erstellen responsiver Designs gesammelt, die auf verschiedenen Geräten reibungslos funktionieren.",
      "Meine Fähigkeiten im Debugging und in der Optimierung von Code zur Verbesserung der Performance erweitert.",
      "Die Bedeutung einer guten Benutzererfahrung kennengelernt und gelernt, benutzerfreundliche sowie intuitive Oberflächen zu gestalten.",
    ],
  },
},
chatOn: {
  tag: "Android App",
  title1: "Chat",
  title2: "On",
  subTitle: "Eine Echtzeit-Chat-Anwendung mit Benutzerauthentifizierung und Sofortnachrichten.",
  description: "Eine Echtzeit-Chatanwendung mit Benutzerauthentifizierung und Sofortnachrichten.",
  button: "Live-Demo",
  viewOnGitHub: "Auf GitHub ansehen",
  features: {
    title: "Hauptfunktionen",
    items: [
      {
        icon: "checked",
        title: "Benutzerauthentifizierung",
        description:
          "Sichere Benutzerauthentifizierung mit E-Mail und Passwort, sodass Nutzer Konten erstellen und sich in der Chatanwendung anmelden können.",
      },
      {
        icon: "checked",
        title: "Echtzeit-Nachrichten",
        description:
          "Sicheres Anmelde- und Registrierungssystem mit Firebase sowie Echtzeit-Synchronisierung.",
      },
      {
        icon: "checked",
        title: "Bilder teilen",
        description:
          "Bilder sicher hochladen und direkt mit anderen Nutzern im Chat teilen.",
      },
      {
        icon: "checked",
        title: "Freundesverwaltung",
        description:
          "Freunde hinzufügen, verwalten und private Unterhaltungen mit ihnen starten.",
      },
    ],
  },
  workflow: [
    {
      title: "Konto erstellen",
      description:
        "Erstelle sicher ein Konto mit Firebase Authentication.",
      image: "chatOnSS1",
      icon: "userPlus",
    },
    {
      title: "Anmelden",
      description:
        "Authentifiziere dich und greife sofort auf deine Unterhaltungen zu.",
      image: "chatOnSS2",
      icon: "lock",
    },
    {
      title: "Freunde finden",
      description:
        "Suche nach Nutzern und verbinde dich mit neuen Freunden.",
      image: "chatOnSS3",
      icon: "magnifyingGlass",
    },
    {
      title: "Chat öffnen",
      description:
        "Starte private Unterhaltungen in Echtzeit.",
      image: "chatOnSS4",
      icon: "comments",
    },
    {
      title: "Nachricht senden",
      description:
        "Tausche Textnachrichten sofort mit anderen Nutzern aus.",
      image: "chatOnSS5",
      icon: "commentDots",
    },
  ],
  challenges: [
    "Synchronisierung von Nachrichten in Echtzeit über mehrere Geräte hinweg.",
    "Entwicklung einer einfachen und skalierbaren Firebase-Datenstruktur.",
    "Effizientes und sicheres Verwalten von Bild-Uploads.",
    "Verwaltung der Benutzerauthentifizierung und Sitzungsverwaltung.",
    "Sicherstellung einer flüssigen UI/UX auf verschiedenen Android-Geräten.",
  ],
  learned: [
    "Firebase Authentication und Benutzerverwaltung.",
    "Realtime Database und Synchronisierung von Live-Daten.",
    "Hochladen und Abrufen von Bildern mit Firebase Storage.",
    "RecyclerView und moderne Android-UI-Muster.",
    "Android-App-Lebenszyklus und Activity-Verwaltung.",
  ],
},
  }
} as const;

export type Language = keyof typeof translations;