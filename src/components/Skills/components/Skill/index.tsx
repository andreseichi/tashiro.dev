import { motion } from 'framer-motion';
import { z } from 'zod';

import { TechnologyIcon } from '@/components/TechnologyIcon';
import Link from 'next/link';

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
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-pink-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin"></div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.75,
              ease: 'linear',
            }}
            viewport={{ once: true }}
            className="rounded-full overflow-hidden p-2 border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out bg-slate-800"
          >
            <TechnologyIcon
              id={skill.id}
              name={skill.name}
              imageSrc={skill.icon}
            />
          </motion.div>
        </div>

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">
              {skill.level}%
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
