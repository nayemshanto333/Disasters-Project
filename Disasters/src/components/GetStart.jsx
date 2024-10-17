
import React from 'react';
import Navbar from '../ShareComponents/Navbar';
import { Container } from '../ShareComponents/Container';

export const GetStart = () => {
  return (
    <section>
        <Navbar/>
        <Container>
           <div className='max-w-[815px] text-center mx-auto py-[85px]'>
            <h1 className='text-primary font-bold text-[32px] leading-[40.8px]'>Let’s get started</h1>
            <p>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>


           </div>
        </Container>
    </section>
  );
};
