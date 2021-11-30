import Button from "../components/UI/Button";
import Logo from "../components/UI/Logo";
import Card from "../components/UI/Card";
import classes from "./Sign.module.scss";
import { useContext, useRef, useState } from "react";
// import AuthContext from "../contexts/AuthContext";
import AuthContext from '../store/auth/auth-context';
import { useNavigate } from "react-router";

const Sign = (props) => {

  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  let navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // const switchAuthModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBU7kxzNKmzG-Y8A6gqK0MR8MkN4G5JfXI';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBU7kxzNKmzG-Y8A6gqK0MR8MkN4G5JfXI';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate('/Users/content/health');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Card className={classes.card}>
      <Logo />
      <h1>{props.type}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordInputRef}
          />
        </div>

        <Button type="submit" className={classes.btn}>
          {props.type === "login" ? "Log in" : "Register"}
        </Button>
      </form>
    </Card>
  );
};
export default Sign;
