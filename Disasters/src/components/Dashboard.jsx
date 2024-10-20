import React, { useState } from "react";
import { Chat } from "../ShareComponents/Chat";
import { Container } from "../ShareComponents/Container";
import { SearchButton } from "../ShareComponents/SearchButton.jsx";
import { AllCards } from "../ShareComponents/AllCards.jsx";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((perv) => !perv);
  return (
    <section>
     
      <SearchButton />
      <Container>
        <AllCards />

        {isMenuOpen && <Chat toggleMenu={toggleMenu} />}

        <button
          onClick={toggleMenu}
          className={`fixed bg-orange size-14 lg:size-[77px]  rounded-full  flex justify-center items-center transfrom bottom-6 xl:bottom-[117px] right-4 md:right-16 lg:right-20 xl:right-[70px] ${isMenuOpen ? "hidden" : "block"}`}
        >
          <img src="img/C.png" alt="close" />
        </button>
      </Container>
     
    </section>
  );
};

export default Dashboard;
