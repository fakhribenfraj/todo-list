import { Fragment } from "react";
import { SiTodoist } from "react-icons/si";
import { Link } from "react-router-dom";
import Logo from "../components/UI/Logo";
import classes from "./Home.module.scss";
import routes from "./routes";
const Home = () => {
  return (
    <Fragment>
      <header>
        <nav className={classes.navbar}>
          <Logo link={routes.CONTENT} />

          <ul className={classes.horizontal}>
            <li>
              <Link to="features" className={classes.link}>
                Features
              </Link>
            </li>
            <li>
              <Link to="templates" className={classes.link}>
                Templates
              </Link>
            </li>
            <li>
              <Link to="forTeams" className={classes.link}>
                For Teams
              </Link>
            </li>
            <li>
              <Link to="resources" className={classes.link}>
                Resources
              </Link>
            </li>
            <li>
              <Link to="pricing" className={classes.link}>
                Pricing
              </Link>
            </li>
          </ul>
          <ul className={classes.horizontal}>
            <li>
              <Link to={routes.LOGIN} className={classes.link}>
                Log In
              </Link>
            </li>
            <li>
              <Link to={routes.REGISTER} className={classes.link}>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={classes.main}>
        <h1>Organize it all with Todoist</h1>
      </main>
    </Fragment>
  );
};
export default Home;
