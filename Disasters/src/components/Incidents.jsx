import React from "react";

import { Container } from "../ShareComponents/Container";
import { BreadCrumbs } from "../ShareComponents/BreadCrumbs";
import { PageHeading } from "../ShareComponents/PageHeading";
import { SearchBar } from "../ShareComponents/SearchBar";
import { Button } from "../ShareComponents/Button";
import Navbar from "../ShareComponents/Navbar";
import { AllCards } from "../ShareComponents/AllCards";



export const Incidents = () => {
  return (
    <section>
      <Navbar />
      <div className="bg-accent h-[100px] py-[23px]  ">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <BreadCrumbs>Home - Incidents</BreadCrumbs>
              <PageHeading>Incidents</PageHeading>
            </div>
            <div className="flex gap-[14px]">
              <SearchBar />
              <Button className="flex flex-row justify-center items-center gap-1 w-[148px]">
                <span className="text-lg">+</span> New Incident
              </Button>
            </div>
          </div>
          <AllCards className="pt-16" />
        </Container>
      </div>
    </section>
  );
};
