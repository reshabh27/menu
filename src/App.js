import React from "react";
import "./App.css";
import { Title } from "./components/Title";
import { Menu } from "./components/Menu";
import { Category } from "./components/Category";
import { useGlobalContext } from "./context";

function App() {
  const {darkMode} = useGlobalContext();
  return (
    <div id={darkMode ? "DM" : "LM"}>
      <div className="App">
        <Title />
        <Category />
        <Menu />
      </div>
    </div>
  );
}

export default App;
