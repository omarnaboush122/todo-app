import { useEffect, useState } from "react";
import NewTask from "./components/NewTask";
import TasksContainer from "./components/TasksContainer";
import "./App.css";
import { nanoid } from "nanoid";

const App = () => {
  const [tasksArray, setTasksArray] = useState([
    {
      text: "task",
      id: nanoid(),
      completed: false,
    },
  ]);
  const [mode, setMode] = useState("dark");
  const [inputText, setInputText] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [taskStatus, setTaskStatus] = useState("")
  const [selectedBtn, setSelectedBtn] = useState("")

  
  useEffect(() => {
    const filterHandler = () => {
      switch (taskStatus) {
        case 'completed':
          setFilteredTasks(tasksArray.filter(task => task.completed === true))
          setSelectedBtn(3)
          break;
        case 'active':
          setFilteredTasks(tasksArray.filter(task => task.completed === false))
          setSelectedBtn(2)
          break;
        default:
          setFilteredTasks(tasksArray)
          setSelectedBtn(1)
          break;
      }
    }

    filterHandler();
  }, [tasksArray, taskStatus])

  function toggleCompleted(id) {
    setTasksArray((prevTasksArray) => {
      return prevTasksArray.map((task) => {
        return task.id === id
          ? { ...task, completed: !task.completed } 
          : task
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
    setTasksArray(tasksArray.filter(task => task.completed !== true))
  }

  return (
    <div className={`container ${mode}`}>
      <div className={`header ${mode}`}>
        <div className="top">
          <h1>Todo</h1>
          <img
            src={`./images/icon-${mode ? "sun" : "moon"}.svg`}
            alt="sun"
            onClick={toggleMode}
          />
        </div>
        <NewTask
          mode={mode}
          addTask={addTask}
          inputText={inputText}
          setInputText={setInputText}
        />
        <TasksContainer
          mode={mode}
          tasksArray={tasksArray}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
          filteredTasks={filteredTasks}
          selectedBtn={selectedBtn}
          setTaskStatus={setTaskStatus}
          deleteCompletedTasks={deleteCompletedTasks}
        />
      </div>
    </div>
  );
};

export default App;
