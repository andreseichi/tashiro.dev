import Image from 'next/image';

import { motion } from 'framer-motion';

export function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative object-cover -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] overflow-hidden"
      >
        <Image
          src="/profile.jpg"
          alt="Tashiro avatar"
          width={1280}
          height={1280}
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          More about{' '}
          <span className="underline decoration-[#F7AB0A]/50">me</span>
        </h4>

        <p className="text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          illo vitae sunt asperiores impedit in eveniet libero at, tempore
          molestiae tenetur ut molestias error itaque nemo quia atque
          repudiandae aspernatur? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque excepturi, ipsum, dignissimos ea qui iste
          voluptas velit omnis nihil sunt consectetur ad. Possimus sed alias ea
          sequi neque adipisci. Commodi? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptatem magni ea ex nisi nostrum illo? Quis non
          totam incidunt ut sequi, voluptatibus ad, tempora animi placeat
          blanditiis, unde quidem alias!
        </p>
      </div>
    </motion.div>
  );
}
