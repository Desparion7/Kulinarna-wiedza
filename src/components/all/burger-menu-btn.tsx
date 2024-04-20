'use client';
import React from 'react';

type MenuToggleButtonProps = {
	toggle: React.Dispatch<React.SetStateAction<boolean>>;
	isMenuVisible: boolean;
};

const BurgerMenuBtn = ({ toggle, isMenuVisible }: MenuToggleButtonProps) => {
	return (
		<>
			{!isMenuVisible ? (
				<button
					aria-label='toggle menu'
					onClick={() => toggle((prev) => !prev)}
					className='relative border border-transparent cursor-pointer z-50 focus:outline-none bg-transparent'
				>
					<div className='relative w-[60px] h-10'>
						<div className='absolute right-0 bg-green-500 h-2 w-full' />
						<div className='absolute right-0 bg-black h-2 w-full top-3' />
						<div className='absolute right-0 bg-green-500 h-2 w-full top-6' />
					</div>
				</button>
			) : (
				<button
					aria-label='toggle menu'
					onClick={() => toggle((prev) => !prev)}
					className='relative border border-transparent cursor-pointer z-50 focus:outline-none bg-transparent'
				>
					<div className='relative w-[60px] h-10'>
						<div className='absolute right-0 bg-green-500  top-3 h-2 w-full rotate-[135deg]' />
						<div className='absolute right-0 bg-black top-3 h-2 w-full rotate-[45deg]' />
					</div>
				</button>
			)}
		</>
	);
};

export default BurgerMenuBtn;
