import { useState } from "react";
import classes from "./ModalPopUp.module.scss";
const ModalPopUp = (props) => {
  const [status, setStatus] = useState(false);
  const closeModalHandler = () => {
    setStatus(false);
  };
  return (
    status && <div>
      <div className={classes.backdrop} onClick={closeModalHandler} />
      <Card className={classes.modal}>{props.children}</Card>
    </div>
  );
};
export default ModalPopUp;
