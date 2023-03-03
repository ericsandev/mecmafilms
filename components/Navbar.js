import useWindowSize from '@/hooks/useWindowSize;';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Input, Logo } from '.';
import { Fade } from 'react-awesome-reveal';
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { width } = useWindowSize();
  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  const refMenu = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (refMenu.current) {
        if (refMenu.current.contains(e.target)) {
          return;
        }
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className='py-4 relative'>
      <Container className={'flex justify-between items-center'}>
        <Link href='/'>
          <a
            className='mb-3 sm:mb-0 mt-4 sm:mt-0 ml-0 sm:ml-7'
          >
            <Image
              className='cursor-pointer'
              src='/icons/hypnofrens_w.svg'
              alt='menu'
              width={190}
              height={50}
            />
          </a>
        </Link>

        <div className='hidden sm:block'>
          <ContentSidebar toggleMenu={toggleMenu} />
        </div>
        <div className='block sm:hidden cursor-pointer'>
          <Image
            onClick={toggleMenu}
            src='/icons/menu.svg'
            alt='menu'
            width={30}
            height={30}
          />
        </div>
        {menu && width < 640 && (
          <Fade
            duration={300}
            delay={100}
            className='rounded-b-3xl h-[100vh] absolute py-20 top-0 flex justify-center items-center  left-0 right-0 bg-[#000000E6] z-20'
          >
            <div ref={refMenu}>
              <ContentSidebar toggleMenu={toggleMenu} />
            </div>
          </Fade>
        )}
      </Container>
    </div>
  );
};

const ContentSidebar = ({ toggleMenu }) => {
  return (
    <div className='items-center flex-col sm:flex-row flex'>

      <Link href='/#collections'>
        <a
          onClick={toggleMenu}
          className='mb-3 sm:mb-0 mt-4 sm:mt-0 ml-0 sm:ml-7'
        >
          Collection
        </a>
      </Link>
      <Link href='/#team'>
        <a onClick={toggleMenu} className='mb-3 sm:mb-0 ml-0 sm:ml-7'>
          Team
        </a>
      </Link>
      <Link href='/#faq'>
        <a
          onClick={toggleMenu}
          className='mb-3 sm:mb-0 ml-0 sm:ml-7 mr-0 sm:mr-7'
        >
          FAQ
        </a>
      </Link>
      {/* <Link href='/hellist'>
        <a
          onClick={toggleMenu}
          className='mb-3 rounded-xl btn_primary text-3xl px-2 sm:mb-0 ml-0 sm:ml-7 mr-0 sm:mr-7'
        >
          HELLIST
        </a>
      </Link> */}
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

  );
};

export default Navbar;
