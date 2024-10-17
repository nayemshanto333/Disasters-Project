import React from "react";
import { cn } from "../lib/utils/cn";

export const Button = ({children , className}) => {
  return (
    <button className={cn("bg-orange w-[108px] h-[42px] rounded-[6px] text-xs font-bold  text-[#fafafa]",className)}>
      {children}
    </button>
  );
};

 
