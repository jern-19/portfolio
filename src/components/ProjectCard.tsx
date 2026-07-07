import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface Props {
  project: any;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className="group h-full overflow-hidden rounded-3xl border border-zinc-800 bg-[#111] transition-all duration-500 hover:-translate-y-2"
      style={{
        boxShadow: `0 0 0 transparent`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 40px ${project.color}25`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 0 0 transparent';
      }}
    >
      {/* IMAGE */}

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full min-h-[310px] object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}

      <div className="space-y-5 p-6 flex flex-col justify-center overflow-hidden">
        <h3
          className="text-3xl font-bold transition-colors duration-300"
          style={{
            color: project.color,
          }}
        >
          {project.title}
        </h3>

        <p className="leading-relaxed text-zinc-400">{project.description}</p>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-all"
                style={{
                  borderColor: `${project.color}55`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <FontAwesomeIcon
            icon={faArrowRight}
            className="translate-x-0 text-xl transition-transform duration-300 group-hover:translate-x-2"
            style={{
              color: project.color,
            }}
          />
        </div>
      </div>
    </div>
  );
}
