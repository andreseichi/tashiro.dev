import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { TechnologyIcon } from '../TechnologyIcon';
import data from '@/data/projects.json';

export function Projects() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col justify-evenly items-center text-left md:flex-row relative overflow-hidden max-w-full px-3 md:px-10 mx-auto z-0"
    >
      <h3 className="absolute top-14 hidden md:inline md:top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll pb-10 md:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary z-10">
        {data.projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            target="_blank"
            className=" relative rounded-xl flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080] cursor-pointer transition-opacity duration-200 overflow-hidden"
          >
            <div className="flex flex-col gap-7 items-center rounded-xl w-full h-full bg-black p-4">
              <motion.div
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="w-28 h-28 xl:w-[140px] xl:h-[140px] object-cover object-center overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt="experience"
                  width={1280}
                  height={1280}
                />
              </motion.div>

              <h4 className="tracking-widest text-xl font-bold">Projeto X</h4>

              <div className="flex space-x-2 my-2">
                {project.technologies.map((technology, index) => (
                  <TechnologyIcon
                    id={technology.id}
                    imageSrc={technology.imageSrc}
                    name={technology.name}
                    key={index}
                  />
                ))}
              </div>

              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae possimus tenetur maiores suscipit ipsa quo nostrum
                ratione consequuntur optio accusamus? Sunt, modi enim. Officia
                id dicta dolorum neque tempore doloremque.
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-primary/20 left-0 h-[500px] skew-y-12 z-0"></div>
    </motion.div>
  );
}
