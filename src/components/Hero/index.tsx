import Image from 'next/image';

import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BackgroundCircles } from '../BackgroundCircles';
import Link from 'next/link';

export function Hero() {
  const [text] = useTypewriter({
    words: ['Tashiro', 'Developer', 'trash'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 90,
    deleteSpeed: 60,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <Image
        src="https://avatars.githubusercontent.com/u/40151349"
        className="relative object-cover rounded-full h-32 w-32 mx-auto"
        alt="Tashiro avatar"
        width={128}
        height={128}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
          Fullstack Web Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#fbf" cursorStyle="█" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experiences">
            <button className="heroButton">Experiences</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
