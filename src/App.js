import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import topBlob from "./images/blob 5 (1).png";
import bottomBlob from "./images/blob 5.png";

// https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple

const App = () => {
  const [startQuiz,setStartQuiz] = useState(false);

  return (
    <div className="container">
      <Intro/>
        <div className="top">
        <img src={topBlob} alt="top-blob" />
      </div>
      <div className="bottom">
        <img src={bottomBlob} alt="bottom-blob" />
      </div>
    </div>
  );
}

export default App;
