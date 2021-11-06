import { FaPlus } from "react-icons/fa";

import { Fragment } from "react";
import { modalActions } from "../../store/modal/modal-slice";
import { useDispatch } from "react-redux";

const AddToDo = () => {
  const dispatch = useDispatch();
  const addTaskHandler = () => {
    dispatch(modalActions.showAddModal(true));
  };

  return (
    <Fragment>
      <div onClick={addTaskHandler}>
        <FaPlus />
      </div>
    </Fragment>
  );
};
export default AddToDo;
