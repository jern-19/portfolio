import { useState } from "react";
import { motion } from "framer-motion";

import TarotCard from "./TarotCard";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useLanguage } from "../../contex/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faLeftRight, faRightLong } from "@fortawesome/free-solid-svg-icons";


export type ProjectIdType =
  | "restaurantRatings"
  | "calculator"
  | "chatOn"
  | "classificationOfRecycling";

export interface ProjectType {
  id: ProjectIdType;
  image: string;
  technologies: string[];
  color: string;
  link: string;
}

interface Props {
  projects: ProjectType[];
}

export default function TarotDeck({
  projects,
}: Props) {
    const { t } = useLanguage();
    
  const [active, setActive] = useState(1);

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1279px)");

  const previous = () => {
    setActive(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const next = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const getLayout = (offset: number) => {
    if (isMobile) {
      if (offset !== 0)
        return {
          opacity: 0,
          scale: 0.9,
          x: 0,
          rotate: 0,
          zIndex: 0,
        };

      return {
        opacity: 1,
        scale: 1,
        x: 0,
        rotate: 0,
        zIndex: 10,
      };
    }

    if (isTablet) {
      switch (offset) {
        case -1:
          return {
            x: -180,
            rotate: -8,
            scale: 0.9,
            opacity: 0.5,
            zIndex: 5,
          };

        case 0:
          return {
            x: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            zIndex: 10,
          };

        case 1:
          return {
            x: 180,
            rotate: 8,
            scale: 0.9,
            opacity: 0.5,
            zIndex: 5,
          };

        default:
          return {
            opacity: 0,
            scale: 0.8,
            x: 0,
            rotate: 0,
            zIndex: 0,
          };
      }
    }

    switch (offset) {
      case -2:
        return {
          x: -420,
          rotate: -18,
          scale: 0.8,
          opacity: 0.2,
          zIndex: 1,
        };

      case -1:
        return {
          x: -220,
          rotate: -10,
          scale: 0.9,
          opacity: 0.6,
          zIndex: 5,
        };

      case 0:
        return {
          x: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          zIndex: 10,
        };

      case 1:
        return {
          x: 220,
          rotate: 10,
          scale: 0.9,
          opacity: 0.6,
          zIndex: 5,
        };

      case 2:
        return {
          x: 420,
          rotate: 18,
          scale: 0.8,
          opacity: 0.2,
          zIndex: 1,
        };

      default:
        return {
          opacity: 0,
          scale: 0.8,
          x: 0,
          rotate: 0,
          zIndex: 0,
        };
    }
  };

  return (
    <div className="relative flex min-h-[calc(100%-60px)] w-full items-center justify-center overflow-hidden px-4 md:min-h-[700px]">
      {projects.map((project, index) => {
        const offset = index - active;

        const layout = getLayout(offset);
        const projectText =
          t.projects?.[project.id as keyof typeof t.projects] as
            | { title: string; description: string }
            | undefined;

        return (
          <motion.div
            key={project.id}
            className="absolute cursor-pointer"
            style={{ zIndex: layout.zIndex }}
            animate={{
              x: layout.x,
              rotate: layout.rotate,
              scale: layout.scale,
              opacity: layout.opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            onClick={() => setActive(index)}
          >
            <TarotCard
              project={project}
              active={index === active}
              title={projectText?.title ?? ""}
              description={projectText?.description ?? ""}
            />
          </motion.div>
        );
      })}

      {/* Controls */}

      <div className="absolute flex gap-4 z-40 w-full justify-between px-5 ">
        <button
          onClick={previous}
          className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-800"
        >
      <FontAwesomeIcon icon={faLeftLong} />
        </button>

        <button
          onClick={next}
          className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-800"
        >
          <FontAwesomeIcon icon={faRightLong} />
        </button>
      </div>
    </div>
  );
}