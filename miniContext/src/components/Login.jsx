import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')

    const {setUser} = useContext(UserContext) //  setUser use heichi  const [user, setUser] = React.useState(null); use heichi useContextProvider re
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, pass})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='Enter Name' />
      <input type="text"
      value={pass}
      onChange={(e) => setPass(e.target.value)}
       placeholder='Enter Password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
