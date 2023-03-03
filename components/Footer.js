import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, Logo, Button } from '.';

const Footer = () => {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <Container className={'pb-10'}>
      <div className='flex flex-col lg:flex-row mb-16'>
        <div className='w-[300px] mb-10 lg:mb-0 mr-10 lg:mr-28'>
          <Logo />
          <p className='mt-5'>
            The only NFT banished from hell condemned to live in the Solana blockchain.
          </p>
        </div>
        <div className='flex-1 grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div>
            <p className='font-bold text-xl mb-5'>About</p>
            <div className='flex flex-col'>
              <Link href='/#about'>
                <a className='mb-4 opacity-50'>About</a>
              </Link>
              <Link href='/#collections'>
                <a className='mb-4 opacity-50'>Collection</a>
              </Link>
              <Link href='/#faq'>
                <a className='mb-4 opacity-50'>FAQ</a>
              </Link>
            </div>
          </div>
          <div>
            <p className='font-bold text-xl mb-5'>Company</p>
            <div className='flex flex-col'>
              <Link href='/#team'>
                <a className='mb-4 opacity-50'>Our Team</a>
              </Link>
              <Link href='/contact'>
                <a className='mb-4 opacity-50'>Partner With Us</a>
              </Link>
            </div>
          </div>
          <div>
            <p className='font-bold text-xl mb-5'>Community</p>
            <div className='flex flex-row'>
              <Button className='btn_primary_outline'
                onClick={() => window.open("https://twitter.com/hypnofrensNFT", "_blank")}     >
                <ion-icon name="logo-twitter"></ion-icon>
              </Button>
              <Button className='btn_primary_outline'
                onClick={() => window.open("https://instagram.com/hypnofrensNFT", "_blank")}     >
                <ion-icon name="logo-instagram"></ion-icon>
              </Button>
              <Button className='btn_primary_outline'
                onClick={() => window.open("https://discord.gg/FnbxCXUNtz", "_blank")}     >
                <ion-icon name="logo-discord"></ion-icon>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mb-8'>
        &copy; <span className='font-bold mr-1'> 2022  WAP </span>
      </div>
      <div
        onClick={scrollToTop}
        className='animate-bounce  h-14 w-14 cursor-pointer shadow-lg shadow-[#b90000]/40 rounded-full bg-gradient-to-b font-bold from-[#ee0101] to-[#530505] mx-auto flex justify-center items-center'
      >
        UP
      </div>
    </Container>
  );
};

export default Footer;
