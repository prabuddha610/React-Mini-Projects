import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0);

  const increaseValue = ()=>{
    setCounter(counter+1);
  }

  const decreaseValue = () => {
    setCounter(counter-1);
  };

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={increaseValue}>Increase value</button>
    <br/>
    <button onClick={decreaseValue}>Decrease value</button>

    </>
  )
}

export default App
