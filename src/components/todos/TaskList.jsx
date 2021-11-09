import { Fragment } from "react";
import Task from "./Task";
import classes from "./TaskList.module.scss";

const TasksList = (props) => {
  //   const remainigTasks = tasksList.filter(
  //     (task) => task.category === props.category && !task.checked
  //   );
  const tasksList =
    props.category === "checked"
      ? props.checkedTasks
      : props.tasksList.filter(
          (task) => task.category === props.category && !task.checked
        );
  tasksList.sort((task1, task2)=> {
    return task1.priority - task2.priority;
  });
  return (
    <Fragment>
      {tasksList.length > 0 && (
        <div className={classes.list}>
          <h3 className={classes.list__heading}>{props.category}</h3>
          <ul className={classes.list__content}>
            {tasksList.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};
export default TasksList;
