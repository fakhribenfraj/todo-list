import classes from "./Dropdown.module.scss";
import React from "react";
import { useState } from "react";
import ModalPopup from "./ModalPopup";
import Card from "./Card";
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
    <ModalPopup onCloseModal={props.onCloseModal} className={classes.options}>
      <ul className={classes.options__list}>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ModalPopup>
  );
};
export default Dropdown;
