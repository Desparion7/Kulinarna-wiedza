'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/utils/utils';
import { usePathname } from 'next/navigation';
import BurgerMenuBtn from './burger-menu-btn';
import MobileMenu from './mobile-menu';
// import MobileMenu from './mobile-menu';

const Header = () => {
	const currentUrl = usePathname();
	const [menuVisible, setMenuVisible] = useState(false);

	const handleToggleMenu = () => {
		setMenuVisible((prev) => {
			!prev
				? (document.body.style.overflow = 'hidden')
				: (document.body.style.overflow = 'auto');
			return !prev;
		});
	};

	return (
		<>
			<header className='sticky flex sm:justify-center justify-between w-[100%] z-10 top-0 bg-white text-black'>
				<motion.nav
					className='sm:container flex justify-between items-center py-2 w-[100vw] relative'
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div>
						<Link href='/'>
							<motion.div
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.1 },
								}}
								className='flex items-center ml-5 sm:ml-0'
							>
								<div className='w-[5rem] sm:w-[8rem]'>
									<Image
										src='/logo.png'
										alt='logo'
										width={500}
										height={500}
										priority
									/>
								</div>
								<p className='text-xl uppercase font-semibold'>
									<span className='text-green-500 '>K</span>
									ulinarna wiedza
								</p>
							</motion.div>
						</Link>
					</div>
					<div className='hidden lg:flex items-end justify-end py-4 px-5'>
						<ul className='flex gap-10 uppercase items-center text-xl tracking-wider font-semibold'>
							<li
								className={cn(`lg:text-md `, {
									[`text-green-500`]: currentUrl === '/',
								})}
							>
								<Link href='/'>
									<div className='flex items-center hover:text-green-500 transition-colors duration-300'>
										<span className='text-green-500'>
											S
										</span>
										trona główna
									</div>
								</Link>
							</li>
							<li
								className={cn(`lg:text-md `, {
									[`text-green-500`]:
										currentUrl === '/baza-produktow',
								})}
							>
								<Link href='/baza-produktow'>
									<div className='flex items-center hover:text-green-500 transition-colors duration-300'>
										<span className='text-green-500'>
											B
										</span>
										aza produktów
									</div>
								</Link>
							</li>
							<li
								className={cn(`lg:text-md `, {
									[`text-green-500`]:
										currentUrl === '/moje-konto',
								})}
							>
								<Link href='/moje-konto'>
									<div className='flex items-center hover:text-green-500 transition-colors duration-300'>
										<span className='text-green-500'>
											M
										</span>
										oje konto
									</div>
								</Link>
							</li>
						</ul>
					</div>
					<motion.div
						className='relative lg:hidden p-2 py-4 mr-2 sm:pr-3 z-30  rounded-lg'
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<BurgerMenuBtn
							isMenuVisible={menuVisible}
							toggle={handleToggleMenu}
						/>
					</motion.div>
				</motion.nav>
				<MobileMenu
					handleToggleMenu={handleToggleMenu}
					menuVisible={menuVisible}
				/>
			</header>
		</>
	);
};

export default Header;
