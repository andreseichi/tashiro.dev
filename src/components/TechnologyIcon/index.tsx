import {
  SiVuedotjs,
  SiTypescript,
  SiReact,
  SiCypress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiWordpress,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiExpress,
  SiJest,
  SiReactquery,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiGitlab,
  SiVitest,
  SiPython,
  SiGraphql,
  SiPostgresql,
  SiZod,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";

const iconsMap = {
  vue: SiVuedotjs,
  typescript: SiTypescript,
  react: SiReact,
  reactNative: SiReact,
  cypress: SiCypress,
  wordpress: SiWordpress,
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  php: SiPhp,
  nodejs: SiNodedotjs,
  mongodb: SiMongodb,
  git: SiGit,
  express: SiExpress,
  jest: SiJest,
  reactQuery: SiReactquery,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  styledComponents: SiStyledcomponents,
  gitlab: SiGitlab,
  vitest: SiVitest,
  python: SiPython,
  graphql: SiGraphql,
  postgresql: SiPostgresql,
  zod: SiZod,
};

type IconId = keyof typeof iconsMap;

interface TechnologyIconProps {
  id: IconId | string;
  name: string;
  imageSrc?: string;
}

export function TechnologyIcon({
  id,
  name,
  imageSrc = "",
}: TechnologyIconProps) {
  const Icon = iconsMap[id as IconId];

  return (
    <div className="flex h-full items-center justify-center gap-2">
      {Icon ? (
        <Icon
          title={name}
          className="mx-1 inline-block h-full w-full"
          color="default"
        />
      ) : (
        <Image
          className="h-full w-full"
          src={imageSrc}
          alt={name}
          width={24}
          height={24}
        />
      )}
    </div>
  );
}
