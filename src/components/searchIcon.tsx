import { FaSearch } from 'react-icons/fa';

interface SearchIconProp {
 style:string;
}
const SearchIcon = ({style}:SearchIconProp) => {
	return (
		<div className={style}>
			<FaSearch size={20} />
		</div>
	);
};

export default SearchIcon;
