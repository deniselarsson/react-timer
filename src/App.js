import React from "react";

function App() {

  const [time, setTime] = React.useState(0) //0 default value
  const [timerOn, setTimeOn] = React.useState(false)

  //useEffect takes an arrayfunction 
  //it will run as soon as the component is rendered
  React.useEffect(() => {

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
      <button onClick={()=> setTimeOn(true)}>Start</button>
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
