import { motion } from "framer-motion";
import { z } from "zod";

import { TechnologyIcon } from "@/components/TechnologyIcon";
import Link from "next/link";

const schema = z.object({
  skill: z.object({
    id: z.string(),
    name: z.string(),
    level: z.string(),
    icon: z.string().url(),
    url: z.string().url(),
  }),
});

type SkillProps = z.infer<typeof schema>;

export function Skill({ skill }: SkillProps) {
  return (
    <Link href={skill.url} target="_blank">
      <div className="group relative flex cursor-pointer">
        <div className="relative">
          <div className="absolute -inset-1 animate-spin rounded-full bg-gradient-to-tr from-blue-600 to-pink-600 opacity-80 blur transition duration-300"></div>
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

        <div className="absolute z-0 h-20 w-20 rounded-full opacity-0 transition duration-300 ease-in-out md:h-24 md:w-24">
          <div className="flex h-full items-center justify-center">
            <p className="text-3xl font-bold text-black opacity-100">
              {skill.level}%
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
