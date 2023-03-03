import React from 'react';
import { Container } from '.';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter } from '@/keyframes';

const CallTo = () => {
  return (
    <Container>
      <div
        className={
          'bg-gradient-to-b from-[#b51f35] to-[#8f1b2c] rounded-xl py-20 px-10 flex items-center justify-center shadow-lg flex-col mb-44'
        }
      >
        <h2 className=' text-[#111011] text-2xl sm:text-4xl lg:text-5xl mb-5 w-full md:w-2/5 leading-snug text-center'>
          You got lucky?? Participate in the <strong>RAFFLE to get the HELLIST</strong> and get <strong>FREE MINT</strong>.
        </h2>
        <Reveal delay={200} duration={1000} keyframes={fadeInDownShorter}>
          <a className="px-3 py-3 btn_secondary rounded-xl text-4xl" href="/hellist">Get Hellisted Now</a>
        </Reveal>
      </div>
    </Container>
  );
};

export default CallTo;


