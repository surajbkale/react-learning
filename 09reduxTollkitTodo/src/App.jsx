import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {

  return (
    <>
      <h1>Learning About Redux and Redux-Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
