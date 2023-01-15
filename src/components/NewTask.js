import { useContext } from "react";
import { Context } from "../Context";


const NewTask = () => {
  const {mode,addTask,inputText,setInputText} = useContext(Context);
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
