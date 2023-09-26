import { IconMap } from "@/utils/iconMap";
import Image from "next/image";

interface TechnologyIconProps {
  id: string;
  name: string;
  imageSrc?: string;
}

export function TechnologyIcon({
  id,
  name,
  imageSrc = "",
}: TechnologyIconProps) {
  const Icon = IconMap(id);

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
