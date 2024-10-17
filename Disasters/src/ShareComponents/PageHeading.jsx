import React from "react";
import { cn } from "../lib/utils/cn";

export const PageHeading = ({children, className}) => {
  return (
    <h2 className={cn("text-primary text-[26px] font-bold leading-[33.15px]" , className)}>
      {children}
    </h2>
  );
};
