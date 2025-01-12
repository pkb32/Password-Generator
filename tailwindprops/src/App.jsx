import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Prayash",
    age: 20
  }
  let newArr = [1,2,3]

  return (
    <>
      
     <h1 className='bg-red-500 text-blue-600 p-5 rounded-xl'> Hi this is Prayash</h1>
 
     <Card username = "Rahul and React" someObj={myObj} wen={newArr} />
     <Card username = "Prayash and React"/>
        
    </>
  )
}

export default App
