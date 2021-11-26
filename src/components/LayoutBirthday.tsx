/** @format */

import React from 'react'
import Head from 'next/head'


const LayoutBirthday = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta lang='en' />
				<link rel='icon' href='/favicon.png' />
				{/* <!-- Primary Meta Tags --> */}
				<title>🎉Hey its my Birthday!🎉</title>
				<meta name="title" content="🎉Hey its my Birthday!🎉" />
				<meta name="description" content="Hey thanks for your Greetings, Hope you can visit my website and leave some message for me this will be my forever memories." />
				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:title" content="🎉Hey its my Birthday!🎉" />
      			<meta property="og:url" content="https://jdpena.me/birthday-message" />
				<meta property="og:description" content="Hey thanks for your Greetings, Hope you can visit my website and leave some message for me this will be my forever memories." />
				<meta property="og:image" content="https://user-images.githubusercontent.com/79455416/143589168-45a2e395-aea9-4d09-9d9d-7a59c8def301.jpg" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://jdpena.me/birthday-message" />
				<meta property="twitter:title" content="🎉Hey its my Birthday!🎉" />
				<meta property="twitter:description" content="Hey thanks for your Greetings, Hope you can visit my website and leave some message for me this will be my forever memories." />
				<meta property="twitter:image" content="https://user-images.githubusercontent.com/79455416/143589168-45a2e395-aea9-4d09-9d9d-7a59c8def301.jpg" />

				<meta name='robots' content='index, follow' />
				<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:wght@300;400;500;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>   
			</Head>
			<div className ='bg-gray-900 text-white font-primary'>{children}</div>
		</>
	)
}

export default LayoutBirthday
