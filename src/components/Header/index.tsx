import Link from 'next/link';

import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { EnvelopeSimple } from 'phosphor-react';

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
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-50 xl:items-center">
      <motion.div
        initial={initialLeftAnimation}
        animate={animateLeft}
        transition={{
          duration: 1.3,
        }}
        className="flex flex-rowitems-center"
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
          className="flex flex-row items-center justify-center gap-1 text-gray-400 hover:text-primary transform hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <EnvelopeSimple size={32} weight="light" />
          <p className="uppercase hidden md:inline-flex text-sm">Contact Me</p>
        </Link>
      </motion.div>
    </header>
  );
}
