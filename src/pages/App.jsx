import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import ModalsPupupContainer from "../components/layout/ModalsPupupContainer";
import Navbar from "../components/layout/Navbar";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <ModalsPupupContainer />
      <Navbar />
      <Outlet></Outlet>
    </Fragment>
  );
}

export default App;
