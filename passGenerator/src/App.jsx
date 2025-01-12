import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pass, setPass]= useState("")

  //useCallback(fn,dependencies), abika fn ta directly lekh seithi
  const passGenerator = useCallback(()=>{
    let pasw= ""
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*"
    for(let i=1; i<=length; i++){
    
      let random = Math.floor(Math.random()*str.length+1)
      pasw += str.charAt(random)

    }

    setPass(pasw)

 
  }, [length, numAllowed, charAllowed, setPass])

 useEffect(()=>{
  passGenerator()
 },[length, numAllowed, charAllowed, passGenerator])

const passRef = useRef(null)

const copyPassToClipboard =useCallback( () => {
  passRef.current?.select() //sei jou copy karile text ta highlight houchi seita eei code pai
  //passRef.current?.setSelectionRange(0, 10) eeita use karile range wise pass select haba
  window.navigator.clipboard.writeText(passRef.current.value)
}, [pass])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center text-2xl px-3 py-3 my-3'>Password Generator</h1>
      <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
      <input
      type="text" 
      value={pass} 
      className='outline-none w-full  py-2 px-3' 
      readOnly 
      placeholder="Password" 
      ref={passRef}
      />
      <button 
      onClick={copyPassToClipboard}
      className='outline-none bg-blue-700 text-white
      px-3 py-0.5 shrink-0 '
      
      >
        Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>

          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
          />
          <label> Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numAllowed}
          id='numberInput'
          onChange = {()=> {
            setNumAllowed((prev) => !prev)
          }}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange = {()=> {
            setCharAllowed((prev) => !prev)
          }}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
