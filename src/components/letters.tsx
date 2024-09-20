import { alphabet } from '../utils';
import { useFilteredTerms } from '../hooks';
import { useSelectedLetters } from '../context';

const Letters = () => {
	const { selectedLetters, setSelectedLetters } = useSelectedLetters();
	console.log(selectedLetters);

	const { data: filteredTerms = [], isLoading } =
		useFilteredTerms(selectedLetters);

	console.log({ filteredTerms });

	const handleLetterClick = (letter: string) => {
		setSelectedLetters((prevLetters) =>
			prevLetters.includes(letter)
				? prevLetters.filter((l) => l !== letter)
				: [...prevLetters, letter]
		);
	};

	return (
		<div className='w-full flex justify-between items-center'>
			
			{alphabet.map((letter) => (
				<span
					key={letter}
					className={` text-sm font-medium  ${
						selectedLetters.includes(letter) ? 'text-text' : 'text-gray-400'
					}`}
					onClick={() => handleLetterClick(letter)}
				>
					{letter}
				</span>
			))}
			

			{isLoading && <p>Loading...</p>}
			
		</div>
	);
};

export default Letters;
