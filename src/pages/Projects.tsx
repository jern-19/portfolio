import { Link } from 'react-router-dom';
import restaurantRatingCard from '../assets/projects/restaurantRatingCard.png';
import ProjectCard from '../components/ProjectCard';
import ChatOnCard from '../assets/projects/chatOnCard.png';
import CalculatorCard from '../assets/projects/calculatorCard.png';
import ClassificationOfRecyclingCard from '../assets/projects/classificationOfRecyclingCard.png';
import { useLanguage } from '../contex/LanguageContext';


type ProjectId = "restaurant-ratings" | "calculator" | "chat-on" | "classification-of-recycling";

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
    id: "restaurant-ratings",
    image: restaurantRatingCard,
    technologies: ["React Native", "JavaScript", "Python", "Firebase"],
    color: "#f97316",
    link: "/project/restaurant-ratings",
  },
  {
    id: "calculator",
    image: CalculatorCard,
    technologies: ["React", "Node", "Socket.io"],
    color: "#22d3ee",
    link: "/project/calculator",
  },
  {
    id: "chat-on",
    image: ChatOnCard,
    technologies: ["React", "Tailwind", "Framer Motion"],
    color: "#0891b2",
    link: "/project/chat-application",
  },
  {
    id: "classification-of-recycling",
    image: ClassificationOfRecyclingCard,
    technologies: ["React", "Tailwind", "Framer Motion"],
    color: "#8b5cf6",
    link: "/project/classification-of-recycling",
  },
];

function Projects() {
  const { t } = useLanguage();

const localizedProjects = projects.map((project) => ({
  ...project,
  title:t.projects[project.id]?.title || project.title,
  description: t.projects[project.id]?.description || project.description,
}));
  return (
    <div className="w-full h-full flex flex-col gap-4 ">
 <div className="grid gap-8 lg:grid-cols-2 h-full ">
        {localizedProjects.map((project, index) => (
          <Link
            to={project.link}
            key={project.title}
            className={
              index % 3 === 0
                ? "lg:col-span-2"
                : ""
            }
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>


    </div>
  );
}

export default Projects;