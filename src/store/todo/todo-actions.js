import { uiActions } from "../UI/ui-slice";
import { todoActions } from "./todo-slice";

const databaseUrl =
  "https://todoist-6fef2-default-rtdb.europe-west1.firebasedatabase.app/data.json";

export const fetchTodoData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(databaseUrl);

      if (!response.ok) {
        throw new Error("Could not fetch todo data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const todoData = await fetchData();
      dispatch(
        todoActions.replaceTodo({
          tasks: todoData.tasks || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching todo data failed!",
        })
      );
    }
  };
};

export const sendtodoData = (todo) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending todo data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(databaseUrl, {
        method: "PUT",
        body: JSON.stringify({
          tasks: todo.tasks,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending todo data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent todo data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending todo data failed!",
        })
      );
    }
  };
};
