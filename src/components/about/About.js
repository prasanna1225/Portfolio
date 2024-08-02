
import React from 'react'

import Pic from '../../assets/pic.jpg';
import './about.css';
const About = () => {
  return (
      <div className='about-me' id='about'>
       <div className='about-left-content'>
       <h1>About Me</h1>
       <img src={Pic} alt='prassu'/>
    
       </div>
       <div className='about-right-content'>
          <p>I'm a final-year undergraduate student pursuing a degree in computer science. I've actively immersed myself in exploring and mastering various technologies. Building several impressive web projects has been a thrilling testament to my passion for learning and innovation within this field.</p>
          <h3>Here are some technologies I have been working with: </h3>
         <ul className='skill-list'>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDb</li>
          <li>Git & GitHub</li>
          <li>Python</li>
          <li>Java</li>
          <li>SQL</li>
         </ul>
       </div>
      </div>
      
  )
}

export default About
