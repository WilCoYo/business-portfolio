import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
const navigate = useNavigate();

  return (
    <div className='hero'>
        <div className='name'>
            <p>W.</p>
            <h2>Cody Yonkin</h2>
        </div>
        <div className='hero-title'>
            <h3>Freelance<br></br>Website<br></br>UX | UI</h3>
            <h1>Developer</h1>
        </div>
        <div className='hero-text'>
            <h2>Bring your digital ideas to life </h2>
                <ul>
                    <li>Simple</li>
                    <li>Cost-effective</li>
                    <li>Hassle Free</li>
                </ul>
        </div>
        <div className='hero-btns'>
            <button 
                className='hero-btn'
                onClick={() => navigate('/employer')}
            >
                For Employers
            </button>
            <button className='hero-btn'>
                For Clients
            </button>
        </div>
    </div>
  )
}

export default Home