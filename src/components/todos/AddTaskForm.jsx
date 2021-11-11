import classes from "./AddTaskForm.module.scss";

import OptionsPopup from "./OptionsPopup";
import Button from "../UI/Button";

import { BsFlagFill } from "react-icons/bs";
import { CgCalendar } from "react-icons/cg";

import { useDispatch } from "react-redux";

import { todoActions } from "../../store/todo/todo-slice";
import { useState } from "react";
import uuid from "react-uuid";
import { useNavigate } from "react-router";

const OPTIONS = [
  {
    name: "category",
    items: ["health", "house", "meeting"],
  },
  {
    name: "priority",
    items: ["priority 1", "priority 2", "priority 3"],
  },
];
const AddTaskForm = (props) => {
  const dispatch = useDispatch();
  const [optionsPopupStatus, setOptionsPopupStatus] = useState(false);
  const [options, setOptions] = useState({});
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState(1);
  const [value, setValue] = useState("");
  const addTaskHandler = (event) => {
    event.preventDefault()
    dispatch(
      todoActions.addTaskToList({
        id: uuid(),
        checked: false,
        value,
        category,
        priority,
      })
    );
    props.onCloseModal();
  };
  const toggleOptionsModalHandler = () => {
    setOptionsPopupStatus((state) => !state);
  };

  const optionClickHandler = (options) => {
    setOptions(options);
    toggleOptionsModalHandler();
  };
  const selectOptionHandler = ({ name, id }) => {
    switch (name) {
      case OPTIONS[0].name:
        setCategory(options.items[id]);
        break;
      case OPTIONS[1].name:
        setPriority(++id);
        break;
      default:
        break;
    }
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
            setValue(event.target.value);
          }}
        />
      </div>

      <input type="date" name="schedule" id="" />
      <div className={classes.options}>
        {optionsPopupStatus && (
          <OptionsPopup
            items={options.items}
            name={options.name}
            onCloseModal={toggleOptionsModalHandler}
            onSelect={selectOptionHandler}
          />
        )}
        <CgCalendar
          className={classes.options__btn}
          onClick={() =>
            optionClickHandler({
              name: OPTIONS[0].name,
              items: OPTIONS[0].items,
            })
          }
        />
        <BsFlagFill
          className={classes.options__btn}
          onClick={() =>
            optionClickHandler({
              name: OPTIONS[1].name,
              items: OPTIONS[1].items,
            })
          }
        />
      </div>
      <div className={classes.button__group}>
        <Button onClick={props.onCloseModal}>cancel</Button>
        <Button type="submit" className={classes.btn} onSubmit={addTaskHandler}>
          add task
        </Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
