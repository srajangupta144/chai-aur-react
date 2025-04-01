import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)

  const addValue=()=>{
    console.log("clicked", counter);
    setCount(counter+1)
  }
  const removeValue=()=>{
    if(counter>0){
    console.log("clicked", counter);
    setCount(counter-1)
  }else{
    alert("Negative number not allowed!")
  }}

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
    </>
      
     
  )
}

export default App
