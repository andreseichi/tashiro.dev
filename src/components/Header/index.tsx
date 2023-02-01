import Link from "next/link";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { EnvelopeSimple } from "phosphor-react";

const initialLeftAnimation = {
  x: -500,
  opacity: 0,
  scale: 0.5,
};

const animateLeft = {
  x: 0,
  opacity: 1,
  scale: 1,
};

const initialRightAnimation = {
  x: 500,
  opacity: 0,
  scale: 0.5,
};

const animateRight = {
  x: 0,
  opacity: 1,
  scale: 1,
};

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between bg-none py-1 px-3 
      md:p-5 xl:items-center"
    >
      <motion.div
        initial={initialLeftAnimation}
        animate={animateLeft}
        transition={{
          duration: 1.3,
        }}
        className="flex-rowitems-center flex"
      >
        <SocialIcon
          url="https://github.com/andreseichi"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />

        <SocialIcon
          url="https://www.linkedin.com/in/andreseichi/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />

        <SocialIcon
          url="https://twitter.com/andreseichi"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>
      <motion.div
        initial={initialRightAnimation}
        animate={animateRight}
        transition={{
          duration: 1.3,
        }}
      >
        <Link
          href="#contact"
          className="flex transform cursor-pointer flex-row items-center justify-center gap-1 text-gray-400 transition-transform duration-300 hover:scale-110 hover:text-primary"
        >
          <EnvelopeSimple size={32} weight="light" />
          <p className="hidden text-sm uppercase md:inline-flex">Contact Me</p>
        </Link>
      </motion.div>
    </header>
  );
}
