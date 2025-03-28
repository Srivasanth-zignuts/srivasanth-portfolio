import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='bg-black'>
			<div className='p-6 lg:p-1  text-white/70 py-80 container mx-auto max-w-[1000px] border-t border-gray-700 pt-4 flex justify-between items-center'>
				<h1 className='text-2xl font-bold'> Srivasanth </h1>
				<div className='flex space-x-6 mt-4'>
					<a
						href='#'
						className='hover:text-gray-300'
					>
						<FaLinkedin size={24} />
					</a>
					<a
						href='#'
						className='hover:text-gray-300'
					>
						<FaGithub size={24} />
					</a>
					<a
						href='#'
						className='hover:text-gray-300'
					>
						<FaInstagram size={24} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
