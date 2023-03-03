import React from 'react';
import { Button, Container, Cursor, Social } from '.';
import { JackInTheBox, Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter, fadeInLeft, fadeInUp } from '@/keyframes';
import Image from 'next/image';
import Background from '../public/hero/hell.jpg';
import gsap from 'gsap';

const sectionStyle = {
	width: '100%',
	height: '100%',
};

const Coming = () => {
	return (
		<Container
			className={'flex bg-zinc-200 '}
			style={sectionStyle}
			id="intro">
			<div className="w-full h-[100vh] flex flex-col justify-center items-center ">
				<Reveal
					keyframes={fadeInDownShorter}
					duration={800}
					delay={1000}>
					<Image
						src="/brand/mecma_logo.svg"
						width={380}
						height={380}
						alt="reload"
					/>
				</Reveal>
				<Reveal
					keyframes={fadeInDownShorter}
					duration={800}
					delay={1500}>
					<h2 className="text-md text-zinc-900">COMING SOON</h2>
				</Reveal>
				<Reveal
					keyframes={fadeInDownShorter}
					duration={800}
					delay={1800}>
					<h3 className="text-md mb-5 text-zinc-600">CHICAGO, IL</h3>
				</Reveal>
			</div>
		</Container>
	);
};

export default Coming;
