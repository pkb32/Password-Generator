import './App.css'
import { useState } from 'react'

function App() {
  const [color, setColor]= useState('olive')
  
  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}} // eeithi color ta {} re lekha heini bcz seithi already dita bracket achi dekh
    >

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl'>
      <button
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor: 'red'}}
      onClick={()=>setColor('red')}
      > Red</button>

      <button
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor: 'green'}}
      onClick={()=>setColor('green')}
      > Green </button>

      <button
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor: 'Blue'}}
      onClick={()=>setColor('Blue')}
      > Blue</button>

    </div>
    </div>
    </div>
  )
}

export default App
