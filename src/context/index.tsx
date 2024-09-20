import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedLettersContextType {
	selectedLetters: string[];
	setSelectedLetters: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectedLettersContext = createContext<
	SelectedLettersContextType | undefined
>(undefined);

export const SelectedLettersProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

	return (
		<SelectedLettersContext.Provider
			value={{ selectedLetters, setSelectedLetters }}
		>
			{children}
		</SelectedLettersContext.Provider>
	);
};

export const useSelectedLetters = () => {
	const context = useContext(SelectedLettersContext);
	if (!context) {
		throw new Error(
			'useSelectedLetters must be used within a SelectedLettersProvider'
		);
	}
	return context;
};
