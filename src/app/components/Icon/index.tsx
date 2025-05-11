import Image from "next/image";

export type IconName =
  | "capacete"
  | "gps"
  | "like"
  | "logo"
  | "money"
  | "moto"
  | "moto-green"
  | "bag"
  | "profile"
  | "share"
  | "folha"
  | "mix"
  | "edit"
  | "star";

interface IconProps {
  name: IconName;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Icon = ({
  name,
  alt = name,
  width = 24,
  height = 24,
  className,
}: IconProps) => {
  return (
    <Image
      src={`/icons/${name}.webp`}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Icon;
