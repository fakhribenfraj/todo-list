import classes from "./OptionsPopup.module.scss";
import React, { Fragment } from "react";
import ModalPopup from "../UI/ModalPopup";

const OptionsPopup = (props) => {
  return (
    <ModalPopup onCloseModal={props.onCloseModal} className={classes.options}>
      <OptionsList props={props} />
    </ModalPopup>
  );
};

const OptionsList = ({ props }) => {
  const selectHandler = (event) => {
    props.onSelect({
      name: props.name,
      id:event.target.id
    });
    props.onCloseModal();
  };
  return (
    <Fragment>
      <h3 className={classes.options__title}>{props.name}</h3>
      <ul className={classes.options__list}>
        {props.items.map((item, index) => (
          <li key={index} id={index} onClick={selectHandler}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
export default OptionsPopup;
