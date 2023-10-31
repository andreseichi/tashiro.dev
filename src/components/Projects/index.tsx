import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { TechnologyIcon } from "../TechnologyIcon";
import data from "@/data/projects.json";
import { Project } from "./components/Project";

export function Projects() {
  const sortedProjects = data.projects.slice().reverse();

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
        {sortedProjects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>

      <div className="absolute top-[30%] left-0 z-0 h-[500px] w-full skew-y-12 bg-primary/20"></div>
    </motion.div>
  );
}
