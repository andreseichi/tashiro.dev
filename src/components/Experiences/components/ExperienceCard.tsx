import Image from 'next/image';

import { motion } from 'framer-motion';

export function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center gap-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top overflow-hidden"
      >
        <Image src="/profile.jpg" alt="experience" width={1280} height={1280} />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">cargo experiencia</h4>

        <p className="font-bold text-2xl mt-1">empresa</p>

        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="/profile.jpg"
            alt="experience"
            width={1280}
            height={1280}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="/profile.jpg"
            alt="experience"
            width={1280}
            height={1280}
          />
        </div>

        <p className="uppercase py-5 text-gray-300">started work at ended</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa
            dolorum asperiores ad ducimus recusandae. Quod pariatur quaerat
            ratione quas, recusandae delectus quo placeat totam nulla porro
            consectetur nesciunt in.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa
            dolorum asperiores ad ducimus recusandae. Quod pariatur quaerat
            ratione quas, recusandae delectus quo placeat totam nulla porro
            consectetur nesciunt in.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa
            dolorum asperiores ad ducimus recusandae. Quod pariatur quaerat
            ratione quas, recusandae delectus quo placeat totam nulla porro
            consectetur nesciunt in.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa
            dolorum asperiores ad ducimus recusandae. Quod pariatur quaerat
            ratione quas, recusandae delectus quo placeat totam nulla porro
            consectetur nesciunt in.
          </li>
        </ul>
      </div>
    </article>
  );
}
