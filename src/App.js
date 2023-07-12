import About from "./About";
import "./App.css";
import ComponentAlert from "./ComponentAlert";
import Navbar from "./Navbar";
import TextPlain from "./TextPlain";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Navbar title="MY React APP" mode={mode} toogleMode={toogleMode} />
        <ComponentAlert alert={alert} />
        <Routes>
          <Route
            exact
            path="/about"
            element={<About heading="About Us" mode={mode} />}
          />

          <Route
            exact
            path="/"
            element={
              <TextPlain
                mode={mode}
                showAlert={showAlert}
                heading="Text Converter"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
