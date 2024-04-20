import Image from 'next/image';
import React from 'react';

const AboutApp = () => {
	return (
		<section>
			<div className='relative flex justify-center items-center mb-10'>
				<Image
					src='/tło2.jpg'
					alt=''
					width={918}
					height={258}
					priority
					className='w-[100vw] h-[28rem] opacity-30'
				/>
				<div className='w-[50%] mr-[10rem] absolute bg-white bg-opacity-85 p-10 shadow-xl shadow-gray-500 mb-2 rounded-xl border-gray-200 border-2'>
					<h2 className='text-2xl text-main-color font-bold  mb-2 tracking-wider	'>
						Jak to działa?{' '}
					</h2>
					<p className='text-xl font-semibold text-black leading-10'>
						Bez logowania masz dostęp do bazy naszych produktów i
						możesz sprawdzić ile dany produkt dostarcza wartości
						odżywczych.
					</p>
					<p className='text-xl font-semibold text-black leading-10'>
						Po utworzeniu konta i uzupełnieniu niezbędnych
						parametrów możesz zacząć tworzyć dietę na podstawie
						naszych baz danych. A aplikacja wyliczy Ci, w jakim
						stopniu pokrywasz dzienne zapotrzebowanie na kalorie
						oraz wszystkie mikroskładniki.
					</p>
					<div className='w-full flex justify-center gap-10 mt-3'>
						<button className='px-6 py-3 bg-main-color text-white rounded-xl text-xl '>
							Zaloguj się
						</button>
						<button className='px-6 py-3 border-2 border-main-color text-main-color rounded-xl text-xl hover:bg-main-color hover:text-white transition-colors duration-300'>
							Utwórz konto
						</button>
					</div>
				</div>
				<div className='mt-[5rem] absolute  bottom-[-28rem] left-[-10rem] z-10'>
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
			<div className='relative flex justify-center items-center mt-[1rem] shadow-xl shadow-black'>
				<Image
					src='/tło.jpg'
					alt=''
					width={918}
					height={258}
					priority
					className='w-[100vw] h-[28rem]'
				/>
				<div className='w-[50%] absolute bg-white bg-opacity-85 p-10 shadow-xl shadow-black rounded-xl'>
					<h2 className='text-2xl text-main-color font-bold  mb-2 tracking-wider	'>
						Baza produktów{' '}
					</h2>
					<p className='text-xl font-semibold text-black leading-10'>
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
					className='w-[36rem] absolute bottom-[-12rem] right-[-10rem] rotate-[-30deg] z-10'
				/>
			</div>
		</section>
	);
};

export default AboutApp;
