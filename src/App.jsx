import { useState } from 'react'

import './App.css'
import Navbar from './componets/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Footer from './componets/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <ToastContainer />
<Footer></Footer>
    </>
  )
}

export default App
