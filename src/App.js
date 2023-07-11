import "./App.css";
import Navbar from "./Navbar";
import TextPlain from "./TextPlain";
import { useState } from "react";

function App() {
  const [mode, setDarkMode] = useState("light");

  const toogleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="MY React APP" mode={mode} toogleMode={toogleMode} />
      <h1
        className={`text-center my-5 ${
          mode === "light" ? "text-black" : "text-white"
        }`}
      >
        Text Converter
      </h1>
      <TextPlain mode={mode} />
    </>
  );
}

export default App;
