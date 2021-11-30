import classes from "./Navbar.module.scss";
import { FaBell } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import AddToDo from "../todos/AddToDo";
import SearchBar from "../UI/SearchBar";
import Logo from "../UI/Logo";
import Button from "../UI/Button";
import AuthContext from "../../store/auth/auth-context";
import { useContext } from "react";

const Navbar = (props) => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={`${classes.navbar} ${props.className}`}>
      <Logo link="/" className={classes.icon} small={true} />
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
          <li>
            <Button onClick={logoutHandler}>log out</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
