import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export const Container = ({ className, fluid, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto px-4 w-full",
        fluid ? "max-width-none" : "max-width-[1280px]",
        className,
      )}
      {...props}
    />
  );
};
