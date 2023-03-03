import React from 'react';
import { Button, Container } from '.';
import { JackInTheBox, Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter, fadeInLeft, fadeInUp } from '@/keyframes';
import Image from 'next/image';
import Background from '../public/hero/hell.jpg';

const sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background.src})`,
  backgroundSize: 'cover',
};


const Hero = () => {
  return (
    <Container className={'flex flex-col sm:flex-row py-20 mb-32'} style={sectionStyle} id="intro">
      <div className='w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-[-20px] sm:mt-5 lg:mt-10'>
        <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
          <h1 className='text-3xl lg:text-3xl font-bold mb-5' style={{
            fontFamily: "var(--font-bahiana)", fontSize: '74px'
          }} >
            Hypnofrens NFT
          </h1>
        </Reveal>
        <Reveal keyframes={fadeInDownShorter} duration={1000} delay={800}>
          <p className='mb-8 text-xl'>
            Hypnofrens focuses on establishing a brand IRL through partnerships with companies around the world. In addition to a <strong>partnership with an animation studio and writers</strong>
            for the creation of an <strong>animated series</strong> at the same time that we are <strong>preparing the next collection called "The Sensors"</strong>.
            <br /><br />Enabling us to generate a revenue share for our NFT holders.
          </p>
          <h3 className='bg-black text-[#fc0] mb-2 text-2xl px-2 font-bold'>💠EXCLUSIVE BENEFITS</h3>
          <ul>
            <li className='bg-black text-[#4bffff] mb-2 text-xl px-2 '>⭐ WL / Free Mint to "The Sensors" collection.</li>
            <li className='bg-black text-[#4bffff] mb-2 text-xl px-2 '>⭐ Access to digital and physical merch, products and events. </li>
            <li className='bg-black text-[#4bffff] mb-2 text-xl px-2 '>⭐ Access to other selected collections. </li>
            <li className='bg-black text-[#4bffff] mb-2 text-xl px-2 '>⭐ Artist or Writer? You can be chosen to bring the characters to life.</li>
            <li className='bg-black text-[#4bffff] mb-2 text-xl px-2 '>⭐ Being co-producer in the of the comic and animated series. </li>
            <li className='bg-black text-[#4bffff] mb-2 text-xl px-2 '>⭐ 20% of the profits will be distributed to the holders. </li>
            <li className='bg-black text-[#4bffff] mb-2 text-xl px-2 '>⭐ 10% of the profits will be distributed to charity. </li>

          </ul>
        </Reveal>
      </div>
      <div className='flex-1 mt-14 sm:mt-0'>
        <JackInTheBox delay={200} triggerOnce>
          <div className='relative w-full h-[400px] lg:h-[500px] float'>
            <Image
              layout='fill'
              objectFit='contain'
              objectPosition={'center'}
              src='/hero/float.png'
              alt='hero'
            />
          </div>
        </JackInTheBox>
      </div>
    </Container>
  );
};

export default Hero;
