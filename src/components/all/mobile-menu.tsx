import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

type MobileMenuProps = {
	handleToggleMenu: () => void;
	menuVisible: boolean;
};

const MobileMenu = ({ handleToggleMenu, menuVisible }: MobileMenuProps) => {
	const handleCloseMenu = () => {
		handleToggleMenu();
		document.body.style.overflow = 'auto';
	};

	return (
		<nav className='fixed uppercase lg:hidden overflow-hidden z-[20] top-0'>
			<AnimatePresence>
				{menuVisible && (
					<motion.div
						className='bg-black bg-opacity-20 w-screen h-[100vh] font-semibold'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleCloseMenu}
					>
						<motion.div
							className='absolute h-[100vh] w-[100%] left-0 z-[20]'
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: 100, opacity: 0 }}
							onClick={(event) => {
								event.stopPropagation();
							}}
						>
							<div className='absolute w-full bg-black bg-opacity-60 h-[100vh]'></div>
							<Image
								src='/mobile-menu-bg.jpg'
								alt='background mobile'
								sizes='100vh'
								fill
								priority
								className='absolute object-cover xl:hidden shadow-xl shadow-black z-[-1]'
							/>
							<ul className='relative flex flex-col gap-4 custom:gap-6 text-white text-xl custom:text-2xl p-5 mt-10 z-[20]'>
								<li>
									<Link href='/' onClick={handleCloseMenu}>
										Strona główna
									</Link>
								</li>
								<li>
									<Link
										href='/baza-produktow'
										onClick={handleCloseMenu}
									>
										Baza produktów
									</Link>
								</li>
								<li>
									<Link
										href='/moje-konto'
										onClick={handleCloseMenu}
									>
										Moje konto
									</Link>
								</li>
							</ul>
							<div className='relative flex justify-center flex-col items-center flex-end h-full pb-[5rem] z-[20]'>
								<div>
									<Image
										src='/logo.png'
										alt='logo'
										width={500}
										height={500}
										className='w-[10rem] '
										priority
									/>
								</div>
								<div className='text-white text-xl custom:text-3xl flex gap-5'>
									<p className='uppercase font-semibold'>
										<span className='text-main-color '>
											S
										</span>
										mart
										<span className='text-main-color '>
											E
										</span>
										at
									</p>
									<p className='uppercase font-semibold'>
										<span className='text-main-color '>
											A
										</span>
										dvisor
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default MobileMenu;
