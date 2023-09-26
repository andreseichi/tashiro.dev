import { motion } from "framer-motion";

import { Skill } from "./components/Skill";

import data from "@/data/skills.json";

export function Skills() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.25 }}
      className="relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center
        justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-14 hidden text-2xl uppercase tracking-[20px] text-gray-500 md:top-20 md:inline">
        Skills
      </h3>

      <div className="grid grid-cols-3 gap-5 md:grid-cols-5 md:gap-7 xl:grid-cols-7">
        {data.skills.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
