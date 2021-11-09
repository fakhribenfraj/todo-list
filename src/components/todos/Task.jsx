import classes from "./Task.module.scss";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo/todo-slice";
const Task = (props) => {
  const dispatch = useDispatch();
  const handleCheck = (event) => {
    dispatch(
      todoActions.checkTask({
        id: props.task.id,
        checked: event.target.checked,
      })
    );
  };

  const handleDeleteTask = (event) => {
    dispatch(
      todoActions.deleteTaskFromList({
        id: props.task.id,
      })
    );
  };
  return (
    <li className={classes.task}>
      <label
        className={
          props.task.checked ? classes.task__bodyChecked : classes.task__body
        }
      >
        <div className={classes.checkIcon}>
          <input
            id={props.task.id}
            type="checkbox"
            name={props.task.category}
            defaultChecked={props.task.checked}
            onChange={handleCheck}
          />
          <span></span>
        </div>
        <p>{props.task.value}</p>
      </label>
      <div className={classes.buttonDelete} onClick={handleDeleteTask}>
        <MdDelete />
      </div>
    </li>
  );
};
export default Task;
