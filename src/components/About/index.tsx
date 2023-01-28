import Image from 'next/image';
import Link from 'next/link';

import {
  Astro,
  Deno,
  Framer,
  Nextdotjs,
  ReactJs,
  Tailwindcss,
  Typescript,
} from '@icons-pack/react-simple-icons';
import { motion } from 'framer-motion';

import { myAge } from '@/utils/myAge';

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
      className="h-screen relative flex flex-col text-center px-3 justify-evenly items-center mx-auto
      md:text-left md:flex-row md:px-10 max-w-7xl"
    >
      <h3 className="absolute top-14 hidden md:inline md:top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="flex flex-col space-y-2 md:flex-row justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative object-cover flex-shrink-0 w-32 h-w-32 rounded-full overflow-hidden
        md:mb-0 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        >
          <Image
            src="/profile.jpg"
            alt="Tashiro avatar"
            width={1280}
            height={1280}
          />
        </motion.div>

        <div className="space-y-4 px-0 md:pace-y-10 md:px-8">
          <h4 className="text-lg md:text-4xl font-semibold">
            Hey I&apos;m{' '}
            <span className="underline decoration-primary">André Tashiro</span>!
            🐕
          </h4>

          <article className="text-sm md:text-base leading-7 md:leading-8 space-y-4">
            <p>
              I am a {myAge} years old{' '}
              <span className="text-primary brightness-125">full stack</span>{' '}
              web developer from Brazil 🇧🇷 and passionate about technology.
              I&apos;m currently working at a company in Brazil as a frontend
              developer. Started working with web development in 2019 and since
              then I&apos;ve been in love with it.
            </p>

            <p>
              Although I&apos;m a fullstack developer, I&apos;m more focused on
              the <span className="text-primary brightness-125">frontend</span>{' '}
              side and my favorite Stacks are
              {
                <Deno
                  className="inline-block mx-1"
                  color="default"
                  title="Deno"
                />
              }
              Deno,
              {
                <ReactJs
                  className="inline mx-1"
                  color="default"
                  title="ReactJs"
                />
              }
              React,
              {
                <Nextdotjs
                  className="inline mx-1"
                  color="default"
                  title="NextJs"
                />
              }
              Next.js,
              {
                <Typescript
                  className="inline mx-1"
                  color="default"
                  title="Typescript"
                />
              }
              TypeScript,
              {
                <Tailwindcss
                  className="inline-block mx-1"
                  color="default"
                  title="TailwindCSS"
                />
              }
              TailwindCSS and
              {
                <Framer
                  className="inline-block mx-1"
                  color="default"
                  title="Framer"
                />
              }
              Framer.
            </p>

            <p>
              Love to contribute to Open Source, especially with translations,
              so more people have access to new technologies.
            </p>

            <p>
              Currently in the hype for{' '}
              <Link
                href="https://create.t3.gg"
                className="underline decoration-primary text-primary align-center transform hover:text-lg transition-all duration-300 ease-in-out"
              >
                T3-Stack
                <Image
                  src="https://avatars.githubusercontent.com/u/108266839?s=200&v=4"
                  alt="T3-Stack logo"
                  width={18}
                  height={18}
                  className="inline-block rounded-full mx-1"
                />
              </Link>
              and{' '}
              <Link
                href="https://astro.build/"
                className="underline decoration-primary text-primary align-center transform hover:text-lg transition-all duration-300 ease-in-out"
              >
                Astro
                <Astro className="inline mx-1" color="default" title="Astro" />
              </Link>
            </p>
          </article>
        </div>
      </div>
    </motion.div>
  );
}
