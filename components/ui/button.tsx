import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Text, TouchableOpacity } from "react-native";

const buttonVariants = cva(
  "inline-flex items-center text-center justify-center transition-colors disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#FFCA0E] shadow-base android:shadow-black hover:bg-[#FFCA0E]/80",
        destructive:
          "bg-destructive shadow-base android:shadow-black text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-[0.5px] text-[#A4A4A4] text-[11px] border-[#A4A4A4] hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-white shadow-base android:shadow-black text-[#A4A4A4] hover:bg-white/40",
        ghost: "hover:bg-accent shadow-none text-sm text-[#A4A4A4]",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4 rounded-[90px]",
        lg: "h-[51px] py-4 px-2 rounded-2xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonTextVariants = cva("text-white text-base");

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type buttonTextVariantsProps = VariantProps<typeof buttonTextVariants>;

type ButtonProps = ComponentProps<typeof TouchableOpacity> &
  ButtonVariantProps &
  buttonTextVariantsProps;

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <Text className={cn(buttonTextVariants())}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export { Button, buttonTextVariants, buttonVariants };
