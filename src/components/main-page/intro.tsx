import Image from 'next/image';
import React from 'react';

const Intro = () => {
	return (
		<section className='relative flex justify-center items-center min-h-[85vh] mb-[5rem]'>
			<div className='h-[85vh]'>
				<Image
					src='/intro.jpg'
					alt='background'
					width={1980}
					height={808}
					priority
					className='hidden 2xl:inline object-cover shadow-xl shadow-black'
				/>
				<Image
					src='/intro.jpg'
					alt='background'
					sizes='80vh'
					fill
					priority
					className='object-cover 2xl:hidden shadow-xl shadow-black'
				/>
			</div>
			<div className='bg-white bg-opacity-85 absolute flex justify-center flex-col  w-[90%] 2xl:w-[40%] p-8 shadow-xl shadow-black rounded-xl'>
				<p className='md:text-xl 2xl:text-2xl font-semibold md:leading-8 2xl:leading-10'>
					Witaj w{' '}
					<span className='text-main-color'>SmartEat Advisor</span> -
					Twoim wszechstronnym przewodniku po zdrowym odżywianiu!{' '}
					<br></br>
				</p>
				<p className='md:text-xl 2xl:text-2xl font-semibold md:leading-8 2xl:leading-10 mt-3'>
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
				className='w-[8rem] 2xl:w-[24rem] absolute bottom-[-10rem] left-[-5rem] z-10'
			/>
			<Image
				src='/zioła.png'
				alt=''
				width={600}
				height={600}
				priority
				className='w-[14rem] 2xl:w-[42rem] absolute bottom-[-15rem] right-[-5rem] 2xl:right-[-16rem] z-10'
			/>
		</section>
	);
};

export default Intro;
