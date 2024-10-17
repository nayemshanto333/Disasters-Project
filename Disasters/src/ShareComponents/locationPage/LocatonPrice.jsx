import React from "react";

export const LocationPrice = ({img, subtitle, title}) => {
  return (
    <div className="flex justify-start items-center gap-[15px]">
      <div className="flex justify-center items-center size-[37px] rounded-full bg-[#F4F4F5]">
        <img src={img} alt="icon" />
      </div>
      <div>
        <p className="text-sm text-[#6B7280] leading-[22px]">{subtitle}</p>
        <h3 className="text-xl text-[#09090B] leading-[29px] font-bold">
          {title}
        </h3>
      </div>
    </div>
  );
};

