import React from "react";
import Navbar from "../ShareComponents/Navbar";
import { Card } from "../ShareComponents/Card";
import { cardData } from "../lib/db/Data.js";
import { Chat } from "../ShareComponents/Chat";
import { Container } from "../ShareComponents/Container";
import { SearchButton } from "../ShareComponents/SearchButton.jsx";

const Dashboard = () => {
  return (
    <section>
      <Navbar />
      <SearchButton />
      <Container>
        <div className=" pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  place-items-center gap-[25px]  relative">
          {cardData.map((props, i) => (
            <Card key={i} {...props} />
          ))}

          {/* <Chat />

            <button className="absolute bg-[#FAFAFA] size-14 lg:size-[77px]  rounded-full shadow-Icon flex justify-center items-center transfrom bottom-6 lg:bottom-[117px] right-0">
              <img src="img/close.png" alt="close" />
            </button> */}
          <button className="absolute bg-orange size-14 lg:size-[77px]  rounded-full  flex justify-center items-center transfrom bottom-6 lg:bottom-[117px] right-0">
            <img src="img/C.png" alt="close" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Dashboard;
