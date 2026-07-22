import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

interface FeaturedProjectCardProps {
  title: string;
  description: string;
  images: string[];
  color?: string;
}

export default function FeaturedProjectCard({
  title,
  description,
  images,
  color = "#005500", // orange
}: FeaturedProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.5 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-neutral-800
        bg-neutral-900/70
        backdrop-blur-xl
        p-8
      "
    >
      {/* Background Glow */}
      <div
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-[120px] opacity-20"
        style={{ background: color }}
      />

      <div className="relative flex flex-col lg:flex-row items-center gap-10">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white">
            {title} 🚀
          </h2>

          <p className="mt-2 text-sm  max-w-md leading-7 text-neutral-400">
            {description}
          </p>

         <div className="mt-4 flex flex-wrap gap-4">
  <a
    href="/projects"
    className="
       group
        inline-flex
        items-center
        gap-3
        rounded-2xl
        border
        border-[#005500]
        px-6
        py-3
        font-semibold
        text-[#fff]
        transition-all
        duration-300
        hover:border-[#7DA876]
        hover:shadow-lg
        hover:shadow-[#7DA876]/20
        "
    style={{
      backgroundColor: color,
    }}
  >
    View Project

    <FontAwesomeIcon
      icon={faArrowRight}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </a>

</div>
        </div>

        {/* Right */}
        <div className="relative h-[200px] w-full lg:w-[300px]">
          {images.slice(0, 3).map((image, index) => (
            <motion.img
              key={image}
              src={image}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                zIndex: 20,
              }}
              className="
                absolute
                rounded-2xl
                border
                border-neutral-700
                shadow-2xl
                object-cover
                cursor-pointer
              "
              style={{
                width: 230,
                height: 150,
                top: index * 45,
                left: index * 35,
                rotate: `${index % 2 === 0 ? -6 : 6}deg`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}