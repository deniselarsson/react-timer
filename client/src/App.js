import './App.css';
import React from "react";
import Header from "./component/Header";
import Timer from "./component/Timer";
import InputField from './component/UserInputField';
import UserForm from './component/UserForm';
import UserInputField from './component/UserInputField';

function App() {

  return (
    <div className="App">
      <Header/>
      <Timer/>
      <UserInputField/>
    </div>
  );
}
export default App;

