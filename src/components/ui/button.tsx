import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-center transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "ios:shadow-base bg-[#FFCA0E] hover:bg-[#FFCA0E]/80 web:shadow-base",
        destructive:
          "ios:shadow-base bg-destructive text-destructive-foreground hover:bg-destructive/90 web:shadow-base",
        outline:
          "border-[0.5px] border-[#A4A4A4] text-[11px] text-[#A4A4A4] hover:bg-accent hover:text-accent-foreground",
        secondary:
          "ios:shadow-base bg-white text-[#A4A4A4] hover:bg-white/40 web:shadow-base",
        ghost: "text-sm text-[#A4A4A4] shadow-none hover:bg-accent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 rounded-[90px] px-4 py-2",
        lg: "h-[51px] rounded-2xl px-2 py-4",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const buttonTextVariants = cva("text-base text-white");

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type buttonTextVariantsProps = VariantProps<typeof buttonTextVariants>;

type ButtonProps = ComponentProps<typeof TouchableOpacity> &
  ButtonVariantProps &
  buttonTextVariantsProps;

const Button = forwardRef<View, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        <Text className={cn(buttonTextVariants())}>{children}</Text>
      </TouchableOpacity>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonTextVariants, buttonVariants };
