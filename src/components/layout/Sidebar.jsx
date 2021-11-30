import classes from "./Sidebar.module.scss";
import { FiInbox } from "react-icons/fi";
import { BsCalendarWeek, BsCalendarEvent } from "react-icons/bs";
import { MdLabelOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={classes.sideBar}>
      <nav className={classes.sideBar__nav}>
        <Link to="inbox" className={classes.link}>
          <FiInbox />
          <span className={classes.link__title}>inbox</span>
        </Link>
        <Link to="today" className={classes.link}>
          <BsCalendarEvent />
          <span className={classes.link__title}>today</span>
        </Link>
        <Link to="next2days" className={classes.link}>
          <BsCalendarWeek />
          <span className={classes.link__title}>next 2days</span>
        </Link>
        <Link to="important" className={classes.link}>
          <MdLabelOutline />
          <span className={classes.link__title}>important</span>
        </Link>
        <section className={classes.options}>
          <h3>project</h3>
          <ul>
            <li>
              <Link to="health" className={classes.link}>
                <span className={classes.link__title}>health</span>
              </Link>
            </li>
            <li>
              <Link to="meeting" className={classes.link}>
                <span className={classes.link__title}>meeting</span>
              </Link>
            </li>
            <li>
              <Link to="house" className={classes.link}>
                <span className={classes.link__title}>house</span>
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default Sidebar;
