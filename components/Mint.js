import { Button, Container } from '.';
import React, { useEffect, useState } from 'react';

const sectionStyle = {
  width: "100%",
  height: "100%",
  background: '#b51f35',
};


const Mint = () => {


  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`09/10/${year} 11:00:00`) - +new Date();
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }


  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className='text-3xl lg:text-4xl mb-5 bg-[#010101] px-2'
        style={{
          fontFamily: "var(--font-bahiana)",

        }}>
        {timeLeft[interval]} < span className='text-2xl lg:text-2xl mb-5' style={{
          fontFamily: "var(--font-antic)",
        }}> {interval}{" "}</span >
      </span >
    );
  });


  return (
    <Container className={'flex flex-row justify-center text-center sm:flex-col py-4'} style={sectionStyle} id="mint">
      <div>
        <h1 className='text-4xl lg:text-4xl text-[#e4e3e4]'
          style={{
            fontFamily: "var(--font-bahiana)",
          }}
        >PRE-SALE {year} Countdown</h1>
        {timerComponents.length ? timerComponents :

          <div className='flex flex-row justify-center text-center'>
            <Button className='btn_secondary text-5xl'
              onClick={() => window.open("https://launchmynft.io/collections/3j7fmyzsturSNz7NPXBjBu8aybgQJUZz1GG2eaLkQo16/vV3za9meSnBqSZpkRvYU", "_blank")}     >
              GO! IT'S TIME TO MINT
            </Button>
          </div>}
      </div>

    </Container>
  );
};

export default Mint;
