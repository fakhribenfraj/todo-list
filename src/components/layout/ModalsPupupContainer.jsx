import AddTaskForm from "../todos/AddTaskForm";
import ModalPopup from "../UI/ModalPopup";
import classes from './ModalsPupupContainer.module.scss'
const ModalsPupupContainer = () => {
  return (
    <div className={classes.modals}>
      <ModalPopup>
        <AddTaskForm onCloseModal />
      </ModalPopup>
    </div>
  );
};
export default ModalsPupupContainer;
