import Image from 'next/image';
import React from 'react';
import phone from '../assest/starter-files-nextjs-animated/assets/phone.png';
import mail from '../assest/starter-files-nextjs-animated/assets/mail.png';

const ContactUs = () => {
	return (
		<div className='bg-black'>
			<div
				className='max-w-[1200px] mx-auto flex flex-col justify-center lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8 items-center'
				id='contact'
			>
				<div className='flex justify-center items-center'>
					<ul className='space-y-4'>
						<li className='flex items-center'>
							<Image
								src={phone}
								alt='phone'
								className='md:h-[110px] h-[70px] w-[70px] md:w-auto mr-6'
							/>
							<p className='md:text-xl text-sm'> +91 7205577673</p>
						</li>
						<li className='flex items-center'>
							<Image
								src={mail}
								alt='mail'
								className='md:h-[110px] h-[70px] w-[70px] md:w-auto mr-6'
							/>
							<p className='md:text-xl text-sm'>
								{' '}
								srivasanthjammula2303@gmail.com
							</p>
						</li>
					</ul>
				</div>

				<div className='bg-white/10 p-6 rounded-xl max-w-[550px] items-center flex flex-col'>
					<h2 className='text-3xl md:text-5xl font-bold text-orange-400 mb-4'>
						Lets Connect
					</h2>
					<p className='text-white/70 mb-6'>
						Send me a message and lets schedule a call
					</p>
					<form
						action='https://getform.io/f/bmdkropa'
						method='POST'
						className='space-y-4'
					>
						<div className='grid md:grid-cols-2 gap-4'>
							<input
								type='text'
								name='firstname'
								className='bg-black/70 grid-cols-1 rounded-xl p-3 focus:outline-none focus:ring-orange-400'
								placeholder='Firstname '
							/>
							<input
								type='text'
								name='lastname'
								className='bg-black/70 grid-cols-1  rounded-xl p-3 focus:outline-none focus:ring-orange-400'
								placeholder='Lastname '
							/>
							<input
								type='email'
								name='email'
								className='bg-black/70 grid-cols-1  rounded-xl p-3 focus:outline-none focus:ring-orange-400'
								placeholder='Email '
							/>
							<input
								type='phone'
								name='phone'
								className='bg-black/70 grid-cols-1  rounded-xl p-3 focus:outline-none focus:ring-orange-400'
								placeholder='Phone Number '
							/>
						</div>
						<textarea
							className='bg-black/70 mt-3 rounded-xl p-3 focus:outline-none focus:ring-orange-400 w-[100%]'
							placeholder='Your Message'
						/>
						<button
							type='submit'
							className='bg-orange-700 hover:bg-orange-500 text-white px-6 mt-3 py-2 w-full font-semibold'
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
