import React from "react";

export const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center  gap-[14px] ">
      <div className="relative">
        <input
          type="text"
          placeholder="Search incident"
          className="bg-[#fafafa] text-xs w-full md:w-[190px] h-[42px] rounded-[6px] border border-[#E4E4E7] pl-[33px] "
        />
        <span className="absolute  transform top-1/2 -translate-y-1/2   left-[10px] pr-[5px] ">
          <img src="img/Frame.png" alt="" />
        </span>
      </div>
      <div className="w-full md:w-[148px] h-[42px] bg-[#FAFAFA] px-2.5 py-3 text-xs text-[#A1A1AA] border border-[#E4E4E7] rounded-[6px]">
        Sort By:<span className="text-secondary">Date modified</span>
      </div>
    </div>
  );
};


