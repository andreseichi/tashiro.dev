import Image from "next/image";

import { TechnologyIcon } from "@/components/TechnologyIcon";
import { experienceCardSchema } from "@/schemas/experienceCard";
import { ExperienceCard } from "@/types/experienceCard";
import { motion } from "framer-motion";

export function ExperienceCard({ experience }: ExperienceCard) {
  const validData = experienceCardSchema.parse({
    experience,
  });

  return (
    <article className="relative w-full flex-shrink-0 cursor-pointer snap-center overflow-hidden rounded-xl bg-gradient-to-r from-[#7928ca] to-[#ff0080] p-[5px] opacity-100 transition-opacity duration-200 hover:opacity-100 md:w-[600px] md:opacity-40 xl:w-[900px]">
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
          className="h-28 w-28 overflow-hidden rounded-full object-cover object-center xl:h-[140px] xl:w-[140px]"
        >
          <Image
            src={experience.company.imageSrc}
            alt="experience"
            width={1280}
            height={1280}
          />
        </motion.div>

        <div className="self-start px-0 md:px-10">
          <h4 className="text-3xl font-light md:text-4xl">
            {experience.position}
          </h4>

          <p className="mt-1 text-xl font-bold md:text-2xl">
            {experience.company.name}
          </p>

          <div className="my-2 flex space-x-2">
            {experience.technologies.map((technology, index) => (
              <TechnologyIcon
                id={technology.id}
                imageSrc={technology.imageSrc}
                name={technology.name}
                key={index}
              />
            ))}
          </div>

          <p className="py-5 text-sm uppercase text-gray-300 md:text-base">
            {validData.experience.startDate} - {validData.experience.endDate}
          </p>

          <ul className="md:ẗext-lg ml-5 list-disc space-y-3 text-base overflow-y-hidden">
            {validData.experience.summary.map((summary) => (
              <li key={summary}>{summary}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
