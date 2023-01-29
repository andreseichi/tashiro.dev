import Image from 'next/image';

import z from 'zod';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import { TechnologyIcon } from '@/components/TechnologyIcon';

const schema = z.object({
  experience: z.object({
    company: z.object({
      name: z.string(),
      imageSrc: z.string().url(),
    }),
    position: z.string(),
    startDate: z.string().transform((value) => dayjs(value).format('MMM YYYY')),
    endDate: z.string().transform((value) => {
      if (value.toLocaleLowerCase() === 'current') {
        return value;
      }

      return dayjs(value).format('MMM YYYY');
    }),
    technologies: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        imageSrc: z.string().url(),
      })
    ),
    summary: z.array(z.string()),
  }),
});

type ExperienceCardProps = z.infer<typeof schema>;

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const validData = schema.parse({
    experience,
  });

  return (
    <article className="relative rounded-xl flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080] opacity-100 md:opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
          className="w-28 h-28 rounded-full xl:w-[140px] xl:h-[140px] object-cover object-center overflow-hidden"
        >
          <Image
            src={experience.company.imageSrc}
            alt="experience"
            width={1280}
            height={1280}
          />
        </motion.div>

        <div className="px-0 md:px-10 self-start">
          <h4 className="text-3xl md:text-4xl font-light">
            {experience.position}
          </h4>

          <p className="font-bold text-xl md:text-2xl mt-1">
            {experience.company.name}
          </p>

          <div className="flex space-x-2 my-2">
            {experience.technologies.map((technology, index) => (
              <TechnologyIcon
                id={technology.id}
                imageSrc={technology.imageSrc}
                name={technology.name}
                key={index}
              />
            ))}
          </div>

          <p className="uppercase py-5 text-gray-300 text-sm md:text-base">
            {validData.experience.startDate} - {validData.experience.endDate}
          </p>

          <ul className="list-disc space-y-3 ml-5 text-base md:ẗext-lg overflow-y-hidden">
            {validData.experience.summary.map((summary) => (
              <li key={summary}>{summary}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
