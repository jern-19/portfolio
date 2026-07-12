import { faChartLine, faCube, faDatabase, faFolderOpen, faImage, faLaptopCode, faLayerGroup, faRobot, faTableCells } from "@fortawesome/free-solid-svg-icons";

export const en = {
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
      me: 'Me',
      experience: 'Experience',
      projects: 'Projects',
    },
    home: {
      title: 'Full Stack Software Engineer',
      description:
        'I build modern, scalable software with intuitive user experiences and reliable backend systems. My focus is on clean code and maintainable solutions.',
      joined: 'Joined 2016',
      location: 'Munich, Germany',
    },
    me: {
      cards: [ 
        {
          title: "Hi! 👋🏾",
          text: "I'm Jern, welcome to my portfolio. This is a collection of my journey, experiences, and the projects I've built while exploring the world of software development."
        },
        {
          title: "Daily life 🌱",
          text: "Coding, solving bugs, learning new things, enjoying good food, sleeping well, and finding a healthy balance between building and recharging."
        },
         {
          text: "I enjoy solving challenging problems, learning new technologies, and creating software that turns ideas into useful and meaningful experiences."
        },
        {
          title: "Fun fact ☕",
          text: "What started as a short internship 5 years ago became a new chapter of my life. I decided to stay, make Munich my home, and continue growing both personally and professionally."
        },
        {
          title: "Outside of coding 🌍",
          text: "I enjoy exploring new places, discovering hidden gems, learning new things, and finding the right balance between work and life."
        }
      ],
    },
    experience: {
      items: [
        {
          year: '2022 - Now',
          icon: '👩🏽‍💻',
          title: 'Full Stack Software Engineer',
          subtitle: 'Current Position',
          description:
            'I developed and maintained full-stack web applications, implementing backend services with C#, REST APIs, BFF, and endpoint development, while building responsive frontends with JavaScript, jQuery, Kendo UI, and Webpack. I also worked with Azure DevOps and CI/CD pipelines and expanded my expertise in React.',
        },
        {
          year: 'Jul 2021 - Okt 2021',
          icon: '📱',
          title: 'Mobile Developer Erasmus+',
          subtitle: 'Internship',
          description:
            'I developed cross-platform mobile applications for Android and iOS using Flutter.',
        },
        {
          year: 'Nov 2020 - Jun 2021',
          icon: '💼',
          title: 'Mobile Developer',
          subtitle: 'Working Student',
          description:
            'I developed mobile applications for Android and iOS using React Native, worked with designers to create easy-to-use interfaces, and published the apps to the App Store and Google Play.',
        },
         {
          year: '2020',
          icon: '📲',
          title: 'Android Development Bootcamp Turkcell',
          subtitle: 'Android application development',
          description:
            'I participated in an Android Development competition, where I developed an Android application using Java and Android Studio. As my final project, I created and published a Turkish Sign Language application.',
        },
        {
          year: '2019',
          icon: '🤖',
          title: 'AI Summer Camp',
          subtitle: 'Deep Learning & Image Processing',
          description:
            'I participated in an AI summer camp focused on machine learning and image processing, where I worked as part of a team to develop a deep learning model for classifying recyclable materials and waste types, and presented our project.',
        },
        {
          year: 'Jul 2019 - Okt 2019',
          icon: '📊',
          title: 'Software Developer',
          subtitle: 'Summer Internship',
          description:
            'I developed business applications using ABAP in the SAP environment.',
        },
        {
          year: '2016 - 2021',
          icon: '🎓',
          title: 'Bachelor of Computer Science and Engineer',
          subtitle: 'University',
          description:
            'I studied Computer Science and Engineering, achieving second place in my program with a GPA of 3.29/4.',
        },
      ],
    },

   projects: {
  'restaurant-ratings': {
    title: 'Restaurant Ratings & Reviews',
    description:
      'A full-stack platform that aggregates restaurant ratings from multiple sources such as Zomato, TripAdvisor, and Google, providing users and restaurant owners with unified reviews, comparisons, and statistical insights.',
  },

  calculator: {
    title: 'Calculator',
    description:
      'A bot-based calculator application that performs mathematical operations through commands and provides access to the 10 most recent calculation histories.',
  },

  'chat-on': {
    title: 'ChatOn',
    description:
      'A real-time messaging application that enables users to communicate through text messages, share photos, apply image filters, and manage profile settings with secure authentication.',
  },

  'classification-of-recycling': {
    title: 'Classification of Recycling',
    description:
      'An AI-powered image classification project that uses deep learning and image processing techniques to identify recyclable materials and waste types, achieving up to 97% accuracy on test data.',
  },
},
    restaurantRatings: {
      hero: {
        title1: 'Restaurants',
        title2: 'Reviews & Ratings',
        description:
'An analytics web application that aggregates restaurant ratings from multiple sources, providing unified insights, comparisons, and performance trends through interactive visualizations.',        button: 'Live Demo',
        tag: 'Full Stack Project',
      },
      technologies: {
        title: 'Technologies Used',
      },
      gallery: {
        title: 'Gallery',
      },
      keyFeatures: {
        title: 'Key Features',
        items: [
          {
            title: 'Multi-Platform Rating Aggregation',
            icon: faDatabase,
            description:
              'Collects and combines restaurant ratings from multiple sources into a unified analytics platform.',
          },
          {
            title: 'Interactive Analytics Dashboard',
            icon: faChartLine,
            description:
              'Provides rating comparisons, performance insights, and visualizations to understand restaurant trends.',
          },
          {
            title: 'AI-Powered Rating Prediction & Recommendations',
            icon: faRobot,
            description:
              'Uses machine learning models to predict ratings and recommend restaurants based on collected data.',
          },
        ],
      },
    },
    calculator: {
      title: 'Calculator',
      description:
        'A modern calculator application with an intuitive and user-friendly interface.',
      button: 'Live Demo',
      viewOnGitHub: 'View on GitHub',
      details: [
        {
          icon: 'database',
          label: 'Category',
          value: 'Frontend Developer',
        },
        {
          icon: 'code',
          label: 'Tech Stack',
          value: 'HTML, CSS, JavaScript',
        },
        {
          icon: 'clock',
          label: 'Time Spent',
          value: '2 weeks',
        },
      ],
      aboutTheProject: {
        title: 'About the Project',
        description:
          'This calculator application is designed to provide users with a seamless and efficient way to perform basic arithmetic operations. It features a clean and intuitive interface, making it easy for users of all ages to use.',
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
            label: 'Database',
            icon: 'database',
          },
          {
            label: 'Hosting',
            icon: 'cloud',
          },
        ],
      },
      keyFeatures: {
        title: 'Key Features',
        items: [
          'Basic operations: +, −, ×, ÷',
          'History of calculations',
          'Delete & clear functionality',
          'Responsive for all devices',
          'Clean and intuitive UI/UX',
        ],
      },
      techStack: {
        title: 'Tech Stack',
        items: [
          {
            icon: 'brands',
            color: 'text-yellow-400',
            title: 'JavaScript',
            subtitle: 'Logic & Functionality',
          },
          {
            icon: 'fa-brands fa-html5',
            color: 'text-orange-500',
            title: 'HTML',
            subtitle: 'Structure',
          },
          {
            icon: 'fa-brands fa-css3-alt',
            color: 'text-blue-500',
            title: 'CSS',
            subtitle: 'Styling & Layout',
          },
        ],
      },
      whatILearned: {
        title: 'What I Learned',
        items: [
          'Enhanced my understanding of JavaScript and its application in building interactive web applications.',
          'Gained experience in creating responsive designs that work seamlessly across different devices.',
          'Improved my skills in debugging and optimizing code for better performance.',
          'Learned the importance of user experience and how to design interfaces that are intuitive and user-friendly.',
        ],
      },
    },
    chatOn: {
      tag: 'Android App',
      title1: 'Chat',
      title2: 'On',
      subTitle:
        'A real-time chat application with user authentication and instant messaging.',
      description:
        'A real-time chat application with user authentication and instant messaging.',
      button: 'Live Demo',
      viewOnGitHub: 'View on GitHub',
      features: {
        title: 'Key Features',
        items: [
          {
            icon: 'checked',
            title: 'User Authentication',
            description:
              'Secure user authentication with email and password, allowing users to create accounts and log in to the chat application.',
          },
          {
            icon: 'checked',
            title: 'Realtime Messaging',
            description:
              'Secure login and registration system with Firebase and realtime synchronization.',
          },
          {
            icon: 'checked',
            title: 'Image Sharing',
            description:
              'Secure login and registration system with Firebase and realtime synchronization.',
          },
          {
            icon: 'checked',
            title: 'Friend Management',
            description:
              'Secure login and registration system with Firebase and realtime synchronization.',
          },
        ],
      },
      workflow: [
        {
          title: 'Create Account',
          description:
            'Create an account securely using Firebase Authentication.',
          image: 'chatOnSS1',
          icon: 'userPlus',
        },
        {
          title: 'Login',
          description: 'Authenticate and access your conversations instantly.',
          image: 'chatOnSS2',
          icon: 'lock',
        },
        {
          title: 'Find Friends',
          description: 'Search users and connect with new friends.',
          image: 'chatOnSS3',
          icon: 'magnifyingGlass',
        },
        {
          title: 'Open Chat',
          description: 'Start private conversations in real time.',
          image: 'chatOnSS4',
          icon: 'comments',
        },
        {
          title: 'Send Message',
          description: 'Exchange text messages instantly.',
          image: 'chatOnSS5',
          icon: 'commentDots',
        },
      ],
      challenges: [
        'Synchronizing messages in real time across multiple devices.',
        'Designing a simple and scalable Firebase data structure.',
        'Handling image uploads efficiently and securely.',
        'Managing user authentication and session persistence.',
        'Ensuring smooth UI/UX on various Android devices.',
      ],
      learned: [
        'Firebase Authentication and user management.',
        'Realtime Database and live data synchronization.',
        'Image upload and retrieval using Firebase Storage.',
        'RecyclerView and modern Android UI patterns.',
        'Android app lifecycle and activity management.',
      ],
    },
    classificationOfRecycling: {
        tag: "Research Project",
        title1: "Classification of",
        title2: "Recycling",
        subTitle: "Using Deep Learning",
        description: "A research project focused on classifying waste materials using deep learning techniques.",
        techStack: ["Computer Vision", "Deep Learning", "Python", "TensorFlow", "Keras"],
        buttonViewOnGitHub: "View on GitHub",
        buttonDemo: "Demo",
        summaryPart: [
            {
                icon: "faImage",
                value: '2527',
                label: 'Total Images',
                color: 'text-green-500',
              },
              {
                icon: "faBorderAll",
                value: '6',
                label: 'Classes',
                color: 'text-green-500',
              },
              {
                icon: "faShareNodes",
                value: '3',
                label: 'CNN Models',
                color: 'text-green-500',
              },
              {
                icon: "faArrowTrendUp",
                value: '97%',
                label: 'Best Accuracy',
                color: 'text-green-500',
              },
              {
                icon: "faMicrochip",
                value: 'TensorFlow',
                label: 'Framework',
                color: 'text-orange-500',
              },
              {
                icon: "faComputer",
                value: 'GPU',
                label: 'Training',
                color: 'text-green-500',
              },
        ],
        projectDetails: [
            {
                icon: "faCircleQuestion",
                title: 'Problem',
                description:
                  'Traditional waste sorting is manual, expensive and error-prone, leading to inefficient recycling processes.',
              },
              {
                icon: "faBullseye",
                title: 'Goal',
                description:
                  'Build an accurate and efficient deep learning model that can classify six types of recyclable materials.',
              },
              {
                icon: "faLightbulb",
                title: 'Research Question',
                description:
                  'Which pretrained CNN architecture provides the best balance between accuracy and computational cost?',
              },
        ],
        datasetOverview: {
            title: "Dataset Overview",
            items: [
        '2537 total images',
        '6 recyclable material classes',
        '70% Training / 13% Validation / 17% Test split',
        'Images collected from real-world scenarios',
        'Class imbalance exists (Trash has fewer samples)',
        ],
        totalImagePerClass: "Total Images per Class",
        chartData : [
            { name: 'trash', value: 140 },
            { name: 'glass', value: 500 },
            { name: 'plastic', value: 480 },
            { name: 'cardboard', value: 400 },
            { name: 'paper', value: 560 },
            { name: 'metal', value: 400 },
            ]
        },
        methodology:{
            title: "Methodology",
            items: [
              { icon: faFolderOpen, label: 'Dataset\nCollection' },
              { icon: faImage, label: 'Image\nPreprocessing' },
              { icon: faTableCells, label: 'Train/Val/Test\nSplit (70/13/17)' },
              { icon: faLayerGroup, label: 'Transfer\nLearning' },
              { icon: faLaptopCode, label: 'Model\nTraining' },
              { icon: faChartLine, label: 'Evaluation' },
            ],
            summary: "The methodology involves collecting a dataset of recyclable materials, preprocessing the images, splitting the dataset into training, validation, and test sets, applying transfer learning using pretrained CNN architectures, training the models, and evaluating their performance to determine the best model for classification."
        },
        modelsCompared: {
            title: "Models Compared",
            items:[
              {
                name: 'VGG16',
                subtitle: 'Classic CNN Architecture',
                color: 'purple',
                icon: faLayerGroup,
                accuracy: '75%',
                points: [
                  'Deep and simple architecture',
                  'More parameters',
                  'Higher computational cost',
                ],
              },
              {
                name: 'MobileNet',
                subtitle: 'Lightweight CNN',
                color: 'green',
                icon: faCube,
                accuracy: '97%',
                featured: true,
                points: [
                  'Designed for efficiency',
                  'Fewer parameters',
                  'Faster training & inference',
                ],
              },
              {
                name: 'ResNet50',
                subtitle: 'Residual Learning Framework',
                color: 'blue',
                icon: faCube,
                accuracy: '96%',
                points: [
                  'Very deep with skip connections',
                  'High accuracy and stability',
                  'Good generalization',
                ],
              },
            ]
        },
        trainingResults: {
            title: "Training Results (Test Accuracy)",
            chartData: [
            { epoch: '20 Epoch', ResNet50: 0.89, MobileNet: 0.83, VGG16: 0.63 },
            { epoch: '40 Epoch', ResNet50: 0.89, MobileNet: 0.84, VGG16: 0.56 },
            { epoch: '60 Epoch', ResNet50: 0.83, MobileNet: 0.95, VGG16: 0.57 },
            { epoch: '100 Epoch', ResNet50: 0.93, MobileNet: 0.97, VGG16: 0.55 },
            ]
        },
        accuracyComparisonTable: {
            title: "Accuracy Comparison Table",
            bestAccuracy: "Best Accuracy",
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
            title: "Predictions",
            items:  [
  {
    image: '/images/paper.png',
    actual: 'Paper',
    predicted: 'Paper',
    confidence: '98.6%',
  },
  {
    image: '/images/glass.png',
    actual: 'Glass',
    predicted: 'Glass',
    confidence: '97.3%',
  },
  {
    image: '/images/plastic.png',
    actual: 'Plastic',
    predicted: 'Plastic',
    confidence: '98.4%',
  },
  {
    image: '/images/cardboard.png',
    actual: 'Cardboard',
    predicted: 'Cardboard',
    confidence: '97.7%',
  },
  {
    image: '/images/metal.png',
    actual: 'Metal',
    predicted: 'Metal',
    confidence: '98.2%',
  },
  {
    image: '/images/trash.png',
    actual: 'Trash',
    predicted: 'Trash',
    confidence: '94.7%',
  },
]
        }
    }
  }