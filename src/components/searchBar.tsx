// import { IconType } from 'react-icons';

interface SearchBarProps {
	placeHolder: string;
	label?: string;
	// icon: IconType;
	placeholderStyle?: string;
}

const SearchBar = ({
	placeHolder,
	label,
    placeholderStyle
}: // icon: Icon,
// iconStyle,
SearchBarProps) => {
	return (
		<form className=' relative flex flex-col justify-center items-center '>
			<label
				htmlFor='search'
				className='text-sm font-medium text-gray-900 dark:text-white'
			>
				{label}
			</label>

			<input
				type='search'
				name='search'
				id='search'
				className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${placeholderStyle} `}
				placeholder={placeHolder}
			/>
			{/* {<Icon className={iconStyle} size={20} />} */}
		</form>
	);
};

export default SearchBar;
