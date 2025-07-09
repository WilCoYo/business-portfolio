import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import './Projects.css'

import AniRate from '../../assets/images/AniRate.png'
import HiFi from '../../assets/images/hi-fi-logo.png'
import ScholarBase from '../../assets/images/scholarBaseImg.png'
import Shoest from '../../assets/images/shoest.jpg'

function Projects() {
  return (
    <div className='projects-section'>
        <div className='project-1 project'>
            <a href='https://anime-rate.netlify.app/' target='_blank' rel="noreferrer">
                <img src={AniRate} alt="AniRate website logo" />
            </a>
            <div className="project-tech-stack">
                <a href='https://anime-rate.netlify.app/' target='_blank' rel='norefferer'>
                    <h3>Anime Watchlist and Rating Website</h3>
                </a>
                <p>Has full login and credential functionality, including custom watchlists and profiles.</p>
                <p>
                    <strong>Dependencies & Tech Stack:</strong><br></br>
                    <i>React, Firebase, Figma, Git & Github, Javascript, CSS, HTML</i>
                </p>
            </div>
        </div>
        <div className='project-2 project'>
            <a href='https://hi-fi-wineandspirits.netlify.app/' target='_blank' rel='norefferer'>
                <img src={HiFi} alt="Hi-Fi Wine and Spirits Logo" />
            </a>
            <div className="project-tech-stack">
                <a href='https://hi-fi-wineandspirits.netlify.app/' target='_blank' rel='norefferer'>
                    <h3>An artisan Wine & Spirits company.</h3>
                </a>
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
            <a href='https://scholarbase-production.up.railway.app/' target='_blank' rel='norefferer'>
                <img src={ScholarBase} alt='ScholarBase website logo' />
            </a>
            <div className="project-tech-stack">
                <a href='https://scholarbase-production.up.railway.app/' target='_blank' rel='norefferer'>
                    <h3>Scholarly article database for a more streamlined research experience.</h3>
                </a>
                <p>Full MERN stack search engine. Database is hosted through MongoDB and hosted through railway.app</p>
                <p>
                    <strong>Dependencies & Tech Stack:</strong><br></br>
                    <i>React, Javascript, CSS, HTML, Express.js, MongoDB, Railway, Git/Github</i>
                    
                </p>
            </div>
        </div>
        <div className='project-4 project'>
            <a href='https://shoest.netlify.app/' target='_blank' rel='norefferer'>
                <img src={Shoest} alt='Shoest landing page' />
            </a>
            <div className="project-tech-stack">
                <a href='https://shoest.netlify.app/' target='_blank' rel='norefferer'>
                    <h3>Shoest Shoe Store Landing Page</h3>
                </a>    
                <p>Langing page for a shoe store</p>
                <p>
                    <strong>Dependencies & Tech Stack:</strong><br></br>
                    <i>React, Javascript, CSS, HTML, Git/Github</i>
                    
                </p>
            </div>
        </div>
     

        <Navigation />
    </div>
  )
}

export default Projects