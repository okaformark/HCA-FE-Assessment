import { useSelectedLetters } from '../context';
import { useFilteredTerms } from '../hooks';

interface TermProps {
	letter: string;
}
const Terms = ({ letter }: TermProps) => {
	const { selectedLetters } = useSelectedLetters();
	const { data: filteredTerms } = useFilteredTerms(selectedLetters);
	return (
		<div className='grid grid-cols-2 gap-1'>
			{filteredTerms && filteredTerms.length > 0
				? filteredTerms
						.filter((term) => term.title.toUpperCase().startsWith(letter))
						.map((term, termIndex) => (
							<div
								className='text-text text-sm'
								key={`${termIndex}-${term.href}`}
							>
								<a href={term.href}>{term.title}</a>
							</div>
						))
				: null}
		</div>
	);
};

export default Terms;
