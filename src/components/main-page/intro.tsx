import Image from 'next/image';
import React from 'react';

const Intro = () => {
	return (
		<section className='relative flex justify-center items-center mb-[5rem] shadow-xl shadow-black'>
			<Image
				src='/intro.jpg'
				alt='logo'
				width={1980}
				height={808}
				priority
				className='w-[100vw] '
			/>
			<div className='bg-white bg-opacity-85 absolute flex justify-center flex-col items-center w-[40%] p-8 shadow-xl shadow-black rounded-xl'>
				<p className='text-2xl font-semibold leading-10'>
					Witaj w{' '}
					<span className='text-main-color'>SmartEat Advisor</span> -
					Twoim wszechstronnym przewodniku po zdrowym odżywianiu!{' '}
					<br></br>
				</p>
				<p className='text-2xl font-semibold leading-10 mt-3'>
					{' '}
					<span className='text-main-color'>SmartEat Advisor</span> to
					aplikacja pozwalająca kontrolować prawidłowe poziomy kalori
					oraz wszystkich mikro i makroskładników.
				</p>
			</div>
			<Image
				src='/pomidor.png'
				alt=''
				width={300}
				height={295}
				priority
				className='w-[24rem] absolute bottom-[-10rem] left-[-5rem] z-10'
			/>
			<Image
				src='/zioła.png'
				alt=''
				width={600}
				height={600}
				priority
				className='w-[42rem] absolute bottom-[-32rem] right-[-16rem] rotate-[-30deg] z-10'
			/>
		</section>
	);
};

export default Intro;
