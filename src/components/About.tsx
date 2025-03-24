'use client';
import React from 'react';
import Image from 'next/image';
import pc from '../assest/starter-files-nextjs-animated/assets/pc.png';
import book from '../assest/starter-files-nextjs-animated/assets/book.png';
import card from '../assest/starter-files-nextjs-animated/assets/card.png';
import finance from '../assest/starter-files-nextjs-animated/assets/finance.png';

const About = () => {
	return (
		<div
			className='max-w-[1200px] mx-auto'
			id='about'
		>
			<h1 className='text-white text-4xl text-center md:text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>
				About <span className='text-orange-400'>Me</span>
			</h1>

			<div className='grid grid-cols-8 gap-6 place-items-center p-3'>
				<div className='col-span-8 lg:col-span-4 w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
					<div className='flex flex-row-reverse p-6'>
						<Image
							src={book}
							alt='book'
							className='w-auto h-[130px]'
						/>
						<div className='flex flex-col mt-4'>
							<h2 className='text-2xl font-bold text-white/90'>Education</h2>
							<p className='text-lg text-white/70 mt-2'>
								I had done my bachelor&apos;s in Computer science and
								Engineering - core from Parul University, Vadodara, Gujarat.
							</p>
						</div>
					</div>
				</div>

				<div className='col-span-8 lg:col-span-4 w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
					<div className='flex flex-row p-6'>
						<Image
							src={pc}
							alt='pc'
							className='w-auto h-[130px]'
						/>
						<div className='flex flex-col mt-4'>
							<h2 className='text-2xl font-bold text-white/90'>
								Problem - Solving
							</h2>
							<p className='text-lg text-white/70 mt-2'>
								I mainly focus on fullstack development and Python coding. I
								approch challenges with a creative and systematic mindset.
							</p>
						</div>
					</div>
				</div>

				<div className='col-span-8 lg:col-span-3 w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
					<div className='flex flex-row-reverse p-6'>
						<Image
							src={card}
							alt='card'
							className='w-auto h-[130px]'
						/>
						<div className='flex flex-col mt-4'>
							<h2 className='text-2xl font-bold text-white/90'>Experince</h2>
							<p className='text-lg text-white/70 mt-2'>
								I have a diverse portfolio of projects. And with 0.8 years of
								experince.{' '}
							</p>
						</div>
					</div>
				</div>

				<div className='col-span-8 lg:col-span-5 w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
					<div className='flex flex-row p-6'>
						<Image
							src={finance}
							alt='finance'
							className='w-auto h-[130px]'
						/>
						<div className='flex flex-col mt-4'>
							<h2 className='text-2xl font-bold text-white/90'>
								Technical Skills
							</h2>
							<p className='text-lg text-white/70 mt-2'>
								{' '}
								As a fullstack web developer, I specialize in Azure, reactJs,
								NextJs, Tailwind Css, Node, Express and many more npm packages
								and libraries. My expertise exteds to createing responsive,
								user-friendly interfaces efficent with backend solutions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
