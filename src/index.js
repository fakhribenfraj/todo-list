import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign from "./pages/Sign";
import Content from "./pages/Content";
import Home from "./pages/Home";
import Logo from "./components/UI/Logo";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Users">
            <Route path="showRegister" element={<Sign type="register" />} />
            <Route path="showLogin" element={<Sign type="login" />} />
            <Route path="app" element={<App />}>
              <Route path="content" element={<Content />} />
            </Route>
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
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
