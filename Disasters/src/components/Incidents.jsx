import React from "react";

import { Container } from "../ShareComponents/Container";
import { BreadCrumbs } from "../ShareComponents/BreadCrumbs";
import { PageHeading } from "../ShareComponents/PageHeading";
import { SearchBar } from "../ShareComponents/SearchBar";
import { Button } from "../ShareComponents/Button";
import Navbar from "../ShareComponents/Navbar";
import { cardData } from "../lib/db/Data";
import { Card } from "../ShareComponents/Card";

export const Incidents = () => {
  return (
    <section>
      <Navbar />
      <div className="bg-accent h-[100px] py-[23px] -z-10 ">
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
          <div className=" pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  place-items-center gap-[25px]  relative">
            {cardData.map((props, i) => (
              <Card key={i} {...props} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};
