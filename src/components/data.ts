/** @format */

export const techStacks = [
	{
		techDesc: 'languages',
		aos: 'slide-right',
		stacksURL: [
			{
				url: '/TechStacks/languages/csharp.svg',
				tooltipTitle:'C#'
			},
			{
				url: '/TechStacks/languages/java.svg',
				tooltipTitle:'Java',
			},
			{
				url: '/TechStacks/languages/html5.svg',
				tooltipTitle:'HTML5',
			},
			{
				url: '/TechStacks/languages/css3.svg',
				tooltipTitle:'CSS3',
			},
			{
				url: '/TechStacks/languages/javascript.svg',
				tooltipTitle:'Javascript'
			},
		]
	},
    {
        techDesc: 'frameworks',
		flex: 'items-end',
		aos: 'slide-left',
        stacksURL: [
			{
				url: '/TechStacks/frameworks/dotnetcore.svg',
				tooltipTitle:'.Net',
			},
			{
				url: '/TechStacks/frameworks/react.svg',
				tooltipTitle:'React',
			},
			{
				url:'/TechStacks/frameworks/vuejs.svg',
				tooltipTitle:'Vue',
			},
			{
				url: '/TechStacks/frameworks/tailwindcss.svg',
				tooltipTitle:'TailwindCSS',
			},
			{
				url: '/TechStacks/frameworks/bootstrap.svg',
				tooltipTitle:'Bootstrap',
			},
			{
				url: '/TechStacks/frameworks/sass.svg',
				tooltipTitle:'SASS',
			},
        ],
    },
	{
        techDesc: 'database&others',
		aos: 'slide-right',
        stacksURL: [
			{
				url: '/TechStacks/database&others/mysql.svg',
				tooltipTitle:'MySQL',
			},
			{
				url: '/TechStacks/database&others/oracle.svg',
				tooltipTitle:'Oracle',
			},
			{
				url: '/TechStacks/database&others/git.svg',
				tooltipTitle:'Git',
			},
			{
				url: '/TechStacks/database&others/github.svg',
				tooltipTitle:'Github',
			},		
        ],
    }
]

export const project = [
	{
		src: '/Projects/Covid_Infoboard.webp',
		title: 'COVID19 PH Info - Board',
		desc: 'An Informtaion Board for cases and other information of Covid-19 in the Philippines',
		color: 'purple',
		num:'01',
		titleClass: 'top-[20%] left-[30%]',
		hoverDesc: 'React.js, Typescript, Tailwind, RestAPI',
		github:'https://github.com/jdpena28/covid19PH-infoboard',
		link:'https://covid19-ph-infoboard.vercel.app',
		imgAOS: 'fade-up-right',
		textAOS: 'slide-right',
	},
	{
		flex: 'flex-row-reverse',
		src: '/Projects/Stick-your-Note-Desktop-View.webp',
		title:  'Stick your Note',
		desc: "A React - App that let's you create a stick note as reminder",
		color: 'yellow',
		num:'02',
		titleClass: 'top-[20%] right-[40.3%] mix-blend-exclusion',
		descClass:'text-right sm:text-left',
		hoverClass: 'flex-row-reverse sm:flex-row',
		hoverDesc: 'React.js, Typescript, Tailwind',
		github:'https://github.com/jdpena28/stick-your-note',
		link:'https://stick-your-note.vercel.app',
		imgAOS: 'fade-up-left',
		textAOS: 'slide-left',
	},
	{
		src: '/Projects/Spark.jpg',
		title: 'Spark Services - Landing Page',
		desc: 'A Static Website based on Desktop, landing page of a business services solution.',
		color: 'white',
		num:'03',
		titleClass: 'top-[20%] left-[30%]',
		hoverDesc: 'Vite, Vue.js, Tailwind',
		github:'https://github.com/jdpena28/spark-landing-page',
		link:'https://jdpena28.github.io/spark-landing-page/',
		imgAOS: 'fade-up-right',
		textAOS: 'slide-right',
	},
]