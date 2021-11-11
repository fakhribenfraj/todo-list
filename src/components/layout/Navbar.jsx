import classes from "./Navbar.module.scss";
import { FaBell } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { SiTodoist } from "react-icons/si";

import AddToDo from "../todos/AddToDo";
import SearchBar from "../UI/SearchBar";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo";

const Navbar = () => {
  return (
    <header className={classes.navbar}>
      <Logo link="/" className={classes.icon} small={true}/>

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
