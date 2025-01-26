import React from 'react'

import Pic from '../../assets/prasannaNew.jpg';
import './about.css';
const About = () => {
  return (
    <div id='about' className='about-me-container'>
    <h1 className='about-me-heading'>About Me</h1>
      <div className='about-me' >
       
       <div className='about-left-content'>
      
       <img src={Pic} alt='prassu'/>
    
       </div>
       <div className='about-right-content'>
          <p>Currently working as a Graduate Trainee Engineer at GoDigit Insurance, specializing in backend development with Java, Spring Boot, and PostgreSQL. To expand my expertise, I have also gained hands-on experience in frontend technologies like React, along with other essential libraries. Passionate about building scalable solutions, I continuously refine my full-stack development skills to create efficient and seamless applications.</p>
          <h3>Here are some technologies I have been working with: </h3>
         <ul className='skill-list'>
          <li>Java</li>
          <li>React.js</li>
          <li>Python</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>PostgreSQL</li>
          <li>SQL</li>
          <li>MongoDb</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
          <li>SpringBoot</li>
       
        </ul>
       </div>
      </div>
      </div>
  )
}

export default About
