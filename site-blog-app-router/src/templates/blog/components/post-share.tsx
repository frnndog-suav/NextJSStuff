"use client";

import { Button } from "@/src/components/ui/button";
import { useShare } from "@/src/hooks";

type TProps = {
  url: string;
  title: string;
  description: string;
};

export function PostShare(props: TProps) {
  const { shareButtons } = useShare({
    text: props.description,
    title: props.title,
    url: props.url,
  });

  return (
    <aside className="space-y-6">
      <div className="rounded-lg bg-gray-700 px-4 md:p-6">
        <h2 className="hidden md:block mb-4 text-heading-xs text-gray-100">
          Compartilhar
        </h2>

        <div className="flex justify-between md:flex-col gap-2">
          {shareButtons.map((provider) => (
            <Button
              variant="outline"
              key={provider.provider}
              onClick={() => provider.action()}
              className=" w-fit md:w-full justify-start gap-2"
            >
              {provider.icon}
              <span className="hidden md:block">{provider.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}
