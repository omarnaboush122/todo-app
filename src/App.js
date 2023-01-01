import Header from "./components/Header";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [dark,setDark] = useState(true);

  function toggleMode() {
    setDark(prevDark => !prevDark);
  }
  return (
    <div className="container">
      <Header dark={dark} toggleMode={toggleMode}/>
    </div>
  );
}

export default App;
