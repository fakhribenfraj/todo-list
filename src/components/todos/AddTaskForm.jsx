import classes from "./AddTaskForm.module.scss";

import Dropdown from "../UI/Dropdown";
import Button from "../UI/Button";

import { BsFlagFill } from "react-icons/bs";
import { CgCalendar } from "react-icons/cg";

import { useDispatch } from "react-redux";

import { todoActions } from "../../store/todo/todo-slice";

const AddTaskForm = (props) => {
  const dispatch = useDispatch();
  let value = "";
  const addTaskHandler = () => {
    dispatch(
      todoActions.addTaskToList({
        id: Math.random() * 100000000000000000,
        value: value,
        category: "default",
        checked: false,
      })
    );
    props.onCloseModal();
  };
  return (
    <form className={classes.form}>
      <div>
        <input
          type="text"
          placeholder="add task"
          className={classes.input}
          autoFocus
          onChange={(event) => {
            value = event.target.value;
          }}
        />
      </div>

      <input type="date" name="schedule" id="" />
      <div className={classes.options}>
        <Dropdown items={["health", "house", "meeting"]}>
          <CgCalendar />
        </Dropdown>
        <Dropdown items={["Priority 1", "Priority 2", "Priority 3"]}>
          <BsFlagFill />
        </Dropdown>
      </div>
      <div className={classes.button__group}>
        <Button onClick={props.onCloseModal}>cancel</Button>
        <Button type="submit" bg="primary" onClick={addTaskHandler}>
          add task
        </Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
