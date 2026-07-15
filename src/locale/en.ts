import { faClaude } from "@fortawesome/free-brands-svg-icons";
import { faArrowTrendDown, faArrowTrendUp, faBorderAll, faBullseye, faChartLine, faCircleQuestion, faComputer, faCube, faDatabase, faDesktop, faFolderOpen, faImage, faLaptopCode, faLayerGroup, faLightbulb, faLock, faMessage, faMicrochip, faRobot, faServer, faShareNodes, faTableCells, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import chatOnSS1 from '../assets/projects/chatOnSS1.png';
import chatOnSS2 from '../assets/projects/ChatOnSS2.png';
import chatOnSS3 from '../assets/projects/ChatOnSS3.png';
import chatOnSS4 from '../assets/projects/chatOnSS4.png';
import chatOnSS5 from '../assets/projects/chatOnSS5.png';
import paper from "../assets/projects/paper.png"
import plastic from "../assets/projects/plastic.jpg"
import cardboard from "../assets/projects/cardboard.png"
import glass from "../assets/projects/glass.png"

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
            icon: faDesktop,
          },
          {
            label: 'Backend',
            icon: faServer,
          },
          {
            label: 'Database',
            icon: faDatabase
          },
          {
            label: 'Hosting',
            icon: faClaude
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
  subTitle: 'Real-Time Messaging Platform',
  description:
    'ChatOn is a modern Android messaging application that enables users to communicate instantly through real-time text messaging and photo sharing. The application features secure authentication, customizable user profiles, image sharing, and a responsive interface powered by Firebase services.',

  button: 'Demo',
  viewOnGitHub: 'View on GitHub',

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
    title: 'Key Features',
    items: [
      {
        icon: faLock,
        title: 'User Authentication',
        description:
          'Secure user registration and login using Firebase Authentication with persistent user sessions.',
      },
      {
        icon: faMessage,
        title: 'Real-Time Messaging',
        description:
          'Exchange instant messages with friends using Firebase Realtime Database for live synchronization.',
      },
      {
        icon: faImage,
        title: 'Image Sharing',
        description:
          'Upload and share photos directly in conversations using Firebase Storage.',
      },
      {
        icon: faUsers,
        title: 'Friend Management',
        description:
          'Search for users, add friends, and start private or group conversations.',
      },
    ],
  },

  workflow: [
    {
      title: 'Login / Register',
      description:
        'Create an account or sign in securely using Firebase Authentication.',
      image: chatOnSS1,
    },
    {
      title: 'Profile Settings',
      description:
        'Customize your profile information and manage your account.',
      image: chatOnSS2,
    },
    {
      title: 'Find Friends',
      description:
        'Search for users and add them to your friends list.',
      image: chatOnSS3,
    },
    {
      title: 'Private Chat',
      description:
        'Start one-to-one conversations with real-time message synchronization.',
      image: chatOnSS4,
    },
    {
      title: 'Group Chats',
      description:
        'Create groups and communicate with multiple friends simultaneously.',
      image: chatOnSS5,
    },
  ],

  challenges: [
    'Synchronizing messages in real time across multiple users.',
    'Designing a scalable Firebase Realtime Database structure.',
    'Uploading and displaying images efficiently.',
    'Managing authentication and persistent user sessions.',
    'Providing a responsive experience across different Android devices.',
  ],

  learned: [
    'Implementing secure authentication with Firebase Authentication.',
    'Building real-time features using Firebase Realtime Database.',
    'Uploading and retrieving media with Firebase Storage.',
    'Developing dynamic interfaces with RecyclerView.',
    'Managing Android activities, fragments, and the application lifecycle.',
  ],
},
    classificationOfRecycling: {
        tag: "Research Project",
        title1: "Classification of",
        title2: "Recycling",
        subTitle: "Using Deep Learning",
        description: "A research project focused on classifying waste materials using deep learning techniques.",
        techStack: ["Deep Learning", "Image Processing", "Python", "TensorFlow", "Keras"],
        buttonViewOnGitHub: "View on GitHub",
        buttonResearch: "Research",
        summaryPart: [
            {
                icon: faImage,
                value: '2527',
                label: 'Total Images',
                color: 'text-green-500',
              },
              {
                icon: faBorderAll,
                value: '6',
                label: 'Classes',
                color: 'text-green-500',
              },
              {
                icon: faShareNodes,
                value: '3',
                label: 'CNN Models',
                color: 'text-green-500',
              },
              {
                icon: faArrowTrendUp,
                value: '97%',
                label: 'Best Accuracy',
                color: 'text-green-500',
              },
              {
                icon: faMicrochip,
                value: '100',
                label: 'Epochs',
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
                  'Traditional waste sorting is manual, expensive and error-prone, leading to inefficient recycling processes.',
              },
              {
                icon: faBullseye,
                title: 'Goal',
                description:
                  'Build an accurate and efficient deep learning model that can classify six types of recyclable materials.',
              },
              {
                icon: faLightbulb,
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
            { name: 'trash', value: 137 },
            { name: 'glass', value: 501 },
            { name: 'plastic', value: 482 },
            { name: 'cardboard', value: 403 },
            { name: 'paper', value: 594 },
            { name: 'metal', value: 410 },
            ]
        },
        methodology:{
            title: "Methodology",
            items: [
              { icon: faFolderOpen, label: 'Dataset\nCollection' },
              { icon: faImage, label: 'Image\nPreprocessing' },
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
            { epoch: '20 Epoch', ResNet50: 0.90, MobileNet: 0.89, VGG16: 0.75 },
            { epoch: '40 Epoch', ResNet50: 0.91, MobileNet: 0.90, VGG16: 0.69 },
            { epoch: '60 Epoch', ResNet50: 0.88, MobileNet: 0.95, VGG16: 0.70 },
            { epoch: '100 Epoch', ResNet50: 0.96, MobileNet: 0.97, VGG16: 0.69 },
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
    image: paper,
    actual: 'Paper',
    predicted: 'Paper',
    confidence: '98.6%',
  },
  {
    image: glass,
    actual: 'Glass',
    predicted: 'Glass',
    confidence: '97.3%',
  },
  {
    image: plastic,
    actual: 'Plastic',
    predicted: 'Plastic',
    confidence: '98.4%',
  },
  {
    image: cardboard,
    actual: 'Cardboard',
    predicted: 'Cardboard',
    confidence: '97.7%',
  },
]
        }
    }
  }