"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import Button from "../Button/Button";
import Heading from "../Modals/Heading/Heading";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: FC<EmptyStateProps> = ({
  showReset,
  subtitle = "Try changing or removing some of your filters",
  title = "No exact matches",
}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 m-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            handleOnClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
