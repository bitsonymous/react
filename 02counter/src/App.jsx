import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(143)

  // counter = 5
  const addValue = () =>{
    counter++;
    console.log("Value added", counter)
    setCounter(counter)
  }
  const removeValue = () =>{
    counter--;
    console.log("Value removed", counter)
    setCounter(counter)
  }
  return (
    <>
     <h1>Number Daalo</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick = {addValue}>Add Value</button>
     <button onClick = {removeValue}>Remove Value</button>
    </>
  )
}

export default App
