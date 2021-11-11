import { SiTodoist } from "react-icons/si";
import { Link } from "react-router-dom";
import classes from "./Logo.module.scss";
const Logo = (props) => {
  return (
    <Link to={props.link || "/"} className={`${classes.logo} ${props.className}`}>
      <SiTodoist />
      {!props.small && <h4 className={classes.logo__title}>todoist</h4>}
    </Link>
  );
};
export default Logo;
