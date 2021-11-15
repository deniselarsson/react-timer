import './App.css';
import React from "react";
import Header from "./component/Header";
import Timer from "./component/Timer";
import InputField from './component/UserInputField';

function App() {

  return (
    <div className="App">
      <Header/>
      <Timer/>
      <InputField/>
    </div>
  );
}
export default App;

