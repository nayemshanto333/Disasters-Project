// import React, { useState } from "react";
import { Badge } from "../ShareComponents/Badge";
import { NavLink } from "react-router-dom";
import { Container } from "./Container";
import { SearchButton } from "../ShareComponents/SearchButton";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((perv) => !perv);

  useEffect (()=>{
    const bodyClass = document.body.classList;
    isMenuOpen ? bodyClass.add("no-scroll") : bodyClass.remove("no-scroll")

    return ()=> bodyClass.remove("no-scroll");
  },[isMenuOpen])
  return (
    <>
      <nav className="bg-accent h-[91px]  pt-[23px]">
        <Container>
          <div className=" flex justify-between items-center  border border-b-secondary pb-[15px]">
            <div className="flex justify-between items-center">
              <NavLink to="/Dashboard">
                <img src="img/logo.png" alt="Disasters" className="me-0" />
              </NavLink>
            </div>

            {/* link section */}

            <div>
              <ul className="hidden lg:flex [&>li]:pl-[35px] text-sm text-secondary cursor-pointer ">
                <li className="hover:text-primary font-bold">
                  {" "}
                  <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
                </li>
                <li className="hover:text-primary font-bold">Incidents</li>
                <li className="hover:text-primary font-bold">Locations</li>
                <li className="hover:text-primary font-bold">Activities</li>
                <li className="hover:text-primary font-bold">Documents</li>
                <li className="hover:text-primary font-bold">Cypher AI</li>
              </ul>
            </div>

            {/* Profile Section */}

            <div className="hidden lg:flex justify-between items-center gap-[9px]">
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

            {/* toggle menu */}
            <div className="flex  gap-4">
              <button className="block lg:hidden"> 
                <img src="img/profileIcon.png" alt="profile" />
              </button>
              <button className="lg:hidden block me-2" onClick={toggleMenu}>
                <div className="space-y-1">
                  <span className="block w-5 h-0.5 bg-black" />
                  <span className="block w-5 h-0.5 bg-black" />
                  <span className="block w-5 h-0.5 bg-black" />
                </div>
              </button>
            </div>
          </div>
          {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
