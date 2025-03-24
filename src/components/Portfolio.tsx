'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import project from '../assest/starter-files-nextjs-animated/assets//project.jpg';
import project1 from '../assest/starter-files-nextjs-animated/assets/proj1.jpg';
import bemyguest from '../assest/starter-files-nextjs-animated/assets/bemyguest.jpg';

const projects = [
	{
		title: 'Be-My-Guest',
		desc: 'Be My Guest is likely a web or mobile application designed to simplify guest management or hospitality experiences, potentially created by Srivasanth-23 as a personal or academic project. The app could serve as a platform for hosts to invite, track, and manage guests for events, accommodations, or shared spaces, with a focus on user-friendly design and basic functionality.',
		devStack: 'MERN stack, MUI',
		link: '',
		git: 'https://github.com/srivasanth23/BemyGuest_final',
		src: bemyguest,
	},
	{
		title: 'Project',
		desc: 'An application where user can invite ',
		devStack: 'PERN stack',
		link: '',
		git: 'https://github.com/srivasanth23/BemyGuest_final',
		src: project,
	},
	{
		title: 'Project-1',
		desc: 'An application where user can invite ',
		devStack: 'Next.js, TailwindCSS',
		link: '',
		git: 'https://github.com/srivasanth23/BemyGuest_final',
		src: project1,
	},
];

const Portfolio = () => {
	return (
		<div
			className='text-white bg-gradient-to-b from-black to-[#381a5f] py-8'
			id='portfolio'
		>
			<h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold m-20'>
				My <span className='text-orange-400'>Projects</span>
			</h1>
			<div className='max-w-[1200px] mt-32 space-y-24 mx-4 lg:mx-auto'>
				{projects.map((p, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 75 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.25 }}
						className={`flex ${
							i % 2 === 1
								? 'flex-col-reverse md:flex-row-reverse gap-12'
								: 'flex-col md:flex-row gap-6'
						}`}
					>
						<div className='space-y-2 max-w-[550px] '>
							<h2 className='text-7xl my-4 text-white/70'>{`0${i + 1}`}</h2>
							<h2 className='text-4xl'>{p.title}</h2>
							<p className='text-lg text-white/70 break-words p-4'>{p.desc}</p>
							<p className='text-xl text-orange-400 font-semibold'>
								{p.devStack}
							</p>
							<div className='w-64 h-[1px] bg-gray-400 my-4'>
								<a
									href={p.link}
									className='mr-6'
								>
									Link
								</a>
								<a href={p.git}> Git </a>
							</div>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src={p.src}
								alt={p.title}
								className='h-[350px] w-auto object-cover border rounded'
							/>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
