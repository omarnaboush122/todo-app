import Container from "./components/Container";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [dark,setDark] = useState(true);

  function toggleMode() {
    setDark(prevDark => !prevDark);
  }

  const style = {
    backgroundColor: dark ? "hsl(235, 21%, 11%)" : "hsl(0, 0%, 98%)"
  }
  return (
    <div className="container" style={style}>
      <Container dark={dark} toggleMode={toggleMode}/>
    </div>
  );
}

export default App;
