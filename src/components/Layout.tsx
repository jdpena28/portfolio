/** @format */

import React from 'react'
import Head from 'next/head'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.png' />
				{/* <!-- Primary Meta Tags --> */}
				<title>John Henrich Dela Peña - Portfolio Website</title>
				<meta name="title" content="John Henrich Dela Peña - Portfolio Website" />
				<meta name="description" content="A Self-Taught Student Aspiring Front-End / .Net Developer currently pursuing Computer Science Third Year. Proficient in making Serverless Website and Desktop Application." />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://jdpena.me/" />
				<meta property="og:title" content="John Henrich Dela Peña - Portfolio Website" />
				<meta property="og:description" content="A Self-Taught Student Aspiring Front-End / .Net Developer currently pursuing Computer Science Third Year. Proficient in making Serverless Website and Desktop Application." />
				<meta property="og:image" content="https://user-images.githubusercontent.com/79455416/140276818-20d1721b-9380-4a51-9cad-e8d44cb41140.png" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://jdpena.me/" />
				<meta property="twitter:title" content="John Henrich Dela Peña - Portfolio Website" />
				<meta property="twitter:description" content="A Self-Taught Student Aspiring Front-End / .Net Developer currently pursuing Computer Science Third Year. Proficient in making Serverless Website and Desktop Application." />
				<meta property="twitter:image" content="https://user-images.githubusercontent.com/79455416/140276818-20d1721b-9380-4a51-9cad-e8d44cb41140.png" />

				<meta name='robots' content='index, follow' />
				<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:wght@300;400;500;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>			
			</Head>
			<div className ='bg-gray-900'>{children}</div>
		</>
	)
}

export default Layout
