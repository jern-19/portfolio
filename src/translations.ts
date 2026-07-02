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
    restaurantRatings: {
      title: "Restaurant Rating & Analytics Platform",
      description: "A web application that allows users to rate and review restaurants.",
    },
  },
  de: {
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
    restaurantRatings: {
      title: "Restaurantbewertung & Analysen-Plattform",
      description: "Eine Webanwendung, mit der Benutzer Restaurants bewerten und rezensieren können.",
    },
  },
} as const;

export type Language = keyof typeof translations;