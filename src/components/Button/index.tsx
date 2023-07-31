import React from "react";
import { tv } from "tailwind-variants";

const buttonTheme = {
  base: "font-medium bg-blue-500 text-white rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
      test: "bg-red text-white",
      test1: "bg-blue text-white",
      test2: "bg-orange text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
};

const button = tv({
  ...buttonTheme,
});

type ButtonProps = {
  children: React.ReactNode;
  size?: keyof typeof buttonTheme.variants.size;
  color: keyof typeof buttonTheme.variants.color;
};

export const Button = ({
  children,
  size = "sm",
  color = "primary",
}: ButtonProps) => (
  <button className={button({ size, color })}>{children}</button>
);
