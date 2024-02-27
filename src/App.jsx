import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Login from './Components/Login'
import ForgotPwd from './Components/ForgotPwd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/forgot-pwd' element={<ForgotPwd/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
