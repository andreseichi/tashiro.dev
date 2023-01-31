import {
  Vuedotjs,
  Typescript,
  ReactJs,
  Cypress,
  Html5,
  CssThree,
  Javascript,
  Php,
  Wordpress,
  Nodedotjs,
  Mongodb,
  Git,
  Express,
  Jest,
  Reactquery,
  Nextdotjs,
  Tailwindcss,
} from '@icons-pack/react-simple-icons';
import Image from 'next/image';

const iconsMap = {
  vue: Vuedotjs,
  typescript: Typescript,
  react: ReactJs,
  reactNative: ReactJs,
  cypress: Cypress,
  wordpress: Wordpress,
  html: Html5,
  css: CssThree,
  javascript: Javascript,
  php: Php,
  nodejs: Nodedotjs,
  mongodb: Mongodb,
  git: Git,
  express: Express,
  jest: Jest,
  reactQuery: Reactquery,
  nextjs: Nextdotjs,
  tailwindcss: Tailwindcss,
};

type IconId = keyof typeof iconsMap;

interface TechnologyIconProps {
  id: IconId | string;
  name: string;
  imageSrc: string;
}

export function TechnologyIcon({ id, name, imageSrc }: TechnologyIconProps) {
  const Icon = iconsMap[id as IconId];

  return (
    <div className="flex items-center h-full justify-center gap-2">
      {Icon ? (
        <Icon
          title={name}
          className="inline-block mx-1 w-full h-full"
          color="default"
        />
      ) : (
        <Image
          className="w-full h-full"
          src={imageSrc}
          alt={name}
          width={24}
          height={24}
        />
      )}
    </div>
  );
}
