import Image from 'next/image';
import React from 'react';

const Intro = () => {
	return (
		<section className='mt-[12vh] mb-[10vh]'>
			<div className='relative h-[85vh] flex justify-center items-center'>
				<Image
					src='/intro.jpg'
					alt='background mobile'
					sizes='80vh'
					fill
					priority
					className='absolute object-cover xl:hidden shadow-xl shadow-black bg-black'
				/>
				<Image
					src='/intro.jpg'
					alt='background'
					width={1980}
					height={808}
					priority
					className='absolute hidden xl:inline shadow-xl shadow-black top-0 h-[88vh]'
				/>
				<div className='absolute bg-white bg-opacity-85 w-[90%] 2xl:w-[50%] p-6 shadow-xl shadow-black rounded-sm text-center md:text-justify my-[6rem]'>
					<h1 className='text-main-color text-center mb-2 text-xl 2xl:text-3xl uppercase font-bold tracking-widest'>
						SmartEat Advisor
					</h1>
					<p className='md:text-2xl font-semibold leading-8 2xl:leading-10'>
						Witaj w{' '}
						<span className='text-main-color'>
							SmartEat Advisor
						</span>{' '}
						- Twoim wszechstronnym przewodniku po zdrowym
						odżywianiu! <br></br>
					</p>
					<p className='md:text-2xl font-semibold leading-8 2xl:leading-10 mt-3 md:text'>
						{' '}
						<span className='text-main-color'>
							SmartEat Advisor
						</span>{' '}
						to aplikacja pozwalająca kontrolować prawidłowe poziomy
						kalori oraz wszystkich mikro i makroskładników.
					</p>
				</div>
				<Image
					src='/pomidor.png'
					alt=''
					width={300}
					height={295}
					priority
					className='w-[10rem] 2xl:w-[24rem] absolute bottom-[-5rem] lg:bottom-[-12rem] left-[-5rem] z-10'
				/>
				<Image
					src='/zioła.png'
					alt=''
					width={600}
					height={600}
					priority
					className='w-[16rem] 2xl:w-[42rem] absolute bottom-[-7rem] lg:bottom-[-16rem] right-[-6rem] lg:right-[-5rem] 2xl:right-[-16rem] rotate-[-20deg] z-10'
				/>
			</div>
		</section>
	);
};

export default Intro;
