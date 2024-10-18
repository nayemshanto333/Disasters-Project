import React from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { BreadCrumbs } from "./BreadCrumbs";
import { PageHeading } from "./PageHeading";
import { SearchBar } from "./SearchBar";

export const SearchButton = ({}) => {
  return (
    <section className="bg-accent/50 h-[100px] py-[23px] -z-10 ">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <BreadCrumbs>Welcome back</BreadCrumbs>
            <PageHeading>Dashboard</PageHeading>
          </div>
          <div className="flex gap-[14px]">
            <SearchBar />
            <Button>Cypher AI</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
