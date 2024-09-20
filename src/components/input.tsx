import React from 'react';

interface InputProps {
	style?: string; // Optional, since it's not always required
	placeholder: string;
	searchIcon: React.ComponentType;
	iconStyle?: string; // Use CSSProperties for style, also
	iconPosition?: 'left' | 'right'; // Union type to specify valid positions
}

const Input = ({
	style,
	placeholder,
	searchIcon: SearchIcon,
	iconStyle,
	iconPosition = 'left', // default to 'left'
}: InputProps) => {
	const iconPositionClasses =
		iconPosition === 'left' ? 'left-0 pl-3' : 'right-0 pr-3';

	return (
		<div className={`relative w-full ${style}`}>
			<label
				htmlFor='search'
				className='text-sm font-medium text-gray-900 dark:text-white block mb-2'
			>
				Search
			</label>
			<div
				className={`absolute inset-y-0 ${iconPositionClasses} pointer-events-none ${iconStyle}`}
			>
				{/* Render the search icon if provided, with dynamic positioning */}
				{SearchIcon && <SearchIcon />}
				<input
					type='search'
					id='search'
					className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
						iconPosition === 'left' ? 'pl-10' : 'pr-10'
					} dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

export default Input;
