import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const subValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Suraj Kale</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br /> <br />
      <button onClick={subValue}>Decrese Value</button>
    </>
  );
}

export default App;
