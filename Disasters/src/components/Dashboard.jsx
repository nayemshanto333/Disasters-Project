import React from "react";
import Navbar from "../ShareComponents/Navbar";
import { Card } from "../ShareComponents/Card";
import { cardData } from "../lib/db/Data";
import { Chat } from "../ShareComponents/Chat";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="lg:px-[70px] pt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  place-items-center gap-[25px]  relative">
          {cardData.map((props, i) => (
            <Card key={i} {...props} />
          ))}

          <Chat/>

          <button className="absolute bg-[#FAFAFA] size-14 lg:size-[77px]  rounded-full shadow-Icon flex justify-center items-center transfrom bottom-6 lg:bottom-[117px] right-4 lg:right-[70px]">
              <img src="img/close.png" alt="close" />
            </button>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
