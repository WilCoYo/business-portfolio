import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Navigation.css'
import MENUICON from '../../assets/images/menuIcon.png'
import CLOSEICON from '../../assets/images/closeIcon.png'



function Navigation() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <div className='nav-bar desktop'>
      <ul className='navigation'>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/employer')}>About me</li>
        <li onClick={() => navigate('/experience')}>Experience</li>
        <li onClick={() => navigate('/projects')}>Projects</li>
      </ul>
    </div>

     <img 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          src={MENUICON} 
          alt='Menu icon' 
          className='mobile-menu-icon'
      />

    {mobileMenuOpen && (
      <div className='nav-bar mobile'>
        <img  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              src={CLOSEICON} 
              alt='Close icon' 
              className='close-icon'
        />

        <ul  className='navigation'>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/employer')}>About me</li>
          <li onClick={() => navigate('/experience')}>Experience</li>
          <li onClick={() => navigate('/projects')}>Projects</li>
        </ul>  
    </div>

    )}

    </>
  )
}

export default Navigation