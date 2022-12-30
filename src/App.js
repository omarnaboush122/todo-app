import { useEffect, useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import topBlob from "./images/blob 5 (1).png";
import bottomBlob from "./images/blob 5.png";



const App = () => {
  const [startQuiz,setStartQuiz] = useState(false);
  const [questionsArray,setQuestionsArray] = useState([]);

  useEffect(()=> {
    fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(data => convertArrayToObj(data.results))
    .then(results => setQuestionsArray(results));
  },[])

  function convertArrayToObj(array) {
    return array.map(item => {
      return {
        ...item,
        allAnswers: [item.correct_answer,...item.incorrect_answers],
        isHeld: false
      }
    })
  }

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
