import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal/modal-slice";
import AddTaskForm from "../todos/AddTaskForm";
import ModalPopup from "../UI/ModalPopup";
import classes from "./ModalsPupupContainer.module.scss";
const ModalsPupupContainer = () => {
  const modalStore = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const closeAddModalHandler = () => {
    dispatch(modalActions.showAddModal(false));
  };
  return (
    <div className={classes.modals}>
      {modalStore.statuses.addStatus && (
        <ModalPopup
          onCloseModal={closeAddModalHandler}
          className={classes.addTaskPopup}
          dark={true}
        >
          <AddTaskForm />
        </ModalPopup>
      )}
    </div>
  );
};
export default ModalsPupupContainer;
