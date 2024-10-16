import React from "react";
import { Container } from "./Container";

export const SearchButton = () => {
  return (
    <section className="bg-accent h-[100px] py-[23px] -z-10 ">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-secondary text-xs leading-[15.3px] mb-[6px]">
              Dashboard
            </p>
            <h2 className="text-primary text-[26px] font-bold leading-[33.15px ]">
              Welcome back
            </h2>
          </div>
          <div className="flex  items-center  gap-[14px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search incident"
                className="bg-[#fafafa] text-xs  w-[190px] h-[42px] rounded-[6px] border border-[#E4E4E7] pl-[33px] "
              />
              <span className="absolute  transform top-1/2 -translate-y-1/2   left-[10px] pr-[5px] ">
                <img src="img/Frame.png" alt="" />
              </span>
            </div>
            <div className="w-[148px] h-[42px] bg-[#FAFAFA] px-2.5 py-3 text-xs text-[#A1A1AA] border border-[#E4E4E7] rounded-[6px]">
              Sort By:<span className="text-secondary">Date modified</span>
            </div>
            <button className="bg-orange w-[108px] h-[42px] rounded-[6px] text-xs font-bold  text-[#fafafa]">
              Cypher AI
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
