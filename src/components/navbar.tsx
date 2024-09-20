import { useState } from 'react';
import { NAVMENU } from '../constants';
import { FaHome } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import SearchBar from './searchBar';
import SearchIcon from './searchIcon';

const NavBar = () => {
	const [nav, setNav] = useState<boolean>(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<nav className='bg-primary h-14 px-4 py-2 text-white sticky top-0 z-10 '>
			<div className='flex justify-between items-center w-full'>
				{/* MD Logo */}
				<div className=' hidden md:flex md:items-center'>
					<img
						src='src/assets/2024-HCAHouston-FC-Logo.svg'
						alt='logo'
						className='h-8 w-auto'
					/>
					<FaHome className='ml-4' />
				</div>

				{/* MD Navigation Menu */}
				<ul className='hidden md:flex space-x-4'>
					{NAVMENU.map((nav) => (
						<li key={nav} className='text-sm font-normal'>
							{nav}
						</li>
					))}
				</ul>
				{/* Mobile logo */}
				<div className='md:hidden'>
					<img
						src='src/assets/2024-HCAHouston-FC-Logo.svg'
						alt='logo'
						className='h-8 '
					/>
				</div>

				{/* Hamburger */}
				<div onClick={handleNav} className='block md:hidden pr-4'>
					{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
				</div>
				{/* Mobile Navigation Menu */}
				<ul
					className={
						nav
							? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-primary ease-in-out duration-500'
							: 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
					}
				>
					{NAVMENU.map((nav) => (
						<li
							key={nav}
							className='text-medium p-4 md:text-sm font-normal hover:scale-100 hover:shadow-md'
						>
							{nav}
						</li>
					))}
				</ul>

				{/* Search Bar */}
				<div className=' relative flex'>
					<SearchBar
						placeHolder='search'
						placeholderStyle='placeholder:px-10 placeholder:text-md'
						// icon={FaSearch}
						// iconStyle='absolute left-1 text-gray-400'
					/>
					<SearchIcon style='absolute top-1/2 left-4 transform  -translate-y-1/2 text-gray-300' />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
