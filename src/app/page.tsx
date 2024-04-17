import Image from 'next/image';

export default function Home() {
	return (
		<section className=' flex flex-col justify-center items-center'>
			<div className='relative flex justify-center items-center mb-[5rem]'>
				<Image
					src='/intro2.jpg'
					alt='logo'
					width={1968}
					height={812}
					priority
					className='w-[100vw] '
				/>
				<div className='bg-white bg-opacity-85 absolute flex justify-center items-center w-[40%]'>
					<p className='text-3xl font-bold p-10 leading-10'>
						Witaj w{' '}
						<span className='text-main-color'>
							SmartEat Advisor
						</span>{' '}
						- Twoim wszechstronnym przewodniku po zdrowym
						odżywianiu! Znajdziesz tutaj kompleksową wiedze na temat
						produktów spożywczych.
					</p>
				</div>
				<Image
					src='/pomidor.png'
					alt=''
					width={300}
					height={295}
					priority
					className='w-[20rem] absolute bottom-[-6rem] left-[-5rem]'
				/>
				<Image
					src='/zioła.png'
					alt=''
					width={300}
					height={300}
					priority
					className='w-[32rem] absolute bottom-[-10rem] right-[-10rem] rotate-[-30deg]'
				/>
			</div>
			<div className='w-[50%]'>
				<h2 className='text-2xl font-bold uppercase mb-2 tracking-wider	'>
					Kompleksowa baza danych{' '}
				</h2>
				<p className='text-xl leading-10'>
					Posiadamy kompleksową bazę danych produktów spożywczych,
					która umożliwia szybkie i łatwe znalezienie informacji na
					temat zawartości kalorycznej oraz składników odżywczych.
					Dzięki naszej rozbudowanej bazie danych możesz szybko
					znaleźć informacje o ulubionych produktach spożywczych i
					śledzić ich wpływ na Twoją dietę.
				</p>
			</div>
			<div className='mt-[5rem] relative w-full'>
				<Image
					src='/sałata.png'
					alt=''
					width={300}
					height={300}
					priority
					className='w-[36rem] absolute  bottom-[-28rem] left-[-10rem] rotate-[80deg]'
				/>
			</div>
		</section>
	);
}
