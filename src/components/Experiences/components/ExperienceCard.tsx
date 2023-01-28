import Image from 'next/image';

import { motion } from 'framer-motion';

export function ExperienceCard() {
  return (
    <article className="relative rounded-xl flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080] opacity-100 md:opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="flex flex-col gap-7 items-center rounded-xl w-full bg-black p-4">
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
            src="/profile.jpg"
            alt="experience"
            width={1280}
            height={1280}
          />
        </motion.div>

        <div className="px-0 md:px-10">
          <h4 className="text-3xl md:text-4xl font-light">cargo experiencia</h4>

          <p className="font-bold text-xl md:text-2xl mt-1">empresa</p>

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

          <p className="uppercase py-5 text-gray-300 text-sm md:text-base">
            started work at ended
          </p>

          <ul className="list-disc space-y-3 ml-5 text-base md:ẗext-lg overflow-y-hidden">
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              ipsam animi eos hic velit at dicta, sed commodi est quidem.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              ipsam animi eos hic velit at dicta, sed commodi est quidem.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              ipsam animi eos hic velit at dicta, sed commodi est quidem.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
