import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { Home } from './Components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
