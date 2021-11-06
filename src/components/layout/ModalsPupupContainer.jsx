import AddTaskForm from "../todos/AddTaskForm";
import ModalPopUp from "../UI/ModalPopup";
import classes from './ModalsPupupContainer.module.scss'
const ModalsPupupContainer = () => {
  return (
    <div className={classes.modals}>
      <ModalPopUp>
        <AddTaskForm onCloseModal />
      </ModalPopUp>
    </div>
  );
};
export default ModalsPupupContainer;
