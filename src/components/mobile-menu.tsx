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
		<nav className='absolute uppercase lg:hidden overflow-hidden z-[20] '>
			<AnimatePresence>
				{menuVisible && (
					<motion.div
						className='bg-black bg-opacity-20 w-screen h-screen font-semibold'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleCloseMenu}
					>
						<motion.div
							className='absolute  h-screen w-[100%] left-0 z-[20]'
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: 100, opacity: 0 }}
							onClick={(event) => {
								event.stopPropagation();
							}}
							style={{
								background:
									'linear-gradient(141deg, rgba(219,231,212,1) 17%, rgba(211,250,215,1) 55%, rgba(64,240,81,1) 98%)',
							}}
						>
							<ul className='flex flex-col gap-2 custom:gap-4 text-black text-lg p-10  mt-10'>
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
							<div className='flex justify-center'>
								<Image
									src='/logo.png'
									alt='logo'
									width={245}
									height={229}
									className='absolute bottom-14 w-[6rem] '
									priority
								/>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default MobileMenu;
