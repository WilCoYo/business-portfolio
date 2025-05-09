import React from 'react'
import './Experience.css'

import Navigation from '../../components/navigation/Navigation'

function Experience() {
  return (
    <div className='experience'>
        <ul className='codeNinjas cell'>
            <h2>Code Ninjas</h2>
            <h4>Code Instructor</h4>
            <li>Guided learners to aid understanding and knowledge of technology and coding concepts</li>
            <li>Taught JavaScript, Python, and C+ fundamentals using Impact, Microsoft MakeCode, and Unity</li>
            <li>Customized and supplement curricular materials to ensure knowledge transfer and growth</li>
            <li>Leveraged educator background to inspire learners’ confidence in technology, math, and science</li>
        </ul>

        <ul className='apple cell'>
            <h2>Apple</h2>
            <h4>Technical Expert</h4>
            <li>Interpreted customer concerns and delivered appropriate product diagnoses and solutions</li>
            <li>Flexibly rotated through multiple technical specialties and skill sets with ease and confidence</li>
            <li>Translated technical knowledge via Apple iOS hardware and software technician certification</li>
            <li>Troubleshot device issues with customers and communicated appropriate solutions</li>
        </ul>

        <ul className='pics cell'>
            <h2>PICS ITECH</h2>
            <h4>Client Account Manager</h4>
            <li>Managed CRM account data and quickly resolved service tickets queue for 60+ clients</li>
            <li>Collaborated with clients to understand their business objectives and technical requirements</li>
            <li>Liaised between clients and technical teams, facilitating communication and understanding</li>
            <li>Collaborated with internal and external partners to drive projects from onboarding through closure</li>
        </ul>


        <Navigation />
    </div>
    
  )
}

export default Experience