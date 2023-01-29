import {
  Vuedotjs,
  Typescript,
  ReactJs,
  Cypress,
} from '@icons-pack/react-simple-icons';
import Image from 'next/image';

const iconsMap = {
  vue: Vuedotjs,
  typescript: Typescript,
  react: ReactJs,
  reactNative: ReactJs,
  cypress: Cypress,
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
    <div className="flex items-center justify-center gap-2">
      {Icon ? (
        <Icon title={name} className="inline-block mx-1" color="default" />
      ) : (
        <Image
          className="rounded-full bg-white"
          src={imageSrc}
          alt={name}
          width={24}
          height={24}
        />
      )}
    </div>
  );
}
