import { motion } from "framer-motion";
import { ExperienceCard } from "./components/ExperienceCard";

import data from "@/data/experiences.json";

export function Experiences() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex min-h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-3 text-left md:flex-row md:px-10"
    >
      <h3 className="absolute top-14 hidden text-2xl uppercase tracking-[20px] text-gray-500 md:top-20 md:inline">
        experiences
      </h3>

      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll pb-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary md:p-10">
        {data.experiences.map((experience) => (
          <ExperienceCard
            key={experience.company.name}
            experience={experience}
          />
        ))}
      </div>
    </motion.div>
  );
}
