import Container from "./components/Container";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [dark,setDark] = useState(true);

  function toggleMode() {
    setDark(prevDark => !prevDark);
  }
  return (
    <div className="container">
      <Container dark={dark} toggleMode={toggleMode}/>
    </div>
  );
}

export default App;
