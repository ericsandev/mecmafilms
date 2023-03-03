import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Hypnofrens 6666 NFTS</title>
				<meta name="title" content="MECMA Films | Chicago, IL." />
				<meta
					name="description"
					content="MECMA Films - Somos una empresa de filmación y producción de video y fotografía social y empresarial ofrece servicios de alta calidad para capturar momentos inolvidables. Con una amplia gama de opciones, desde bodas hasta eventos corporativos, esta empresa es la elección perfecta para aquellos que buscan una experiencia de primera clase en su producción audiovisual en Chicago, Illinois."
				/>
				<meta name="keywords" content="nft, marketplace" />
				<meta name="robots" content="index, follow" />
				<meta
					httpEquiv="Content-Type"
					content="text/html; charset=utf-8"
				/>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content={process.env.NEXT_PUBLIC_MAIN_URL}
				/>
				<meta
					property="og:title"
					content="MECMA Films | Chicago, IL."
				/>
				<meta
					property="og:description"
					content="MECMA Films - Somos una empresa de filmación y producción de video y fotografía social y empresarial ofrece servicios de alta calidad para capturar momentos inolvidables. Con una amplia gama de opciones, desde bodas hasta eventos corporativos, esta empresa es la elección perfecta para aquellos que buscan una experiencia de primera clase en su producción audiovisual en Chicago, Illinois."
				/>
				<meta
					property="og:image"
					content={
						process.env.NEXT_PUBLIC_MAIN_URL + 'preview-image.png'
					}
				/>

				<meta property="og:locale" content="id" />
				<meta property="og:image:alt" content="preview-image" />
				<meta property="og:image:type" content="png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content={process.env.NEXT_PUBLIC_MAIN_URL}
				/>
				<meta
					property="twitter:title"
					content="MECMA Films | Chicago IL."
				/>
				<meta
					property="twitter:description"
					content="MECMA Films - Somos una empresa de filmación y producción de video y fotografía social y empresarial ofrece servicios de alta calidad para capturar momentos inolvidables. Con una amplia gama de opciones, desde bodas hasta eventos corporativos, esta empresa es la elección perfecta para aquellos que buscan una experiencia de primera clase en su producción audiovisual en Chicago, Illinois."
				/>
				<meta
					property="twitter:image"
					content={
						process.env.NEXT_PUBLIC_MAIN_URL + 'preview-image.png'
					}
				/>
				<link
					rel="shortcut icon"
					href="/favicon.svg"
					type="image/x-icon"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
