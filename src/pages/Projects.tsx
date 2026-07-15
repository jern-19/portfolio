import { Link } from 'react-router-dom';
import restaurantRatingCard from '../assets/projects/restaurantRatingCard.png';
import ProjectCard from '../components/ProjectCard';
import ChatOnCard from '../assets/projects/chatOnCard.png';
import CalculatorCard from '../assets/projects/calculatorCard.png';
import ClassificationOfRecyclingCard from '../assets/projects/classificationOfRecyclingCard.png';
import { useLanguage } from '../contex/LanguageContext';

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

function Projects() {
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
  return (
    <div className="w-full h-full flex flex-col gap-4 ">
      <div className="grid gap-8 lg:grid-cols-2 h-full ">
        {localizedProjects.map((project, index) => (
          <Link
            to={project.link}
            key={project.title}
            className='lg:col-span-2'
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
