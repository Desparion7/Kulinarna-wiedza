import Image from 'next/image';

export default function Home() {
	return (
		<>
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
						<span className='text-main-color'>
							SmartEat Advisor
						</span>{' '}
						- Twoim wszechstronnym przewodniku po zdrowym
						odżywianiu! <br></br>
					</p>
					<p className='text-2xl font-semibold leading-10 mt-3'>
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
							Bez logowania masz dostęp do bazy naszych produktów
							i możesz sprawdzić ile dany produkt dostarcza
							wartości odżywczych.
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
							Baza artykułów cały czas jest rozwijana. Jeśli nie
							uda Ci się znaleść danego produktu w naszej bazie
							możesz samodzielnie utworzyć karte danego produktu.
							Taki produkt dostępny będzie tylko z Twojego panelu
							do momentu zatwierdzenia go przez administratora.
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
		</>
	);
}
