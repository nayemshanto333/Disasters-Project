import React from 'react';

export const GetCard = ({img, title, details}) => {
  return (
    <div className="w-[235px] h-[270px] rounded-[10px] bg-[#f4f4f5] border border-accent px-5 py-[25px] ">
    <img src={img} alt="icon" className="size-11" />
    <div className="pt-[68px] space-y-[22px]">
      <h4 className="text-primary text-xl font-bold leading-[29px]">{title}</h4>
      <p className="text-secondary text-sm leading-[22px]" >{details}</p>
    </div>
  </div>
  );
};
