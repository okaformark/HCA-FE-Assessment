import { useSelectedLetters } from '../context';

import Terms from './terms';

const Letter = () => {
	const { selectedLetters } = useSelectedLetters();

	return (
		<div className='flex flex-grow flex-col flex-wrap max-w-[1024px] mx-auto bg-white p-4 mt-4 h-full'>
			{selectedLetters.length > 0
				? selectedLetters.map((letter, index) => (
						<div>
							<h2
								key={index}
								className='text-lg text-[#1F2532] underline underline-offset-4'
							>
								{letter}
							</h2>
							<Terms letter={letter} />
						</div>
				  ))
				: ''}
		</div>
	);
};

export default Letter;
