import { FaSearch } from "react-icons/fa";
import classes from './SearchBar.module.scss'
const SearchBar = () => {
  return (
    <div className={classes.searchBar}>
      <FaSearch />
      <input type="text" placeholder='quick search'/>
    </div>
  );
};

export default SearchBar;
