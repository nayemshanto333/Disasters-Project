import React, { useState } from "react";
import Navbar from "../ShareComponents/Navbar";
import { Container } from "../ShareComponents/Container";
import { BreadCrumbs } from "../ShareComponents/BreadCrumbs";
import { PageHeading } from "../ShareComponents/PageHeading";
import { Link } from "react-router-dom";
import { Button } from "../ShareComponents/Button";
import { describesIconData } from "../lib/db/Data";
import DescribesCard from "../ShareComponents/locationPage/DescribesCard";

function Describes() {
  const [isActive, setIsActive] = useState(1);

  return (
    <section>
      <Navbar />
      <div className="bg-accent/50 xl:h-[100px] py-3 lg:py-[23px]">
        <Container>
          <div className="flex flex-col justify-between items-center xl:flex-row space-y-3">
            <div className="flex items-center justify-center gap-[25px] sm:gap-[13px]">
              <button className=" bg-[#FAFAFA] size-14 lg:size-[41px]  rounded-full  flex justify-center items-center ">
                <Link to="/Dashboard">
                  <img src="img/close.png" alt="close" />
                </Link>
              </button>
              <div className="flex flex-col justify-start">
                <BreadCrumbs>Home - Incidents - New Incident</BreadCrumbs>
                <PageHeading className="flex   gap-[15px]">
                  New Incident
                </PageHeading>
              </div>
            </div>
            <div className="bg-[#E5E7EB] w-[350px] sm:w-[400px]  md:w-[450px] lg:w-[527px] h-[5px] rounded-[10px] ">
              <div className="bg-orange w-12 sm:w-16 md:w-20 lg:w-[98px] h-[5px] rounded-[10px]"></div>
            </div>
            <div className="flex   items-center gap-[14px]">
              {/* Back Button */}
              <Button className=" w-[139px] bg-[#fafafa] text-secondary border border-[#D4D4D8]">
                <Link to="/get-start"> Back</Link>
              </Button>
              {/* Next Button */}
              <Button className=" w-[139px]">
                <Link to="/get-start">Next step</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="my-10 w-[753px] flex flex-col  mx-auto ">
          <h2 className="text-primary text-base sm:text-lg lg:text-2xl font-bold leading-[30.6px]">
            Which of these best describes the incident?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[11px] mb-[11px] mt-[25px] ">
            {describesIconData.map((props, i) => (
              <DescribesCard
                key={i}
                isActive={isActive === i}
                onClick={() => setIsActive(i)}
                
                {...props}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Describes;
