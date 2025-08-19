import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 let [counter,setCounter] = useState(0)

  //let counter = 5;
  const addValue = () => {
   // console.log("clicked",counter);
   // counter += 1;
    setCounter(counter + 1)
    if(counter == 20){
      alert("Counter reached 20")
      setCounter(20)
    }
  }

  const removeValue = () => {
    setCounter(counter - 1)
    if(counter == 0){
      alert("Counter reached 0")
      setCounter(0)
    }
  }
  return (
    <>
     
      <h1>Chai aur react</h1>
      <h2> count values: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick = {removeValue}
      > Remove Value</button>
    </>
  )
}

export default App
