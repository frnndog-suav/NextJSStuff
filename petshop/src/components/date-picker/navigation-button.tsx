import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider } from '../ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { Button } from '../ui/button';

type TProps = {
  tooltipText: string;
  children: React.ReactNode;
  onClick: () => void;
};

export function NavigationButton({ children, onClick, tooltipText }: TProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={onClick}
            className="h-12 w-9 bg-transparent border-border-primary text-content-primary hover:bg-background-tertiary hover:border-border-secondary hover:text-content-primary focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-border-brand focus:border-border-brand focus-visible:"
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-background-tertiary">
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
