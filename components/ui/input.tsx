import * as React from "react";

import { cn } from "@/lib/utils";
import { TextInput } from "react-native";

type InputProps = React.ComponentProps<typeof TextInput> & {
  isError?: boolean;
};

const Input = ({ className, isError = false, ...props }: InputProps) => {
  return (
    <TextInput
      className={cn(
        `flex h-10 w-full rounded-[10px] border-[0.5px] border-[#A4A4A4] bg-white px-3 py-2 text-black disabled:cursor-not-allowed disabled:opacity-50 ${
          isError &&
          "border-destructive focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-destructive"
        }`,
        className
      )}
      {...props}
    />
  );
};

export { Input };
