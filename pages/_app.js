import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Hypnofrens 6666 NFTS</title>
				<meta
					name="title"
					content="Hypnofrens - The only NFT banished from hell condemned to live in the Solana blockchain."
				/>
				<meta
					name="description"
					content='Hypnofrens focuses on establishing a brand IRL through partnerships with companies around the world. In addition to a partnership with an animation studio and writers for the creation of an animated series at the same time that we are preparing the next collection called "The Sensors".'
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
					content="Hypnofrens - The only NFT banished from hell condemned to live in the Solana blockchain."
				/>
				<meta
					property="og:description"
					content='Hypnofrens focuses on establishing a brand IRL through partnerships with companies around the world. In addition to a partnership with an animation studio and writers for the creation of an animated series at the same time that we are preparing the next collection called "The Sensors".'
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
					content="Hypnofrens - The only NFT banished from hell condemned to live in the Solana blockchain."
				/>
				<meta
					property="twitter:description"
					content='Hypnofrens focuses on establishing a brand IRL through partnerships with companies around the world. In addition to a partnership with an animation studio and writers for the creation of an animated series at the same time that we are preparing the next collection called "The Sensors".'
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
