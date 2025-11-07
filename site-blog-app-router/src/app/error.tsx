"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "../components/ui/button";

type TProps = {
  error: Error;
  onReset: () => void;
};

export default function ErrorBoundary(props: TProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="relative inline-block mb-6">
          <AlertTriangle size={64} className="text-gray-100 mx-auto" />
          <div className="absolute h-1 w-16 bg-red-500 -rotate-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80"></div>
        </div>

        <h2 className="text-heading-xl text-white font-sans mb-2">
          An error occurred
        </h2>
        {props.error.message && (
          <p className="text-gray-200 mb-2 px-4 text-body-md overflow-hidden text-ellipsis max-h-24">
            {props.error.message}
          </p>
        )}

        <Button variant="primary" className="mt-4" onClick={props.onReset}>
          Try again
        </Button>
      </div>
    </div>
  );
}
