import { motion } from "framer-motion";

import { TechnologyIcon } from "@/components/TechnologyIcon";
import { Skill } from "@/types/skill";
import Link from "next/link";

export function Skill({ skill }: Skill) {
  return (
    <Link href={skill.url} target="_blank">
      <div className="group relative flex cursor-pointer">
        <div className="relative">
          <div className="absolute -inset-1 -z-10 animate-spin rounded-full bg-gradient-to-tr from-blue-600 to-pink-600 opacity-80 blur transition duration-300"></div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.75,
              ease: "linear",
            }}
            viewport={{ once: true }}
            className="h-20 w-20 overflow-hidden rounded-full border border-gray-500 bg-slate-800 object-cover p-4 filter transition duration-300 ease-in-out md:h-24 md:w-24"
          >
            <TechnologyIcon
              id={skill.id}
              name={skill.name}
              imageSrc={skill.icon}
            />
          </motion.div>
        </div>
      </div>
    </Link>
  );
}
