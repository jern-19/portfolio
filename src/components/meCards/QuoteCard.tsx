import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface QuoteCardProps {
  quote: string;
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-neutral-800
        bg-neutral-900
        px-10
        py-8
      "
    >
      <div className="flex items-center gap-8">
        {/* Left icon */}
        <div
          className="
            flex
            h-24
            w-24
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-amber-500/30
            bg-amber-500/10
          "
        >
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-4xl text-amber-400"
          />
        </div>

        {/* Divider */}
        <div className="h-24 w-px bg-amber-500/40" />

        {/* Quote */}
        <p
          className="
            flex-1
            text-xl
            font-medium
            leading-relaxed
            text-white
          "
        >
          {quote}
        </p>

        {/* Decorative dots */}
        <div
          className="
            hidden
            md:grid
            grid-cols-6
            gap-2
            opacity-50
          "
        >
          {Array.from({ length: 36 }).map((_, index) => (
            <div
              key={index}
              className="h-1 w-1 rounded-full bg-amber-400"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}