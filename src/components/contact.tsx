import { ABOUT_US } from '../constants';
import { FaFacebook, FaInstagram, FaTwitter, FaBlog } from 'react-icons/fa';

const Contact = () => {
	return (
		<div className='mt-4 h-full bg-white py-4 '>
			<div className='flex justify-between items-center max-w-[1024px] mx-auto '>
				<div className='flex flex-col items-center'>
					<img
						src='src/HCA-FE-Assessment/assets/2024-HCAHouston-FC-Logo-blue.svg'
						alt='logo'
						className='h-8'
					/>

					<div className='flex flex-col mt-4'>
						<span className="text-xs text-[#1F2532']">
							3737 Buffalo Speedway {''}
						</span>
						<span className='text-xs text-[#1F2532]'>Suite 1400 </span>
						<span className='text-xs text-[#1F2532]'>Houston, TX 77098</span>
					</div>
				</div>
				<div className='flex flex-col h-full'>
					<a className='text-xs text-[#1F2532]' href=''>
						About Us
					</a>
					<ul>
						{ABOUT_US.map((item, index) => (
							<li key={`${index}-${item}`}>
								<a href='#' className='text-xs text-text'>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div className='flex flex-col'>
					<span className='text-xs text-[#1F2532]'>Follow us</span>
					<div className='flex gap-3'>
						{<FaFacebook />}
						{<FaInstagram />}
						{<FaTwitter />}
						{<FaBlog />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
