import React from "react";
import { Container } from "../ShareComponents/Container";
import Navbar from "../ShareComponents/Navbar";
import { BreadCrumbs } from "../ShareComponents/BreadCrumbs";
import { PageHeading } from "../ShareComponents/PageHeading";
import { SearchBar } from "../ShareComponents/SearchBar";
import { Button } from "../ShareComponents/Button";
import {
  ActivityCardData,
  DescriptionData,
  locationData,
  locationsCardData,
} from "../lib/db/Data";
import { LocationPrice } from "../ShareComponents/locationPage/LocatonPrice";
import Desctiption from "../ShareComponents/locationPage/Desctiption";
import { LocationCard } from "../ShareComponents/locationPage/locationCard";
import { ActivitysCard } from "../ShareComponents/locationPage/ActivityCard";
import { Link } from "react-router-dom";

export const Location = () => {
  return (
    <section>
      <Navbar />

      <div className="bg-accent h-[100px] py-[23px]  ">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <BreadCrumbs>
                Incidents - DR-4699 March 2023 Severe Storms{" "}
              </BreadCrumbs>
              <PageHeading className="flex justify-center items-center gap-[15px]">
                <img src="img/tree.png" alt="icon" className="size-[25px]" />
                DR-4699 March 2023 Severe Storms
              </PageHeading>
            </div>
            <div className="flex gap-[14px]">
              <SearchBar />
              <Button className="flex flex-row justify-center items-center gap-1 w-[148px]">
                <span className="text-lg">+</span> New Incident
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col lg:flex-row justify-between md:gap-10 lg:gap-14 xl:gap-[94px]  mt-10">
          <div className="max-w-[680px]">
            {/* locatio Price */}
            <div className="space-y-[45px]">
              {locationData.map((props, i) => (
                <LocationPrice key={i} {...props} />
              ))}
            </div>
            {/* Description */}
            <div>
              {DescriptionData.map((props, i) => (
                <Desctiption key={i} {...props} />
              ))}
            </div>

            {/* Card  */}

            <div className="flex flex-wrap gap-[17.5px] ">
              {locationsCardData.map((props, i) => (
                <LocationCard key={i} {...props} />
              ))}
            </div>

            {/* Activities */}

            <div className="py-20">
              <div className="flex justify-between items-center">
                <h6 className="text-black font-bold text-base">Activities</h6>
                <Link  className="text-sm text-[#0A0A0A] hover:underline">See all</Link>
              </div>
              <div>
                {ActivityCardData.map((props, i) => (
                  <ActivitysCard key={i} {...props} />
                ))}
              </div>
            </div>

            {/* Documents */}

            <div className="pb-20">
              <div className="flex justify-between items-center">
                <h6 className="text-black font-bold text-base">Activities</h6>
                <Link  className="text-sm text-[#0A0A0A] hover:underline">See all</Link>
              </div>
              <div>
                {ActivityCardData.map((props, i) => (
                  <ActivitysCard key={i} {...props} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <p className="text-sm leading-[22px] text-secondary">
              Incident Map
            </p>
            <img
              className="py-5 w-[526px] h-[503px]"
              src="img/locationMap.png"
              alt="map"
            />
            <div className="flex items-center text-sm leading-[22px] text-secondary gap-5">
              <p>Start 19.1232, -118.233</p>
              <p>End 19.3245, -119.2323</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
