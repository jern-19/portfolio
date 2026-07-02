
import Jern from '../assets/Jern.png';
import { ExperienceCard } from '../components/ExperienceCard';
import { TimelineItem } from '../components/TimelineItem';

export const experiences = [
  {
    year: "Present",
    icon: "🚀",
    title: "Senior Full Stack Engineer",
    subtitle: "Current Position",
    description:
      "Building scalable web applications, designing modern user experiences, and delivering high-quality software solutions.",
  },
  {
    year: "2023",
    icon: "💼",
    title: "Software Engineer",
    subtitle: "Professional Experience",
    description:
      "Developed production-ready applications using React, .NET, and cloud technologies while collaborating in agile teams.",
  },
  {
    year: "2021",
    icon: "🖥️",
    title: "First Full-Time Job",
    subtitle: "Software Engineer",
    description:
      "Started my career as a Full Stack Developer, working on enterprise software and learning software engineering best practices.",
  },
  {
    year: "2020",
    icon: "🤝",
    title: "Internship",
    subtitle: "First Industry Experience",
    description:
      "Worked alongside experienced developers, contributing features and gaining hands-on experience with real-world software development.",
  },
  {
    year: "2020",
    icon: "🎓",
    title: "Bachelor of Computer Science",
    subtitle: "University",
    description:
      "Completed my degree while building personal projects and strengthening my software engineering fundamentals.",
  },
];

function Experience() {
  
  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-auto pr-8">
      <div className="relative mx-auto max-w-4xl py-8">
      {experiences.map((experience, index) => (
        <TimelineItem
          key={experience.title}
          {...experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
    
    </div>
  );
}

export default Experience;