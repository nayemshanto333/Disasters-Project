import React from "react";
import { NavLink } from "react-router-dom";

export const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className=" lg:hidden block absolute top-0 left-0 w-[300px] h-screen bg-white z-50 px-5 py-5 overflow-y-hidden">
      <div className="flex justify-between items-center pb-6">
        <img src="img/logo.png" alt="Disasters" />
        <button
          onClick={toggleMenu}
          className="  size-14 rounded-full  flex justify-center items-center transfrom top-3  right-3"
        >
          <img src="img/close.png" alt="close" />
        </button>
      </div>
      <div>
        <ul className="flex flex-col space-y-4 text-sm text-secondary cursor-pointer ">
          <li className="hover:text-primary font-bold">
            {" "}
            <NavLink
              to="/Dashboard"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold " : "text-secondary "
              }
            >
              Dashboard
            </NavLink>{" "}
          </li>
          <li className="hover:text-primary font-bold">
            {" "}
            <NavLink
              to="/Incidents"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold " : "text-secondary "
              }
            >
              Incidents
            </NavLink>{" "}
          </li>
          <li className="hover:text-primary font-bold">
            {" "}
            <NavLink
              to="/Locations"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold " : "text-secondary "
              }
            >
              Locations
            </NavLink>{" "}
          </li>
          <li className="hover:text-primary font-bold">
            {" "}
            <NavLink>Activities</NavLink>{" "}
          </li>
          <li className="hover:text-primary font-bold">
            {" "}
            <NavLink>Documents</NavLink>{" "}
          </li>
          <li className="hover:text-primary font-bold">
            {" "}
            <NavLink>Cypher AI</NavLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
