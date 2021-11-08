import classes from "./AddTaskForm.module.scss";

import Dropdown from "../UI/Dropdown";
import Button from "../UI/Button";

import { BsFlagFill } from "react-icons/bs";
import { CgCalendar } from "react-icons/cg";

import { useDispatch } from "react-redux";

import { todoActions } from "../../store/todo/todo-slice";
import ModalPopup from "../UI/ModalPopup";
import { useState } from "react";

const AddTaskForm = (props) => {
  const dispatch = useDispatch();
  const [optionsPopupStatus, setOptionsPopupStatus] = useState(false);
  const [options, setOptions] = useState([]);

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
  const toggleOptionsModalHandler = () => {
    setOptionsPopupStatus((state) => !state);
  };
  const categoryClickHandler = () => {
    setOptions(["health", "house", "meeting"]);
    toggleOptionsModalHandler();
  };
  const priorityClickHandler = () => {
    setOptions(["priority 1", "priority 2", "priority 3"]);
    toggleOptionsModalHandler();
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
        {optionsPopupStatus && (
          <Dropdown items={options} onCloseModal={toggleOptionsModalHandler} />
        )}
        <CgCalendar onClick={categoryClickHandler} />
        <BsFlagFill onClick={priorityClickHandler} />
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
