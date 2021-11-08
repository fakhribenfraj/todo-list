import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal/modal-slice";
import Card from "./Card";
import classes from "./ModalPopup.module.scss";

const ModalPopup = (props) => {
  const modalStore = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(modalActions.showAddModal(false));
  };
  console.log(modalStore.statuses.addStatus);
  return (
    <Fragment>
      {modalStore.statuses.addStatus && (
        <div>
          <div className={classes.backdrop} onClick={closeModalHandler} />
          <Card className={classes.modal}>
            {React.cloneElement(props.children, {
              onCloseModal: closeModalHandler,
            })}
          </Card>
        </div>
      )}
    </Fragment>
  );
};
export default ModalPopup;
