import { motion } from 'framer-motion';
import { Skill } from './components/Skill';

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
      className="min-h-screen relative flex justify-center items-center flex-col text-center
        md:text-left xl:flex-row max-w-[2000px] xl:px-10 xl:space-y-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill direction="left" />
        <Skill direction="left" />
        <Skill direction="left" />
        <Skill direction="left" />
        <Skill direction="left" />
        <Skill direction="left" />
        <Skill direction="left" />
      </div>
    </motion.div>
  );
}
