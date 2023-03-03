import {
  Container,
  FAQ,
  Footer,
  Hero,
  Navbar,
  ContactForm,
} from '@/components';
import React from 'react';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter } from '@/keyframes';
import {
  Helmet
} from 'react-helmet';

const Contact = () => {
  return (
    <div className='h-full hell_bg text-white overflow-hidden' id='top'>
      <Helmet>
        <title>Partner With Us | Hypnofrens NFT</title>
        <meta name='description' content='Partner With Us Hypnofrens' />
      </Helmet>
      <Navbar />
      <h1 className='text-3xl lg:text-3xl text-center font-bold mb-5' style={{
        fontFamily: "var(--font-bahiana)", fontSize: '74px'
      }} >
        Partner With Us
      </h1>
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Contact;
