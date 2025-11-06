import { TShareConfig } from "../utils/social-providers";

type TProps = TShareConfig & {
  clipboardTimeout?: number;
};

export function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: TProps) {
  const shareConfig = {
    url,
    ...(text && { text }),
    ...(title && { title }),
  };

  return {};
}
