import Button from "../components/UI/Button";
import Logo from "../components/UI/Logo";
import Card from "../components/UI/Card";
import classes from "./Sign.module.scss";
const Sign = (props) => {
  return (
    <Card className={classes.card}>
      <Logo />
      <h1>{props.type}</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" />
        </div>

        <Button type="submit" className={classes.btn}>
          Log in
        </Button>
      </form>
    </Card>
  );
};
export default Sign;
