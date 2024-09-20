import { FaRegClock } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { IoIosWarning } from 'react-icons/io';
import Button from './button';
import Badge from './badge';

const AppBar = () => {
	return (
		<div className='flex justify-between items-center h-12 px-4 text-white bg-white'>
			<div className='flex items-center space-x-2 px-4 '>
				<FaRegClock color='#00558c' />
				<p className='font-bold text-text sm:text-sm md:text-md'>
					View All ER Wait times
				</p>
				<MdArrowDropDown color='#1F2532' size={30} />
			</div>
			<div className='flex space-x-4'>
				<Button styles='bg-primary text-sm'>
					<MdOutlineCalendarMonth />
					<p className='px-1 text-xs md:text-md'>Make an Appointment </p>
				</Button>
				<Button styles='bg-[#F8DADE] text-sm font-bold text-[#1F2532]'>
					<IoIosWarning color='#DF2500' size={18} />
					<p className='px-1'>Alerts </p>
					<Badge styles='bg-white text-[#DF2500]' count={2} />
				</Button>
			</div>
		</div>
	);
};

export default AppBar;
