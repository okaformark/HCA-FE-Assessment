import { FOOTER_LINKS } from '../constants';

const Footer = () => {
	return (
		<div className='bg-primary md:sticky md:bottom-0 md:z-10 py-1 sm:px-4 '>
			<div className='flex justify-between items-center max-w-[1024px] mx-auto '>
				<span className='text-white text-xs font-medium mr-12'>
					Copyright 1999-2024 C-HCA, Inc.; All rights reserved.
				</span>
				<ul className='flex flex-wrap gap-1'>
					{FOOTER_LINKS.map((item, index) => (
						<li key={`${index}-${item}`}>
							<a
								href='#'
								className='text-xs text-white underline underline-offset-2'
							>
								{item}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Footer;
