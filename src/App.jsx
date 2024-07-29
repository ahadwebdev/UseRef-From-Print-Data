import React from "react";
import "./App.css";
import Output from "../src/Components/Output";
import Data from "./Components/data";
import { useState } from "react";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  return (
    <div className="App">
      <div className="container">
        <div className="flex items-center h-screen justify-around mx-10">
          <Data
            setValue1={setValue1}
            setValue2={setValue2}
            setValue3={setValue3}
            setValue4={setValue4}
          />
          <Output
            value1={value1}
            value2={value2}
            value3={value3}
            value4={value4}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
