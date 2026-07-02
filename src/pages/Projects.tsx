import { Link } from 'react-router-dom';
import restaurantRatingCard from '../assets/projects/restaurantRatingCard.png';
import ProjectCard from '../components/ProjectCard';
import ChatOnCard from '../assets/projects/chatOnCard.png';
import CalculatorCard from '../assets/projects/calculatorCard.png';
import ClassificationOfRecyclingCard from '../assets/projects/classificationOfRecyclingCard.png';


export const projects = [
  {
    title: "Restaurants Reviews & Rating",
    description:
      "Discover restaurants, compare ratings and share reviews with a modern full-stack platform.",
    image: restaurantRatingCard,
    technologies: [
      "React Native",
      "JavaScript",
      "Python",
      "Firebase",
    ],
    color: "#f97316",
    //featured: true,
    link: "/project/restaurant-ratings",
  },
  {
    title: "Calculator",
    description:
      "Real-time messaging application with authentication and Socket.io.",
    image: CalculatorCard,
    technologies: [
      "React",
      "Node",
      "Socket.io",
    ],
    color: "#22d3ee",
    github: "#",
    demo: "#",
    link: "/project/calculator",
  },
{
    title: "ChatOn",
    description:
      "Interactive portfolio with animations and custom components.",
    image: ChatOnCard,
    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
    ],
    color: "#0891b2",
    github: "#",
    demo: "#",
    link: "/project/chat-application",
  },
  {
    title: "Classification of Recycling",
    description:
      "Interactive portfolio with animations and custom components.",
    image: ClassificationOfRecyclingCard,
    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
    ],
    color: "#8b5cf6",
    github: "#",
    demo: "#",
    link: "/project/classification-of-recycling",
  },

   
];

function Projects() {
  return (
    <div className="w-full h-full flex flex-col gap-4 ">
 <div className="grid gap-8 lg:grid-cols-2 h-full ">
        {projects.map((project, index) => (
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