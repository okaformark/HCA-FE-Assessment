import SearchBar from './searchBar';
import SearchIcon from './searchIcon';

const Hero = () => {
	return (
		<div className='h-24 bg-text py-4 px-4 '>
			<div className='max-w-[1024px] mx-auto flex justify-between'>
				<div className='flex flex-col gap-1'>
					<h1 className='text-white text-xl font-bold'>Find a Care</h1>
					<div className='relative flex items-center '>
						<SearchBar
							placeHolder='What are you looking for?'
							placeholderStyle='placeholder:text-xs'
						/>
						<SearchIcon style='border rounded-md p-2 bg-white' />
					</div>
				</div>
				<p className='text-white'>Need help? We're here.</p>
			</div>
		</div>
	);
};

export default Hero;
