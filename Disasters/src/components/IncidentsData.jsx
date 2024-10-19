import React from 'react';
import Navbar from '../ShareComponents/Navbar';
import { Button } from '../ShareComponents/Button';
import { BreadCrumbs } from '../ShareComponents/BreadCrumbs';
import { PageHeading } from '../ShareComponents/PageHeading';
import { Container } from '../ShareComponents/Container';
import { Link } from 'react-router-dom';

const IncidentsData = () => {
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
              <div className="bg-orange w-24 sm:w-32 md:w-40 lg:w-[196px] h-[5px] rounded-[10px]"></div>
            </div>
            <div className="flex   items-center gap-[14px]">
              {/* Back Button */}
              <Button className=" w-[139px] bg-[#fafafa] text-secondary border border-[#D4D4D8]">
                <Link to="/describes"> Back</Link>
              </Button>
              {/* Next Button */}
              <Button className=" w-[139px]">
                <Link to="/finished">Next step</Link>
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
          <p className=' text-[10px] text-sm sm:text-sm  w-[340px] sm:w-[600px] md:w-[752px] text-secondary leading-[22px] mt-3'>Make a title that will easily identify the incidents</p>
          <input type="text" placeholder='Add title here' className='text-xs text-secondary my-6 w-[340px] sm:w-[600px] md:w-[752px] h-[50px] border-accent bg-[#F4F4F5] rounded-[6px] py-3 px-2.5 gap-[5px]' />
          <h2 className="text-primary  text-sm  sm:text-lg lg:text-2xl font-bold leading-[30.6px]">
          Describe what happened during the incident?
          </h2>
          <p className='text-xs  w-[340px] sm:w-[600px] md:w-[752px] text-[10px]  sm:text-sm text-secondary leading-[22px] mt-3'>Share some information about the incident. The when, where, how. </p>
          <textarea type="text" placeholder='Add title here' className='text-xs text-secondary my-6  w-[340px] sm:w-[600px] md:w-[752px] h-[127px] border-accent bg-[#F4F4F5] rounded-[6px] py-5 px-2.5 gap-[5px]' />
        </div>
      </Container>
    </section>
  );
}

export default IncidentsData;
