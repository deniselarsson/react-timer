import React from "react";
import './App.css';

function App() {

  //variabel time som vi kan tracka tiden
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
      },10) //1000 är 1 sek, 100 är 0.1sek, 10 är 0.01 sek
    //else when we turn it off
    }else{
      clearInterval(interval)
    }
    return ()  => clearInterval(interval)
  }, [timerOn]) // it will run every time the time changes in an array

  //slice -2 gör att vi bara har 2 siffror 
  //rad 36, 1000millisekund är 1 sekund, 60 sek i 1min
  //rad 35, 60000millisekund är 1 min, 60 sek i 1min
  //math.floor avrunda till heltal

  
  return (
    <div className="App">
      <h1>Stop Watch</h1>
    <div>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span> 
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
      <button onClick={()=> setTimeOn(true)}>Start</button>
      <button onClick={()=> setTimeOn(false)}>Stop</button>
      <button onClick={()=> setTimeOn(true)}>Resume</button>
      <button onClick={()=> setTime(0)}>Reset</button>
    </div>
  );
}

export default App;
