import { Fragment } from "react";
import { useParams } from "react-router";
import Task from "./Task";
import classes from "./TaskList.module.scss";

const TasksList = (props) => {
  const params = useParams();
  const tasksList = props.tasksList
    ? props.tasksList.filter((task) => task.category === params.project)
    : [];
  tasksList.sort((task1, task2) => {
    return task1.priority - task2.priority;
  });
  return (
    <Fragment>
      {tasksList.length > 0 && (
        <section className={classes.list}>
          <h3 className={classes.list__heading}>
            {tasksList[0].checked ? "done" : params.project}
          </h3>
          <ul className={classes.list__content}>
            {tasksList.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </ul>
        </section>
      )}
    </Fragment>
  );
};
export default TasksList;
