import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faCheck,
  faCircle,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const learningNow = [
  "AI Engineering",
  "Advanced React Patterns",
  "System Design",
  "Better UI Animations",
];

const roadmap = [
  "Kubernetes",
  "Docker",
  "Redis",
  "GraphQL",
];

export default function WhatImLearningCard() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-neutral-800
        bg-neutral-900
        p-6
      "
    >
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#7DA876]/10 blur-[90px]" />

      <div className="relative flex h-full justify-between gap-8">
        {/* LEFT */}

        <div className="flex flex-1 flex-col">
          <div className="mb-6 flex items-center gap-4">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-[#7DA876]/10
              "
            >
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-[#7DA876]"
              />
            </div>

            <h2 className="text-2xl font-bold text-white">
              What I'm Learning
            </h2>
          </div>

          <p className="mb-4 font-semibold text-[#7DA876]">
            Currently exploring
          </p>

          <div className="space-y-3">
            {learningNow.map((item) => (
              <motion.div
                key={item}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-[#7DA876]"
                />

                <span className="text-neutral-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="my-6 h-px bg-neutral-800" />

          <p className="mb-4 font-semibold text-neutral-400">
            On my roadmap
          </p>

          <div className="space-y-3">
            {roadmap.map((item) => (
              <motion.div
                key={item}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[7px] text-neutral-500"
                />

                <span className="text-neutral-500">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div className="hidden w-[220px] items-center justify-center md:flex">
          <div className="relative">
            {/* Light bulb */}

            <motion.div
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="mb-6 flex justify-center"
            >
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-6xl text-[#D6B04D]"
              />
            </motion.div>

            {/* Books */}

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="relative"
            >
              <div className="h-8 w-40 rounded-lg border border-[#355C3E] bg-[#18251A]" />

              <div className="-mt-2 ml-3 h-8 w-36 rounded-lg border border-[#355C3E] bg-[#141F16]" />

              <div className="-mt-2 ml-6 h-8 w-32 rounded-lg border border-[#355C3E] bg-[#101810]" />
            </motion.div>

            {/* Floating particles */}

            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + index,
                  delay: index * 0.3,
                }}
                className="absolute h-1.5 w-1.5 rounded-full bg-[#7DA876]"
                style={{
                  top: 20 + index * 15,
                  left: 20 + index * 25,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}