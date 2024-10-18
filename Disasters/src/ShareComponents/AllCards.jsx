import React from "react";
import { cardData } from "../lib/db/Data";
import { Card } from "./Card";
import { cn } from "../lib/utils/cn";

export const AllCards = ({children, className}) => {
  return (
    <div className={cn("z-0 pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  place-items-center gap-[25px]  relative", className)}>
      {cardData.map((props, i) => (
        <Card key={i} {...props} />
      ))}
      {children}
    </div>
  );
};
