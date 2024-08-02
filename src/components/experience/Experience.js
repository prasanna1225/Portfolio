import React from 'react'
import Company from '../../assets/company.jpg'
import './experience.css';
const Experience = () => {
  return (
    <div className='experience' id='experience'>
       <div className='experience-left-content'>
       <h1>Experience</h1>
       <img src={Company} alt='logo'/>
    
       </div>
       <div className='experience-right-content'>
        <h1>Web Developer Intern @Edfling</h1>
        <p>Jul 2023 - Sep 2023</p>
          <ul className='intern-description'>
            <li>Developed reusable Figma components using React and React Bootstrap for an eLearning platform, ensuring consistent UI/UX implementation.</li>
            <li>Actively collaborated within the development team, contributing insights and feedback to refine component implementation for the platform.</li>
            <li>Maintained a library of documented React components, leveraging React Bootstrap for scalable and cohesive UI across the eLearning platform.</li>
          </ul>
          <div className='technologies'>
          <p>Here are some technologies I have been working with:</p>
          <ul className='skills-links'>
            <li>Javascript</li>
            <li>React.js</li>
            <li>React Bootstrap</li>
            <li>Figma</li>
            <li>HTML & CSS</li>
          </ul>

          </div>
       </div>
    </div>
  )
}

export default Experience
