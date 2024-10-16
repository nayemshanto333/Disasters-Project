import React from "react";

export const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className="lg:hidden block top-0 left-0 w-full h-screen bg-white z-50 px-5 py-5 overflow-y-hidden">
      <div className="flex justify-between items-center pb-6">
        <img src="img/logo.png" alt="Disasters" />
        <button
          onClick={toggleMenu}
          className=" bg-[#FAFAFA] size-14 rounded-full shadow-Icon flex justify-center items-center transfrom top-3  right-3"
        >
          <img src="img/close.png" alt="close" />
        </button>
      </div>
      <div>
        <ul className="flex flex-col space-y-4 text-sm text-secondary cursor-pointer ">
          <li>Dashboard </li>
          <li>Incidents</li>
          <li>Locations</li>
          <li>Activities</li>
          <li>Documents</li>
          <li>Cypher AI</li>
        </ul>
      </div>
    </div>
  );
};
