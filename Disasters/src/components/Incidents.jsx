import React from "react";

import { Container } from "../ShareComponents/Container";
import { BreadCrumbs } from "../ShareComponents/BreadCrumbs";
import { PageHeading } from "../ShareComponents/PageHeading";
import { SearchBar } from "../ShareComponents/SearchBar";
import { Button } from "../ShareComponents/Button";
import { AllCards } from "../ShareComponents/AllCards";
import { Link } from "react-router-dom";

export const Incidents = () => {
  return (
    <section>
      
      <div className="bg-accent/50 lg:h-[100px] py-3 lg:py-[23px]">
        <Container>
          <div className="flex flex-col justify-between items-center lg:flex-row space-y-3">
            <div className="flex flex-col justify-start">
              <BreadCrumbs>Home - Incidents</BreadCrumbs>
              <PageHeading className="flex justify-center  gap-[15px]">
                Incidents
              </PageHeading>
            </div>
            <div className="flex flex-col md:flex-row  items-center gap-[14px]">
              <SearchBar />
              <Button className=" w-[148px]">
                <Link to="/get-start" className="flex justify-center items-center gap-[5px]">
                  {" "}
                  <span className="text-2xl">+</span> New Incident
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <AllCards  />
      </Container>
    </section>
  );
};
