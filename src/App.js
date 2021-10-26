import React from "react";
import { Button } from "./Components/Button.style";

function App() {
  //2 variabel function
  //time track second of time 
  //setTime to set the time
  const [time, setTime] = React.useState(0) //0 default value
  const [timerOn, setTimeOn] = React.useState(false)

  //useEffect takes an arrayfunction 
  //it will run as soon as the component is rendered
  React.useEffect(() => {
    //the logig everytime the timer is on and when it is off
    let interval = null;

    //if we turn it on 
    if (timerOn){
      interval = setInterval(()=>{
        setTime(prevTime => prevTime + 10) 
      },10)
    //else when we turn it off
    }else{
      clearInterval(interval)
    }
    return ()  => clearInterval(interval)
  }, [timerOn]) // it will run every time the time changes

  
  return (
    <div className="App">
    <div>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
    {!timerOn && time === 0 && (
      <Button onClick={()=> setTimeOn(true)}>Start</Button>
    )}
    {timerOn &&(
       <button onClick={()=> setTimeOn(false)}>Stop</button>
    )}
    {!timerOn && time !== 0 &&(
      <button onClick={()=> setTimeOn(true)}>Resume</button>
    )}
    {!timerOn && time > 0 &&(
      <button onClick={()=> setTime(0)}>Reset</button>
    )}
    </div>
  );
}

export default App;
