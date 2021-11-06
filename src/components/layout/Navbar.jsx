import classes from "./Navbar.module.scss";
import { FaBell } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { SiTodoist } from "react-icons/si";

import AddToDo from "../todos/AddToDo";
import SearchBar from "../UI/SearchBar";

const Navbar = () => {
  return (
    <header className={classes.navbar}>
      <SiTodoist className={classes.icon} />
      <SearchBar />
      <nav>
        <ul>
          <li>
            <AddToDo />
          </li>
          <li>
            <FaBell />
          </li>
          <li>
            <AiFillSetting />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;