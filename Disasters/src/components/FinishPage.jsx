import React from "react";
import { Container } from "../ShareComponents/Container";
import { Link } from "react-router-dom";
import { BreadCrumbs } from "../ShareComponents/BreadCrumbs";
import { PageHeading } from "../ShareComponents/PageHeading";
import { Button } from "../ShareComponents/Button";

const FinishPage = () => {
  return (
    <section>
     
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
              <div className="bg-orange w-full h-[5px] rounded-[10px]"></div>
            </div>
            <div className="flex   items-center gap-[14px]">
              {/* Back Button */}
              <Button className=" w-[139px] bg-[#fafafa] text-secondary border border-[#D4D4D8]">
                <Link to="/incidentsData"> Back</Link>
              </Button>
              {/* Next Button */}
              <Button className=" w-[139px]">
                <Link to="/Incidents">Finished</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="my-10 w-[752px] flex flex-col  mx-auto ">
          <h2 className="text-primary text-base sm:text-lg lg:text-2xl font-bold leading-[30.6px]">
            Which of these best describes the incident?
          </h2>
          <p className="text-xs sm:text-sm text-secondary leading-[22px] mt-3">
            Make a title that will easily identify the incidents
          </p>
          <div className="mt-6 relative  ">
            <img src="img/finishedMap.png" alt="map"  className="w-[340px] sm:w-[600px] md:w-[752px]"/>
            <div className="absolute top-0 left-0 px-2.5 py-2.5 space-y-[5px]">
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Enter incident address or GPS"
                  className="bg-[#fafafa] text-xs w-[244px] h-[42px] text-secondary rounded-[6px] border border-[#E4E4E7] pl-[33px] "
                />
                <span className="absolute  transform top-1/2 -translate-y-1/2   left-[10px] pr-[5px] ">
                  <img src="img/Frame.png" alt="" />
                </span>
              </div>
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Pinpoint damage"
                  className="bg-[#fafafa] text-xs text-secondary w-[244px] h-[42px] rounded-[6px] border border-[#E4E4E7] pl-[33px] "
                />
                <span className="absolute  transform top-1/2 -translate-y-1/2   left-[10px] pr-[5px] ">
                  <img src="img/Frame.png" alt="" />
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinishPage;
