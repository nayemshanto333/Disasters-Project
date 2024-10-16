import React from "react";

export const Card = ({ img, title, location, price }) => {
  return (
    <div className=" rounded-[10px] mb-5  relative">
      <div>
        <img className="w-full h-[253px]" src={img} alt={title} />
      </div>
      <div className="py-5">
        <h1 className="font-bold text-primary text-base leading-[30px]">
          {title}
        </h1>
        <p className="text-sm text-secondary  leading-[30px]">{location}</p>
        <p className="font-bold text-primary text-base leading-[30px]">
          {price}
        </p>
      </div>

      <div className=" absolute w-[87px] h-9 rounded-[40px] bg-[#fafafa] flex justify-center items-center gap-[5px] transform top-2.5 right-2.5">
        <img src="img/weather.png" alt="weather" />
        <p className="text-xs font-bold leading-[30px] text-[#18181b]">
          Blizzard
        </p>
      </div>
    </div>
  );
};
