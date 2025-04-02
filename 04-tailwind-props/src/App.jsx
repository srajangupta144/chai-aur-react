import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className="bg-green-400 text-black text-4xl p-4  rounded-xl font-bold underline" >
      Hello world!
    </h1>
    <Card  username='HEY?' price="$5200"/>
    <Card  username='GOOD' price="$85"/>
    <Card  username='We go'/>
        
    </>
  )
}

export default App
