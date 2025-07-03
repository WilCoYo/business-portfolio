import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import './Projects.css'

import AniRate from '../../assets/images/AniRate.png'
import HiFi from '../../assets/images/hi-fi-logo.png'
import ScholarBase from '../../assets/images/scholarBaseImg.png'

function Projects() {
  return (
    <div className='projects-section'>
        <div className='project-1 project'>
            <img src={AniRate} alt="AniRate website logo" />
            <div className="project-tech-stack">
                <h3>Anime Watchlist and Rating Website</h3>
                <p>Has full login and credential functionality, including custom watchlists and profiles.</p>
                <p>
                    <strong>Dependencies & Tech Stack:</strong><br></br>
                    <i>React, Firebase, Figma, Git & Github, Javascript, CSS, HTML</i>
                </p>
            </div>
        </div>
        <div className='project-2 project'>
            <img src={HiFi} alt="Hi-Fi Wine and Spirits Logo" />
            <div className="project-tech-stack">
                <h3>An artisan Wine & Spirits company.</h3>
                <p>Made completely with vanilla HTML, CSS, and JavaScript. There are no frameworks or dependencies used.</p>
                <p>
                    <strong>Dependencies & Tech Stack:</strong><br></br>
                    <i>Figma, Git/Github, Javascript, CSS, HTML</i>
                </p>
            </div>
        </div>
        <div className='nav-space-blank'>
            {/* intentionally blank - this is a columng for navigation bar space */}
        </div>
        <div className='project-3 project'>
            <img src={ScholarBase} alt='ScholarBase website logo' />
            <div className="project-tech-stack">
                <h3>Scholarly article database for a more streamlined research experience.</h3>
                <p>Full MERN stack search engine. Database is hosted through MongoDB and hosted through railway.app</p>
                <p>
                    <strong>Dependencies & Tech Stack:</strong><br></br>
                    <i>React, Javascript, CSS, HTML, Express.js, MongoDB, Railway, Git/Github</i>
                    
                </p>
            </div>
        </div>
     

        <Navigation />
    </div>
  )
}

export default Projects