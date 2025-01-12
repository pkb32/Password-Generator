import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import Button from './Components/Button'
import Card from './Components/Card'


function App() {
const [themeMode, setThemeMode] = useState('light')

//ThemeProvider re jou value re lightTheme darkTheme function achi seita theme.js re thodi define heichi ta seita eeithi define karibaku hele directly function ra name lekhiki neigale haba
const lightTheme = () => {
  setThemeMode('light')
}
const darkTheme = () => {
  setThemeMode('dark')
}
//actual chnage in theme

useEffect(() => {
  document.querySelector('html').classList.remove('light', 'dark')
  document.querySelector('html').classList.add(themeMode)
 
}, [themeMode])

  return (
    <ThemeProvider
      value={{themeMode, lightTheme, darkTheme}}
    >
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Button/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
      </div>

    </ThemeProvider>
  )
}

export default App
