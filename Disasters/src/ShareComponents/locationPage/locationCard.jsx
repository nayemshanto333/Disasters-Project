import React from "react";

export const LocationCard = ({img,title,location,price }) => {
  return (
    <div className="w-[214.2px] rounded-[7px] hover:scale-105 transition-all duration-150   relative">
      <div>
        <img className="w-full h-[177.1px]" src={img} alt={title} />
      </div>
      <div className="py-5">
        <h1 className="font-bold text-primary text-sm leading-[21px]">
         {title}
        </h1>
        <p className="text-xs text-secondary  leading-[21px]">
          {location}
        </p>
        <p className="font-bold text-primary text-sm leading-[21px]">
          {price}
        </p>
      </div>

      <div className=" absolute w-[67.7px] h-[25.2px] rounded-[28px] bg-[#fafafa] flex justify-center items-center gap-[5px] transform top-[7px] right-[7px] ">
        <img src="img/building.png" alt="icon" />
        <p className="text-[10px] font-bold leading-[21px] text-[#18181b]">
          Building
        </p>
      </div>
    </div>
  );
};

 
