import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  const [mode, setMode] = useState("dark");
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      {/* video no 15 done*/}

      <BrowserRouter>
        <NavBar title="Title Text" mode={mode} togglemode={togglemode} />
        {/* <Alert alert="This is test" /> */}
        <Routes>
          <Route exact path="/" element={<TextForm />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      {/* <About/> */}
    </>
  );
}

export default App;
