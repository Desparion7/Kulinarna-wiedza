import Image from 'next/image';

export default function Home() {
	return (
		<section className='relative flex justify-center items-center'>
			<div>
				<Image
					src='/intro4.jpg'
					alt='logo'
					width={1980}
					height={826}
					priority
					className=' w-[100vw] '
				/>
			</div>
		</section>
	);
}
