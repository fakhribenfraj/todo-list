import React from "react";
import Card from "./Card";
import classes from "./ModalPopup.module.scss";

const ModalPopup = (props) => {

  return (
        <div>
          <div
            className={
              props.dark
                ? `${classes.backdrop} ${classes.backdropDark}`
                : classes.backdrop
            }
            onClick={props.onCloseModal}
          />
          <Card className={`${classes.modal} ${props.className}`}>
            {React.cloneElement(props.children, {
              onCloseModal: props.onCloseModal,
            })}
            {/* {props.children} */}
          </Card>
        </div>
  );
};
export default ModalPopup;
