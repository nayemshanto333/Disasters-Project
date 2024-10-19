import React from "react";
import { Container } from "../ShareComponents/Container";
import { Button } from "../ShareComponents/Button";
import { getData } from "../lib/db/Data";
import { GetCard } from "..//ShareComponents/locationPage/GetCard";
import { Link } from "react-router-dom";

export const GetStart = () => {
  return (
    <section>
      
      <Container>
        <div className="max-w-[815px] flex flex-col items-center mx-auto py-[85px]">
          <h1 className="text-primary font-bold text-[28px] md:text-[32px] leading-[40.8px]">
            Let’s get started
          </h1>
          <p className="max-w-[468px] text-center text-sm sm:text-base mt-[14px] text-secondary leading-[26px]">
            Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
            general sac mascho werhoLorem ipsum dolar sit gene
          </p>
          <div className="my-[33px] w-full sm:w-[598px] h-[3px] bg-accent flex justify-between items-center">
            <div className="size-[29px] bg-accent rounded-full"></div>
            <div className="size-[29px] bg-accent rounded-full"></div>
            <div className="size-[29px] bg-accent rounded-full"></div>
          </div>
          <div className="flex flex-col md:flex-row  md:gap-4 lg:gap-[68px]">
            {getData.map((props,i)=>(
              <GetCard key={i} {...props}/>
            ))}
          </div>
          <Button className='w-[139px] mt-[85px]'><Link to='/describes'>Get started</Link></Button>
        </div>
      </Container>
    </section>
  );
};
