import { motion } from 'framer-motion';
import Image from 'next/image';

export function Skill() {
  return (
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
          className="rounded-full overflow-hidden border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        >
          <Image
            src="/profile.jpg"
            alt="experience"
            width={1280}
            height={1280}
          />
        </motion.div>
      </div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
