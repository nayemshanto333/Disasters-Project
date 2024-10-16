import React from 'react';
import Navbar from '../ShareComponents/Navbar';
import {Card} from '../ShareComponents/Card';
import { cardData } from '../lib/db/Data';

const Dashboard = () => {
  return (
    <>
      <Navbar/>
      <div className='px-[70px] pt-10 pb-[271px] flex flex-wrap gap-5 '>
      
        {cardData.map((props , i)=>(
          <Card key={i} {...props}/>
        ))}
     
      </div>
    </>
  );
}

export default Dashboard;
