import React from 'react';

import { Container, Logo, Button } from '.';

const Social = () => {
  return (
    <Container className="w-full flex flex-col justify-center pt-4">
      <div className='flex flex-row items-center justify-center'>
        <Button className='btn_primary_outline'
          onClick={() => window.open("https://twitter.com/hypnofrensNFT", "_blank")}     >
          <ion-icon name="logo-twitter"></ion-icon>
        </Button>
        <Button className='btn_primary_outline'
          onClick={() => window.open("https://discord.gg/FnbxCXUNtz", "_blank")}     >
          <ion-icon name="logo-discord"></ion-icon>
        </Button>
      </div>
    </Container>
  )
}

export default Social;