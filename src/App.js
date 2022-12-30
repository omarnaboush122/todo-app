import { useEffect, useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Questions from "./components/Questions";
import { nanoid } from "nanoid";
import topBlob from "./images/blob 5 (1).png";
import bottomBlob from "./images/blob 5.png";

const App = () => {
  const [startQuiz, setStartQuiz] = useState(true);
  const [questionsArray, setQuestionsArray] = useState([]);
  const [isChecked,setIsChecked] = useState(false);
  const [isFeteched,setIsFetched] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => convertArrayToObj(data.results))
      .then((results) => setQuestionsArray(results));
  }

  function convertArrayToObj(array) {
    return array.map((item) => {
      return {
        ...item,
        allAnswers: [item.correct_answer, ...item.incorrect_answers],
        isHeld: false,
        id: nanoid(),
      };
    });
  }

  
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function getStarted() {
    setStartQuiz(true);
  }

  const allQuestions = questionsArray.map((question) => {
    return <Questions key={question.id} question={question} />;
  });
  return (
    <div className="container">
      {startQuiz ? (
        allQuestions
      ) : (
        <Intro getStarted={getStarted}/>
      )}
      <div className="top">
        <img src={topBlob} alt="top-blob" />
      </div>
      <div className="bottom">
        <img src={bottomBlob} alt="bottom-blob" />
      </div>
    </div>
  );
};

export default App;
