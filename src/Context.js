import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [tasksArray, setTasksArray] = useState([]);
  const [mode, setMode] = useState("dark");
  const [inputText, setInputText] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [taskStatus, setTaskStatus] = useState("");
  const [selectedBtn, setSelectedBtn] = useState("");

  function toggleCompleted(id) {
    setTasksArray((prevTasksArray) => {
      return prevTasksArray.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      });
    });
  }

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }

  function addTask(taskText) {
    const newTask = {
      text: taskText,
      id: nanoid(),
      completed: false,
    };
    if (taskText !== "") {
      setTasksArray((prevTasksArray) => [newTask, ...prevTasksArray]);
      setInputText("");
    } else {
      alert("please type something in the form");
    }
  }

  function deleteTask(id) {
    setTasksArray((prevTasksArray) =>
      prevTasksArray.filter((task) => task.id !== id)
    );
  }

  function deleteCompletedTasks() {
    if (tasksArray.length) {
      setTasksArray(tasksArray.filter((task) => task.completed !== true));
    }
  }

  const numberOfIncompleteTasks = () => {
    return tasksArray.filter((task) => !task.completed).length;
  };

  useEffect(() => {
    setTasksArray(JSON.parse(localStorage.getItem("tasksArray")));
    setMode(JSON.parse(localStorage.getItem("mode")));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [tasksArray, mode]);

  useEffect(() => {
    const filterHandler = () => {
      switch (taskStatus) {
        case "completed":
          setFilteredTasks(
            tasksArray.filter((task) => task.completed === true)
          );
          setSelectedBtn(3);
          break;
        case "active":
          setFilteredTasks(
            tasksArray.filter((task) => task.completed === false)
          );
          setSelectedBtn(2);
          break;
        default:
          setFilteredTasks(tasksArray);
          setSelectedBtn(1);
          break;
      }
    };

    filterHandler();
  }, [tasksArray, taskStatus]);

  return (
    <Context.Provider
      value={{
        tasksArray,
        filteredTasks,
        mode,
        inputText,
        selectedBtn,
        toggleCompleted,
        deleteTask,
        setTaskStatus,
        deleteCompletedTasks,
        numberOfIncompleteTasks,
        toggleMode,
        addTask,
        setInputText,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
