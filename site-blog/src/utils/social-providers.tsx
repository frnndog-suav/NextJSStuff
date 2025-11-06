import { Facebook, Linkedin, Slack } from "lucide-react";

export type TSocialProvider = "linkedin" | "facebook" | "slack";

export type TShareConfig = {
  url: string;
  text?: string;
  title?: string;
};

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: "LinkedIn",
    icon: <Linkedin className="h-4 w-4" />,
    shareUrl: (config: TShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        config.url
      )}`,
  },
  facebook: {
    name: "Facebook",
    icon: <Facebook className="h-4 w-4" />,
    shareUrl: (config: TShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        config.url
      )}`,
  },
  slack: {
    name: "Slack",
    icon: <Slack className="h-4 w-4" />,
    shareUrl: (config: TShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(config.url)}&text=${
        config.title || ""
      }`,
  },
};
