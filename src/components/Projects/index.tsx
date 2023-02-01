import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { TechnologyIcon } from "../TechnologyIcon";
import data from "@/data/projects.json";

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
      className="relative z-0 mx-auto flex min-h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-3 text-left md:flex-row md:px-10"
    >
      <h3 className="absolute top-14 hidden text-2xl uppercase tracking-[20px] text-gray-500 md:top-20 md:inline">
        Projects
      </h3>

      <div className="z-10 flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll pb-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary md:p-10">
        {data.projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            target="_blank"
            className=" relative w-full flex-shrink-0 cursor-pointer snap-center overflow-hidden rounded-xl bg-gradient-to-r from-[#7928ca] to-[#ff0080] p-[5px] transition-opacity duration-200 md:w-[600px] xl:w-[900px]"
          >
            <div className="flex h-full w-full flex-col items-center gap-7 rounded-xl bg-black p-4">
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
                className="h-28 w-28 overflow-hidden object-cover object-center xl:h-[140px] xl:w-[140px]"
              >
                <Image
                  src={project.image}
                  alt="experience"
                  width={1280}
                  height={1280}
                />
              </motion.div>

              <h4 className="text-xl font-bold tracking-widest">Projeto X</h4>

              <div className="my-2 flex space-x-2">
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

      <div className="absolute top-[30%] left-0 z-0 h-[500px] w-full skew-y-12 bg-primary/20"></div>
    </motion.div>
  );
}
