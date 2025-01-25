import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Page/Home'
import Header from './component/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './Page/Contact'
import SIgnup from './Page/SIgnup'
import Login from './Page/Login'
import Logout from './Page/Logout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='bg-black h-screen text-orange-600 text-3xl'>
       <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<SIgnup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout />} />
       </Routes>
       </BrowserRouter>
      </div>
       
    </>
  )
}

export default App
