import { Link } from 'react-router-dom';
import restaurantRatingCard from '../assets/projects/restaurantRatingCard.png';
import ProjectCard from '../components/ProjectCard';
import ChatOnCard from '../assets/projects/chatOnCard.png';
import CalculatorCard from '../assets/projects/calculatorCard.png';
import ClassificationOfRecyclingCard from '../assets/projects/classificationOfRecyclingCard.png';
import { useLanguage } from '../contex/LanguageContext';
import { useEffect, useState, type ComponentProps } from 'react';
import { preloadImages } from "../utils/preload";
import ProjectsSkeleton from '../components/skeletons/projectsSkeleton';
import TarotDeck from '../components/tarot/TarotDeck';
import {ProjectIdType, ProjectType} from '../components/tarot/TarotDeck'


const projects: ProjectType[] = [
  {
      id: 'restaurantRatings',
      image: restaurantRatingCard,
      technologies: ['React Native', 'JavaScript', 'Python', 'Firebase'],
      color: '#f97316',
      link: '/project/restaurantRatings',
  },
  // {
  //   id: 'calculator',
  //   image: CalculatorCard,
  //   technologies: ['React', 'Node', 'Socket.io'],
  //   color: '#22d3ee',
  //   link: '/project/calculator',
  // },
  {
      id: 'chatOn',
      image: ChatOnCard,
      technologies: ['Android', 'Android Studio', 'Java'],
      color: '#0891b2',
      link: '/project/chatApplication',
  },
  {
      id: 'classificationOfRecycling',
      image: ClassificationOfRecyclingCard,
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      color: '#8b5cf6',
      link: '/project/classificationOfRecycling',
  },
];

const images = [
  restaurantRatingCard,
  ChatOnCard,
  ClassificationOfRecyclingCard,
];

function ProjectsNew() {
  const { t } = useLanguage();

  const projectTranslations = t.projects as Record<
    ProjectIdType,
    { title: string; description: string } | undefined
  >;

  const localizedProjects: ProjectType[] = projects.map((project) => {
    const translation = projectTranslations[project.id];
    return {
      ...project,
      ...(translation
        ? {
            title: translation.title,
            description: translation.description,
          }
        : {}),
    };
  });

  const [loaded, setLoaded] = useState(false);

useEffect(() => {
  preloadImages(images).then(() => setLoaded(true));
}, []);

if (!loaded) {
  return (
    <ProjectsSkeleton />
  );
}

  return (
    <TarotDeck projects={localizedProjects}/>
  );
}

export default ProjectsNew;
