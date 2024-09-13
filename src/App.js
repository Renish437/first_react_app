import "./Appa.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import logo from "./public/logo192.png";

function App() {
  const [mode, setMode] = useState("warning");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "warning") {
      setMode("dark");
      document.body.style.backgroundColor = "#8499da;";
      showAlert(" Dark mode has been enabled" + " ", "success");
      document.title = "TextUtils- DarkMode";
      // setInterval(() => {
      //   document.title = "Welcome to Textutils";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils app";
      // }, 1500);
    } else {
      setMode("warning");
      document.body.style.backgroundColor = "light";
      showAlert(" Light mode has been enabled" + " ", "success");
      document.title = "TextUtils- LightMode";
    }
  };
  return (
    <>
      {/* <Router>
        <Navbar
          title="TextUtils"
          home="Home"
          about="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <TextForm
                heading="Enter the text to analayze"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router> */}

      {/* <Router> */}
      <Navbar
        title="TextUtils"
        home="Home"
        about="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={ */}
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* }
            />
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
