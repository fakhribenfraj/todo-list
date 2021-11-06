import AddToDoModal from "./AddToDoModal";
import { FaPlus } from "react-icons/fa";

import { useState, Fragment } from "react";

const AddToDo = () => {
  const [addStatus, setAddStatus] = useState(false);
  const addTaskHandler = () => {
    setAddStatus((state) => !state);
  };
  const closeModalHandler = () => {
    setAddStatus(false);
  };

  return (
    <Fragment>
      <div  onClick={addTaskHandler}>
        <FaPlus />
      </div>
      {addStatus && <AddToDoModal onCloseModal={closeModalHandler} />}
    </Fragment>
  );
};
export default AddToDo;
