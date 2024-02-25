import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Signup from './Components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
