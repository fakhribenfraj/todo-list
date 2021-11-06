import classes from "./Dropdown.module.scss";
import React from "react";
import { useState } from "react";
import ModalPopup from "./ModalPopup";
const Dropdown = (props) => {
  const [status, setStatus] = useState(false);
  const statusHandler = () => {
    console.log(status);
    setStatus((state) => !state);
  };
  const resetStatus = () => {
    console.log(status);
    setStatus(false);
  };
  return (
    <div className={classes.dropdown}>
      <span onClick={statusHandler}>{props.children}</span>
      {status && (
        <React.Fragment>
          <div className={classes.clickOut} onClick={resetStatus}></div>
          <ul className={classes.dropdown__list}>
              {props.items.map((item,index)=><li key={index}>{item}</li>)}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};
export default Dropdown;
