import React from "react";
import { cn } from "../lib/utils/cn";

export const BreadCrumbs = ({children , className}) => {
  return (
    <p className={cn("text-secondary text-xs leading-[15.3px] mb-[6px]", className)}>
      {children}
    </p>
  );
};

 
