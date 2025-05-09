import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react'

import Home from './pages/home/Home'
import EmployerHome from './pages/employer/EmployerHome'
import Experience from './pages/experience/Experience'

import './App.css'

import RINGS from 'vanta/src/vanta.rings'



function App() {


  useEffect(() => {
    RINGS({
      el: "#background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })
  })

  return (
    <Router>
      <div id='background' ></div>
      

      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/employer' element={<EmployerHome />} />
         <Route path='/experience' element={<Experience />} />
      </Routes>

    </Router>
  )
}

export default App
