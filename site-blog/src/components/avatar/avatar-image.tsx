import Image, { ImageProps } from "next/image";

type TProps = ImageProps;

export function AvatarImage({
  src,
  alt,
  width = 40,
  height = 40,
  ...rest
}: TProps) {
  return <Image src={src} alt={alt} width={width} height={height} {...rest} />;
}
