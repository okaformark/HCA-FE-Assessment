import { useQuery } from 'react-query';

interface LettersProp {
	letter: string;
	title: string;
	href: string;
}

const fetchFilteredTerms = async (
	letters: string[]
): Promise<LettersProp[]> => {
	const res = await fetch('src/HCA-FE-Assessment/assets/data.json');
	const jsonData = await res.json();
	const data: { title: string; link: string }[] = jsonData.termList;

	if (letters.length === 0) return [];

	return data.flatMap((item) =>
		letters
			.filter((letter) => item.title.toUpperCase().startsWith(letter))
			.map((letter) => ({
				letter, // Pass the matching letter here
				title: item.title,
				href: item.link,
			}))
	);
};

export const useFilteredTerms = (selectedLetters: string[]) => {
	return useQuery(['filteredTerms', selectedLetters], () =>
		fetchFilteredTerms(selectedLetters)
	);
};
