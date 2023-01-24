import { motion } from 'framer-motion';
import Image from 'next/image';

export function Projects() {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col justify-evenly items-center text-left md:flex-row relative overflow-hidden max-w-full px-10 mx-auto z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative overflow-x-scroll overflow-y-hidden w-full flex snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex flex-col gap-5 items-center justify-center p-20 md:p-44 flex-shrink-0 snap-center h-screen"
          >
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="relative object-cover flex-shrink-0 max-w-[320px] max-h-[320px]
              xl:max-w-[420px] xl:max-h-[420px] overflow-hidden"
            >
              <Image
                src="/profile.jpg"
                alt="project"
                width={1280}
                height={1280}
              />
            </motion.div>

            <div className="gap-10 px-0 md:px-10 max-w-6xl flex flex-col">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project
                </span>{' '}
                something
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores error, placeat reprehenderit, veritatis molestias
                sapiente rerum perferendis quia quidem quos, nulla sint quis
                autem! Aliquid architecto obcaecati possimus natus labore.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12"></div>
    </motion.div>
  );
}
