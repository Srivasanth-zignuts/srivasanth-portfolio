'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import cursor from '../assest/starter-files-nextjs-animated/assets/icon1.png';
import lightning from '../assest/starter-files-nextjs-animated/assets/icon2.png';
import profilepic from '../assest/starter-files-nextjs-animated/assets/profilepic.png';

const Hero = () => {
  return (
    <div className='py-16 md:py-24 relative overflow-clip bg-gradient-to-b from-black via-[#2B1942] via-[#8F5C55] to-[#DBAF6E]'>
      {/* Responsive Radial Gradient */}
	  <div className='absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'></div>{' '}

      <div className='relative px-4'>
        {/* Responsive Heading */}
        <div className='text-4xl md:text-6xl lg:text-8xl font-bold text-center'>
          <h1 className='text-[#98B4CE]'>Hi, I am</h1>
          <h1 className='text-[#E48A57]'>Srivasanth Jammula</h1>
        </div>

        {/* Draggable Cursor Icon */}
        <motion.div
          className='absolute top-[80px] left-[10px] md:top-[120px] md:left-[20px] lg:top-[170px] lg:left-[280px] hidden md:block'
          drag
        >
          <Image
            src={cursor}
            height={80}
            width={80}
            alt='cursor'
            className='md:w-[120px] md:h-[120px] lg:w-[190px] lg:h-[190px]'
            draggable='false'
          />
        </motion.div>

        {/* Draggable Lightning Icon */}
        <motion.div
          className='absolute top-[10px] right-[10px] md:top-[20px] md:right-[50px] lg:right-[220px] hidden md:block'
          drag
        >
          <Image
            src={lightning}
            height={100}
            width={100}
            alt='lightning'
            className='md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px]'
            draggable='false'
          />
        </motion.div>

        {/* Responsive Paragraph */}
        <p className='text-center text-base md:text-lg lg:text-xl max-w-[90%] md:max-w-[500px] mx-auto mt-6 md:mt-8 text-white/80'>
          I am a full-stack developer focused on creating websites that provide
          the best experience for users.
        </p>

        {/* Responsive Profile Picture */}
        <Image
          src={profilepic}
          alt='profile-pic'
          className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] mx-auto mt-8 md:mt-12 object-cover rounded-full'
        />
      </div>
    </div>
  );
};

export default Hero;