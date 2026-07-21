import { Link } from "react-router-dom";

type ProjectId =
  | "restaurantRatings"
  | "calculator"
  | "chatOn"
  | "classificationOfRecycling";

export interface Project {
  id: ProjectId;
  image: string;
  technologies: string[];
  color: string;
  link: string;
}

interface Props {
  project: Project;
  active: boolean;
  title: string;
  description: string;
}

export default function TarotCard({
  project,
  active,
  title,
  description,
}: Props) {
  return (
    <div
      className="relative h-[560px] w-[92vw] max-w-[360px] overflow-hidden rounded-[28px] border border-white/10 bg-[#171717] shadow-2xl"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-20 blur-3xl"
        style={{ background: project.color }}
      />

      {/* Image */}
      <img
        src={project.image}
        alt={title}
        className="relative h-60 w-full object-cover h-52 w-full rounded-2xl object-cover"
      />

      <div className="relative flex h-[calc(100%-240px)] flex-col p-7 text-center">
        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-3 text-center text-xs leading-5 text-zinc-500 line-clamp-2 px-6">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {active && (
          <Link
            to={project.link}
            className="mt-auto rounded-xl bg-white py-3 text-center font-semibold text-black transition hover:scale-105"
          >
            Explore Project
          </Link>
        )}
      </div>
    </div>
  );
}