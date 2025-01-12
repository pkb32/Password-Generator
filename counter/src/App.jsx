import { useState } from 'react'
import './App.css'

function App() {
 let [counter, setCounter] = useState(32) //default value kichi bhi deiparibu 
   //let counter = 32
  const addValue = () => {
    console.log(counter)
    if(counter < 20) counter +=1
    //setCounter(counter+1)
    setCounter(counter)
    //imp read below
    /*setCounter((prevCounter)=> prevCounter+1)*/ // eemiti lekhile kn na counter 2 thara badhiba and han setCounter ta gote function jouta ki call back function and seithi prev counter ra data store thae, ta ame jadi call by reference deiki counter au thare badheidaba thele add marile counter 2 thara add heijiba. but same jadi tu setCounter(counter +1) 10 thara bhi lekhibu tahele bhi seita thare hi badhiba 
  }

  const subtractValue =() =>{
    if(counter>0) counter -= 1
     setCounter(counter)

  }
  return (
    <>
      <h1>
        Hi bhai
      </h1>
      <h2> Counter Value: {counter} </h2>
      <button onClick={addValue}> Add </button>
      <button onClick={subtractValue}> Subtract </button>
    </>
  )
}

export default App
