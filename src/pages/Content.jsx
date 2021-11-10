import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from"./Content.module.scss";
import ModalsPupupContainer from "../components/layout/ModalsPupupContainer";
import Navbar from "../components/layout/Navbar";
import TasksList from "../components/todos/TaskList";
import { fetchTodoData, sendtodoData } from "../store/todo/todo-actions";

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

  return (
    <Fragment>
      <ModalsPupupContainer />
      <Navbar />
      <main>
        <section className={classes.lists}>
          {categoryList.map((category, index) => (
            <TasksList
              key={index}
              category={category}
              tasksList={taskStore.tasks}
            />
          ))}
          {checkedTasks.length > 0 && (
            <TasksList category="checked" checkedTasks={checkedTasks} />
          )}
        </section>
      </main>
    </Fragment>
  );
}

export default Content;
