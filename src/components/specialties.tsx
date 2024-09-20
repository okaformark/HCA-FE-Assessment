import Letters from './letters';

const Specialties = () => {
	return (
		<div className='h-20 py-4 sm:px-4 bg-white'>
			<div className='max-w-[1024px] mx-auto flex-col flex items-center'>
				<p className='text-medium font-semibold text-[#1F2532]'>
					Treatments, Services and Specialties
				</p>
				<Letters />
			</div>
		</div>
	);
};

export default Specialties;
