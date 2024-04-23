import Image from 'next/image';
import React from 'react';

const Intro = () => {
	return (
		<section className='relative flex justify-center items-center mb-[5rem] min-h-[85vh]'>
			<div className='h-[85vh]'>
				<Image
					src='/intro.jpg'
					alt='logo'
					width={1980}
					height={808}
					priority
					className='hidden sm:inline object-cover shadow-xl shadow-black'
				/>
				<Image
					src='/intro.jpg'
					alt='logo'
					sizes='85vh'
					fill
					priority
					className='object-cover sm:hidden shadow-xl shadow-black'
				/>
			</div>
			{/* <div className='max-h-[100vh]'>
				<Image
					src='/background.jpg'
					alt='backgorund'
					sizes='100vh'
					quality={80}
					fill
					priority
					className='hidden sm:inline object-cover z-[-3] '
				/>
				<Image
					src='/background-mobile.jpg'
					alt='backgorund-mobile'
					fill
					quality={80}
					priority
					className='sm:hidden z-[-3] object-cover'
				/>
			</div> */}
			{/* <div className='bg-white bg-opacity-85 absolute flex justify-center flex-col items-center w-[40%] p-8 shadow-xl shadow-black rounded-xl'>
				<p className='sm:text-2xl font-semibold leading-10'>
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
			</div> */}
			<Image
				src='/pomidor.png'
				alt=''
				width={300}
				height={295}
				priority
				className='w-[8rem] sm:w-[24rem] absolute bottom-[-10rem] left-[-5rem] z-10'
			/>
			<Image
				src='/zioła.png'
				alt=''
				width={600}
				height={600}
				priority
				className='w-[14rem] sm:w-[42rem] bottom-[-8rem] absolute sm:bottom-[-32rem] right-[-5rem] sm:right-[-16rem] rotate-[-30deg] z-10'
			/>
		</section>
	);
};

export default Intro;
