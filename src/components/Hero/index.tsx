import Image from "next/image";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "../BackgroundCircles";
import Link from "next/link";

export function Hero() {
  const [text] = useTypewriter({
    words: ["Tashiro", "Developer", "Gamer", "Bad at Valorant"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 90,
    deleteSpeed: 60,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />

      <Image
        src="https://avatars.githubusercontent.com/u/40151349"
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
        alt="Tashiro avatar"
        width={128}
        height={128}
      />

      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[12px] text-gray-500">
          Fullstack Web Developer
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#85D5CF" cursorStyle="█" />
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
