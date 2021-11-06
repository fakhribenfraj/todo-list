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
  return (
    <li key={props.task.id} className={classes.task}>
      <label className={classes.task__body}>
        <div className={classes.checkIcon}>
          <input
            id={props.task.id}
            type="checkbox"
            name="default"
            defaultChecked={props.task.checked}
            onChange={handleCheck}
          />
          <span></span>
        </div>
        <p>{props.task.value}</p>
      </label>
      <MdDelete className={classes.buttonDelete} />
    </li>
  );
};
export default Task;
