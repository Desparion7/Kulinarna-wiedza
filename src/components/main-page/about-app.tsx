import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutApp = () => {
	return (
		<section className='mt-[12rem]'>
			<div className='relative flex justify-center items-center mb-10'>
				<Image
					src='/tło2.jpg'
					alt=''
					width={918}
					height={258}
					priority
					className='w-[100vw] h-[28rem] opacity-30 z-[-3]'
				/>
				<div className='w-[95%] lg:w-[70%] absolute bg-white bg-opacity-85 p-5 md:p-8 lg:p-10 shadow-xl shadow-gray-500 mb-2 rounded-sm border-gray-200 border-2 z-5 text-center md:text-left'>
					<h2 className='text-xl md:text-2xl text-main-color font-bold  mb-2 tracking-wider'>
						Jak to działa?{' '}
					</h2>
					<p className='md:text-xl font-semibold text-black leading-8 md:leading-10'>
						Bez logowania masz dostęp do bazy naszych produktów i
						możesz sprawdzić ile dany produkt dostarcza wartości
						odżywczych.
					</p>
					<p className='md:text-xl font-semibold text-black leading-8 md:leading-10'>
						Po utworzeniu konta i uzupełnieniu niezbędnych
						parametrów możesz zacząć tworzyć dietę na podstawie
						naszych baz danych. A aplikacja wyliczy Ci, w jakim
						stopniu pokrywasz dzienne zapotrzebowanie na kalorie
						oraz wszystkie mikroskładniki.
					</p>
					<div className='w-full flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-10 mt-8'>
						<Link href='/logowanie'>
							<button className='px-6 py-3 w-[200px] bg-main-color text-white rounded-xl lg:text-xl transition-all hover:scale-105 duration-300'>
								Zaloguj się
							</button>
						</Link>
						<Link href='/rejestracja'>
							<button className='px-6 py-3 w-[200px] border-2 border-main-color text-main-color rounded-xl lg:text-xl hover:bg-main-color hover:text-white transition-colors duration-300'>
								Utwórz konto
							</button>
						</Link>
					</div>
				</div>
				<div className='mt-[5rem] absolute  bottom-[-28rem] left-[-10rem] z-[-2]'>
					<Image
						src='/banany.png'
						alt=''
						width={600}
						height={600}
						priority
						className='w-[36rem] '
					/>
				</div>
			</div>
			<div className='relative flex justify-center items-center mt-[10rem] shadow-xl shadow-black h-[32rem]'>
				<Image
					src='/tło.jpg'
					alt=''
					width={918}
					height={258}
					priority
					className='w-[100vw] h-[33rem] z-[-3]'
				/>
				<div className='w-[95%] lg:w-[70%] absolute bg-white bg-opacity-85 p-5 md:p-10 shadow-xl shadow-black rounded-sm text-center md:text-left'>
					<h2 className='text-xl md:text-2xl text-main-color font-bold  mb-2 tracking-wider'>
						Baza produktów{' '}
					</h2>
					<p className='md:text-xl font-semibold text-black leading-8 md:leading-10'>
						Baza artykułów cały czas jest rozwijana. Jeśli nie uda
						Ci się znaleść danego produktu w naszej bazie możesz
						samodzielnie utworzyć karte danego produktu. Taki
						produkt dostępny będzie tylko z Twojego panelu do
						momentu zatwierdzenia go przez administratora.
					</p>
				</div>
				<Image
					src='/sałata.png'
					alt=''
					width={600}
					height={600}
					priority
					className='w-[20rem] xl:w-[36rem] absolute bottom-[-12rem] right-[-10rem] rotate-[-30deg] z-10'
				/>
			</div>
		</section>
	);
};

export default AboutApp;
