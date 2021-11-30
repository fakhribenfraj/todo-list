import { Fragment, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "../store/auth/auth-context";
import { Provider } from "react-redux";
import Sign from "./Sign";
import Content from "./Content";
import Logo from "../components/UI/Logo";
import store from "../store";
import Home from "./Home";
import AuthContext from "../store/auth/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Users">
        <Route path="showRegister" element={<Sign type="register" />} />
        {!authCtx.isLoggedIn && (
          <Route path="showLogin" element={<Sign type="login" />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="content/:project" element={<Content />} />
        )}
      </Route>

      <Route
        path="*"
        element={
          <Fragment>
            <Logo />
            <h3>Sorry, the page you're looking for isn’t here anymore</h3>
          </Fragment>
        }
      />
    </Routes>
  );
}

export default App;
