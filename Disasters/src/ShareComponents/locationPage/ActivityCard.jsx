import React from "react";

export function ActivitysCard({ img, name, location, date, price }) {
  return (
    <div className="bg-[#F4F4F5] w-[679px] h-[108px] rounded-[10px] py-[15px] px-2.5 gap-[17px] flex items-center my-[15px]">
      <img src={img} alt="image" />
      <div className="py-[22px]">
        <h5 className="text-sm sm:text-base font-bold text-primary">{name}</h5>
        <p className="text-xs sm:text-sm text-secondary leading-[30px] ">{location} . {date} </p>
        <h5 className="text-sm sm:text-base font-bold text-primary ">{price}</h5>
      </div>
    </div>
  );
}
