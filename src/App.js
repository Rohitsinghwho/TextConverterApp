import "./App.css";
import ComponentAlert from "./ComponentAlert";
import Navbar from "./Navbar";

import TextPlain from "./TextPlain";
import { useState } from "react";

function App() {
  const [mode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("DarkMode has been enabled", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="MY React APP" mode={mode} toogleMode={toogleMode} />
      <ComponentAlert alert={alert} />

      <h1
        className={`text-center my-5 ${
          mode === "light" ? "text-black" : "text-white"
        }`}
      >
        Text Converter
      </h1>
      <TextPlain mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
