import Image from "next/image";
import Link from "next/link";

import {
  SiAstro,
  SiDeno,
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

import { myAge } from "@/utils/myAge";

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
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-3
      text-center md:flex-row md:px-10 md:text-left"
    >
      <h3 className="absolute top-14 hidden text-2xl uppercase tracking-[20px] text-gray-500 md:top-20 md:inline">
        About
      </h3>

      <div className="flex flex-col items-center justify-center space-y-2 md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-w-32 md:h-95 relative w-32 flex-shrink-0 overflow-hidden rounded-full
        object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
        >
          <Image
            src="/profile.jpg"
            alt="Tashiro avatar"
            width={1280}
            height={1280}
            priority
          />
        </motion.div>

        <div className="md:pace-y-10 space-y-4 px-0 md:px-8">
          <h4 className="text-lg font-semibold md:text-4xl">
            Hey I&apos;m{" "}
            <span className="underline decoration-primary">André Tashiro</span>!
            🐕
          </h4>

          <article className="space-y-4 text-sm leading-7 md:text-base md:leading-8">
            <p>
              I am a {myAge} years old{" "}
              <span className="text-primary brightness-125">full stack</span>{" "}
              web developer from Brazil 🇧🇷 and passionate about technology.
              I&apos;m currently working at a company in Brazil as a frontend
              developer. Started working with web development in 2019 and since
              then I&apos;ve been in love with it.
            </p>

            <p>
              Although I&apos;m a fullstack developer, I&apos;m more focused on
              the <span className="text-primary brightness-125">frontend</span>{" "}
              side and my favorite Stacks are
              {
                <SiDeno
                  className="mx-1 inline-block"
                  color="default"
                  title="Deno"
                />
              }
              Deno,
              {
                <SiReact
                  className="mx-1 inline"
                  color="default"
                  title="ReactJs"
                />
              }
              React,
              {
                <SiNextdotjs
                  className="mx-1 inline"
                  color="default"
                  title="NextJs"
                />
              }
              Next.js,
              {
                <SiTypescript
                  className="mx-1 inline"
                  color="default"
                  title="Typescript"
                />
              }
              TypeScript,
              {
                <SiTailwindcss
                  className="mx-1 inline-block"
                  color="default"
                  title="TailwindCSS"
                />
              }
              TailwindCSS and
              {
                <SiFramer
                  className="mx-1 inline-block"
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
              Currently in the hype for{" "}
              <Link
                href="https://create.t3.gg"
                className="align-center transform text-primary underline decoration-primary transition-all duration-300 ease-in-out hover:text-lg"
              >
                T3-Stack
                <Image
                  src="https://avatars.githubusercontent.com/u/108266839?s=200&v=4"
                  alt="T3-Stack logo"
                  width={18}
                  height={18}
                  className="mx-1 inline-block rounded-full"
                />
              </Link>
              and{" "}
              <Link
                href="https://astro.build/"
                className="align-center transform text-primary underline decoration-primary transition-all duration-300 ease-in-out hover:text-lg"
              >
                Astro
                <SiAstro
                  className="mx-1 inline"
                  color="default"
                  title="Astro"
                />
              </Link>
            </p>
          </article>
        </div>
      </div>
    </motion.div>
  );
}
