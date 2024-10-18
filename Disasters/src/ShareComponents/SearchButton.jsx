import React from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { BreadCrumbs } from "./BreadCrumbs";
import { PageHeading } from "./PageHeading";
import { SearchBar } from "./SearchBar";

export const SearchButton = ({}) => {
  return (
    <section className="bg-accent/50 lg:h-[100px] py-3 lg:py-[23px] ">
      <Container>
        <div className="flex flex-col lg:flex-row space-y-3 justify-between items-center">
          <div className="flex flex-col items-start">
            <BreadCrumbs>Welcome back</BreadCrumbs>
            <PageHeading>Dashboard</PageHeading>
          </div>
          <div className="flex flex-col md:flex-row  items-center gap-[14px]">
            <SearchBar />
            <Button>Cypher AI</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
