import { useCallback, useMemo } from "react";
import {
  SOCIAL_PROVIDERS,
  TShareConfig,
  TSocialProvider,
} from "../utils/social-providers";

type TProps = TShareConfig & {
  clipboardTimeout?: number;
};

export function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: TProps) {
  const shareConfig = useMemo(() => {
    return {
      url,
      ...(text && { text }),
      ...(title && { title }),
    };
  }, [url, title, text]);

  const share = useCallback(
    (provider: TSocialProvider) => {
      try {
        const providerConfig = SOCIAL_PROVIDERS[provider];

        if (!providerConfig) {
          throw new Error("Provider not found");
        }

        const shareUrl = providerConfig.shareUrl(shareConfig);

        const shareWindow = window.open(
          shareUrl,
          "_blank",
          "width=600,height=600,location=yes,status=yes"
        );

        return !!shareWindow;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    [shareConfig]
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => {
        return {
          provider: key,
          name: provider.name,
          icon: provider.icon,
          action: () => share(key as TSocialProvider),
        };
      }),
    ],
    [share]
  );

  return { shareButtons };
}
