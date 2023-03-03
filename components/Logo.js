import React from 'react';
import Image from 'next/image';
import Reveal from 'react-awesome-reveal';
import { fadeInUp } from '@/keyframes';

const Logo = () => {
  return (
    <div className='font-bold flex text-2xl'>
      <Reveal keyframes={fadeInUp} duration={800} delay={200}>
        <div className='flex items-center justify-center relative w-[210px] h-[60px]'>
          <Image
            layout='fill'
            objectFit='contain'
            objectPosition={'center'}
            src='/icons/hypnofrens.svg'
            alt='solana'
          />
        </div>
      </Reveal>

    </div>
  );
};

export default Logo;
