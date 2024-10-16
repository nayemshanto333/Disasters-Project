import React, { useState } from "react";
import { Badge } from "../ShareComponents/Badge";
import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils/cn";

const Navbar = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <nav>
        <div className="bg-accent h-[191px] px-[85.5px] py-[23px]">
          <div className="flex justify-between items-center  border border-b-[#3f3f46] pb-[15px]">
            <NavLink to="/">
              <img src="img/logo.png" alt="Disasters" />
            </NavLink>

            {/* link section */}

            <div>
              <ul className="flex [&>li]:pl-[35px] text-sm text-secondary cursor-pointer ">
                <li className="hover:text-primary font-bold">Dashboard</li>
                <li className="hover:text-primary font-bold">Incidents</li>
                <li className="hover:text-primary font-bold">Locations</li>
                <li className="hover:text-primary font-bold">Activities</li>
                <li className="hover:text-primary font-bold">Documents</li>
                <li className="hover:text-primary font-bold">Cypher AI</li>
              </ul>
              {/* <div className="mt-[26.5px]">
                <div className=" ">
                  {Array.from(Array(6).keys()).map((el) => (
                    <div
                      keys={el}
                      className={cn(
                        "w-[80px] h-[3px] rounded-[10px] bg-transparent",
                        active == el && "bg-primary"
                      )}
                    />
                  ))}
                </div>
              </div> */}
            </div>

            {/* Profile Section */}

            <div className="flex justify-between items-center gap-[9px]">
              <Badge />

              <button>
                <img src="img/profileIcon.png" alt="profile" />
              </button>
              <div>
                <h4 className="text-base font-semibold text-[#a1a1aa] leading-[20.4px]">
                  Usman Zafar
                </h4>
                <p className="text-sm text-[#a1a1aa] leading-[17.85px]">
                  usmanzafar@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Welcome Section */}
          
          <div>
            <div className="flex justify-between items-center mt-8">
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
