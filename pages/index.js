import React from 'react';
import {
	AboutUs,
	Button,
	Collections,
	Container,
	FAQ,
	Footer,
	Hero,
	Navbar,
	Team,
	Marketing,
	CallTo,
	Social,
	Coming,
	Cursor,
} from '@/components';
import { Helmet } from 'react-helmet';

const Home = () => {
	return (
		<div className="h-full main_bg text-white overflow-hidden" id="top">
			<Helmet>
				<title>MECMA Films | Coming Soon</title>
				<meta
					name="description"
					content="Somos una empresa de filmación y producción de video y fotografía social y empresarial ofrece servicios de alta calidad para capturar momentos inolvidables. Con una amplia gama de opciones, desde bodas hasta eventos corporativos, esta empresa es la elección perfecta para aquellos que buscan una experiencia de primera clase en su producción audiovisual en Chicago, Illinois"
				/>
			</Helmet>
			<Cursor />
			<Coming />
		</div>
	);
};

export default Home;
