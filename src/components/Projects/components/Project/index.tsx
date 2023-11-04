import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Project } from "@/types/project";
import { TechnologyIcon } from "@/components/TechnologyIcon";

export function Project({ project }: Project) {
  return (
    <Link
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
          className="overflow-hidden object-cover object-center"
        >
          <Image
            src={project.image}
            alt="project image"
            width={640}
            height={640}
            className="h-full w-full object-cover object-center"
          />
        </motion.div>

        <h4 className="text-xl font-bold tracking-widest">{project.name}</h4>

        <div className="my-2 flex space-x-2">
          {project.technologies.map((technology, index) => (
            <div
              key={index}
              className={`h-[40px] w-[40px] rounded-full p-1 ${
                technology?.backgroundColor ?? "bg-gray-800"
              }`}
            >
              <TechnologyIcon
                id={technology.id}
                imageSrc={technology.imageSrc}
                name={technology.name}
                key={index}
              />
            </div>
          ))}
        </div>

        <p className="text-center">{project.description}</p>
      </div>
    </Link>
  );
}
