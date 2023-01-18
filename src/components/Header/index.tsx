import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

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
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-100 xl:items-center">
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
        />

        <SocialIcon
          url="https://www.linkedin.com/in/andreseichi/"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://twitter.com/andreseichi"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={initialRightAnimation}
        animate={animateRight}
        transition={{
          duration: 1.3,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />

        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Contact Me
        </p>
      </motion.div>
    </header>
  );
}
