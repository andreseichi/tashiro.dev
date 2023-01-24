import { motion } from 'framer-motion';
import { ExperienceCard } from './components/ExperienceCard';

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
      className="h-screen flex flex-col justify-evenly items-center text-left md:flex-row relative overflow-hidden max-w-full px-10 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        experiences
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary-400">
        <ExperienceCard />

        <ExperienceCard />

        <ExperienceCard />

        <ExperienceCard />
      </div>
    </motion.div>
  );
}
