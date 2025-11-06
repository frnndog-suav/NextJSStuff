import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type TAvatarSize = "xs" | "sm";

type TProps = Omit<ImageProps, "width" | "height"> & {
  size?: TAvatarSize;
};

const avatarSize = {
  xs: "h-5 w-5",
  sm: "h-9 w-9",
};

export function AvatarImage({ src, alt, size = "xs", ...rest }: TProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border-blue-200 border-[1px]",
        avatarSize[size]
      )}
    >
      <Image src={src} alt={alt} fill {...rest} />
    </div>
  );
}
