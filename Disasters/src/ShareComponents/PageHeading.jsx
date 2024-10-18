import React from "react";
import { cn } from "../lib/utils/cn";

export const PageHeading = ({children, className}) => {
  return (
    <h2 className={cn("text-primary lg:text-[26px] font-bold lg:leading-[33.15px]" , className)}>
      {children}
    </h2>
  );
};
