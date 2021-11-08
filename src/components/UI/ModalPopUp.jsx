import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal/modal-slice";
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
          </Card>
        </div>
  );
};
export default ModalPopup;
