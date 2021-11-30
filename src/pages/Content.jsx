import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Content.module.scss";
import TasksList from "../components/todos/TaskList";
import { fetchTodoData, sendtodoData } from "../store/todo/todo-actions";
import ModalsPopupContainer from "../components/layout/ModalsPopupContainer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router";

let isInitial = true;
function Content() {
  const dispatch = useDispatch();
  const taskStore = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodoData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendtodoData(taskStore));
  }, [taskStore, dispatch]);

  const categoryList = taskStore.tasks
    .map((task) => task.category)
    .filter((category, index, array) => {
      return index === array.lastIndexOf(category);
    });
  const checkedTasks = taskStore.tasks.filter((task) => task.checked);
  const unCheckedTasks = taskStore.tasks.filter((task) => !task.checked);

  return (
    <Fragment>
      <ModalsPopupContainer />

      <Navbar />
      <Sidebar className={classes.main} />
      <main className={classes.content}>
        <TasksList tasksList={unCheckedTasks} />
        <TasksList category="checked" tasksList={checkedTasks} />
      </main>
    </Fragment>

    // checkedTasks=
  );
}

export default Content;
