import { useState,useEffect,useContext} from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/home'
import Nav from './components/Nav'
import Destination from './components/destination'
import Crew from './components/crew'
import Technology from './components/technology'
import Menubar from './components/menubar'
import './App.css'



function App() {
  const[menuDown,setMenuDown] = useState(false)

  return (  
    <div className="w-full h-[100vh] max-h-[950px] flex justify-center
    lg2:max-h-[900px]" >
      <div className='w-full h-full max-w-[1500px]'>
        <Nav setMenuDown = {setMenuDown} menuDown ={menuDown}/>
        <Menubar menuDown = {menuDown} setMenuDown = {setMenuDown}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/crew' element={<Crew/>}/>
          <Route path='/technology' element={<Technology/>}/>
        </Routes>
      </div>
    </div>
  
  )
}

export default App
