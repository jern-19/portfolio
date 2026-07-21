import { Link } from 'react-router-dom';
import restaurantRatingCard from '../assets/projects/restaurantRatingCard.png';
import ProjectCard from '../components/ProjectCard';
import ChatOnCard from '../assets/projects/chatOnCard.png';
import ClassificationOfRecyclingCard from '../assets/projects/classificationOfRecyclingCard.png';
import { useLanguage } from '../contex/LanguageContext';
import { useEffect, useState } from 'react';
import { preloadImages } from "../utils/preload";
import ProjectsSkeleton from '../components/skeletons/projectsSkeleton';

type ProjectId =
  | 'restaurantRatings'
  | 'calculator'
  | 'chatOn'
  | 'classificationOfRecycling';

type Project = {
  id: ProjectId;
  image: string;
  technologies: string[];
  color: string;
  link: string;
  title?: string;
  description?: string;
};

const projects: Project[] = [
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

export default function LearningLog() {
  const { t } = useLanguage();

  const projectTranslations = t.projects as Record<
    ProjectId,
    { title: string; description: string } | undefined
  >;

  const localizedProjects = projects.map((project) => {
    const translation = projectTranslations[project.id];
    return {
      ...project,
      title: translation?.title || project.title,
      description: translation?.description || project.description,
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
    <div className="w-full h-full flex flex-col gap-4 items-center">
      <span></span>
    </div>
  );
}

