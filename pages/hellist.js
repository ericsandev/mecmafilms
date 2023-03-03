import {
  FAQ,
  Footer,
  Navbar,
  HellistForm,
} from '@/components';
import {
  Helmet
} from 'react-helmet';
import { fadeInDownShorter2 } from '@/keyframes';
import React from 'react';
import Reveal from 'react-awesome-reveal';

const Hellist = () => {
  return (
    <div className='h-full main_bg text-white overflow-hidden' id='top'>
      <Helmet>
        <title>HELList | Hypnofrens NFT</title>
        <meta name='description' content='Hellist Hypnofrens' />
      </Helmet>
      <Navbar />
      <div className='text-center mb-8'>
        <h1 className='text-3xl lg:text-3xl text-center font-bold mb-5' style={{
          fontFamily: "var(--font-bahiana)", fontSize: '74px'
        }} >
          HELLIST
        </h1>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className='w-full  text-xl sm:w-[500px] mx-auto'>
            <strong>You got lucky?? </strong>
            Complete the form and participate in the <strong>RAFFLE</strong>
            o get the <strong>HELLIST</strong> and get <strong>FREE MINT</strong>.
          </p>
        </Reveal>
      </div>
      <HellistForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Hellist;
