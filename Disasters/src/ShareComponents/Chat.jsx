import React from "react";

export const Chat = ({ toggleMenu }) => {
  return (
    <>
      <div className="absolute  h-[475px] w-[331px] rounded-[12px] bg-[#F4F4F5] transform bottom-[96px] xl:bottom-[211px]  right-4 md:right-16 lg:right-20 xl:right-[70px]">
        <div className="bg-orange h-[63px] w-[331px] flex items-center pl-[15px] rounded-t-xl">
          <p className="text-[#fafafa] text-lg font-bold leading-[22.95px] ">
            Chat with Cypher
          </p>
        </div>
        <div className="px-[15px] pt-[27px] space-y-[15px] grid">
          <div className="justify-self-end w-[213px] h-[57px] bg-[#3F3F46] rounded-[7px] text-xs text-white leading-[19px] flex items-center px-[13px] ">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
          <div className=" w-[213px] h-[57px] bg-[#F4F4F5] rounded-[7px] text-xs text-secondary border border-accent leading-[19px] flex items-center px-[13px] ">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
          <div className=" w-[213px] h-[57px] bg-[#F4F4F5] rounded-[7px] text-xs text-secondary border border-accent leading-[19px] flex items-center px-[13px] ">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
          <div className=" justify-self-end  w-[213px] h-[57px] bg-[#27272A] rounded-[7px] text-xs text-white leading-[19px] flex items-center px-[13px] ">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
        </div>
        <div className="px-[15px]">
          <input
            type="text"
            placeholder="Enter your question..."
            className="w-[301px] h-[42px] rounded-md px-3 bg-[#f3f4f6] border border-[#e5e7eb] mt-[15px] mb-2.5"
          />
        </div>
        <div className="flex justify-between items-center px-[15px]">
          <div className="flex items-center gap-[7px] ">
            <img src="img/camera.png" alt="" />
            <img src="img/galary.png" alt="" />
            <img src="img/add.png" alt="" />
          </div>
          <button className="bg-orange w-20 h-[30px] rounded-[15.5px] text-white text-xs leading-[15.3px]">
            Send
          </button>
        </div>
      </div>
      <button
        onClick={toggleMenu}
        className="absolute bg-[#FAFAFA] size-14 lg:size-[77px]  rounded-full shadow-Icon flex justify-center items-center transfrom bottom-6 xl:bottom-[117px] right-4 md:right-16 lg:right-20 xl:right-[70px]"
      >
        <img src="img/close.png" alt="close" />
      </button>
    </>
  );
};
