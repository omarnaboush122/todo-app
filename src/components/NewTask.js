import { useState } from "react";

const NewTask = ({ mode,addTask }) => {
  const [inputText, setInputText] = useState("");

  return (
    <div className={`new-task ${mode}`}>
      <div className="circle" onClick={() => addTask(inputText)}></div>
      <input
        className={`input ${mode}`}
        type="text"
        placeholder="Create a new todo..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
};

export default NewTask;
