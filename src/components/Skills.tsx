import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { CgCPlusPlus } from 'react-icons/cg';
import { DiFirebase, DiJavascript, DiMongodb } from 'react-icons/di';
import {
	FaBootstrap,
	FaHtml5,
	FaNodeJs,
	FaPython,
	FaReact,
} from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa6';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
	SiExpress,
	SiMui,
	SiReactquery,
	SiReactrouter,
	SiRedux,
	SiSqlite,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';

const skilIcons = [
	{ icon: <DiMongodb size={140} />, label: 'MongoDb' },
	{ icon: <SiExpress size={140} />, label: 'Express.js' },
	{ icon: <FaReact size={140} />, label: 'React' },
	{ icon: <FaNodeJs size={140} />, label: 'Node.js' },
	{ icon: <RiNextjsFill size={140} />, label: 'NextJs' },
	{ icon: <FaBootstrap size={140} />, label: 'Bootstrap' },
	{ icon: <BsGithub size={140} />, label: 'Github' },
	{ icon: <SiSqlite size={140} />, label: 'SQLite' },
	{ icon: <SiRedux size={140} />, label: 'Redux-toolkit' },
	{ icon: <DiFirebase size={140} />, label: 'Firebase' },
	{ icon: <RiTailwindCssFill size={140} />, label: 'Tailwind CSS' },
	{ icon: <SiMui size={140} />, label: 'Mui' },
	{ icon: <SiReactquery size={140} />, label: 'React-query' },
	{ icon: <SiReactrouter size={140} />, label: 'React-router' },
	{ icon: <TbBrandFramerMotion size={140} />, label: 'Framer-Motion' },
	{ icon: <FaHtml5 size={140} />, label: 'HTML' },
	{ icon: <FaCss3 size={140} />, label: 'CSS' },
	{ icon: <DiJavascript size={140} />, label: 'Javascript' },
	{ icon: <FaPython size={140} />, label: 'Python' },
	{ icon: <CgCPlusPlus size={140} />, label: 'CPP' },
	{ icon: <VscAzure size={140} />, label: 'Azure' },
];

const Skills = () => {
	return (
		<div className='bg-[linear-gradient(to_top,#000000,#381a5f_80%)] py-32'>
			<div className='text-white max-w-[1200px] mx-auto p-8 text-center'>
				<h2 className='text-6xl font-bold my-10'> What I do</h2>

				<div className='flex flex-row flex-wrap gap-6 justify-center'>
					{skilIcons.map((skill, index) => (
						<div
							key={index}
							className='h-[150px] w-[150px] md:h-[170px] md:w-[170px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'
						>
							{skill.icon}
							<p className='mt-2'> {skill.label}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
