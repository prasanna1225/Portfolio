import React, { useState } from 'react';
import Company from '../../assets/company.jpg';
import GoDigit from '../../assets/godigit.png'; 
import './experience.css';

const experiences = [
  {
    company: 'GoDigit',
    role: 'Graduate Trainee Engineer',
    duration: 'July 2024 - Present',
    logo: GoDigit,
    description: [
      'Gaining hands-on experience with Java Spring Boot and PostgreSQL to develop robust and scalable backend solutions.',
      'Collaborating with a dynamic team to build and enhance cutting-edge insurance technology solutions.',
      'Actively working on system migration, optimizing performance, and ensuring seamless data transition.',
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'ABS(Allianz Business System)'],
  },
  {
    company: 'Edfling',
    role: 'Web Developer Intern',
    duration: 'Jul 2023 - Sep 2023',
    logo: Company,
    description: [
      'Developed reusable Figma components using React and React Bootstrap for an eLearning platform, ensuring consistent UI/UX implementation.',
      'Actively collaborated within the development team, contributing insights and feedback to refine component implementation for the platform.',
      'Maintained a library of documented React components, leveraging React Bootstrap for scalable and cohesive UI across the eLearning platform.',
    ],
    technologies: ['Javascript', 'React.js', 'React Bootstrap', 'Figma', 'HTML & CSS'],
  },

];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
  };

  return (
    <div className='exp-container' id='experience'>
    <h1 className='exp-heading'>Experience</h1>
    <div className='experience' >
      <div className='experience-left-content'>
        
        <img src={experiences[currentIndex].logo} alt='company logo' />
      </div>
      <div className='experience-right-content'>
        <h1>{experiences[currentIndex].role} @{experiences[currentIndex].company}</h1>
        <p>{experiences[currentIndex].duration}</p>
        <ul className='intern-description'>
          {experiences[currentIndex].description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        <div className='technologies'>
          <p>Here are some technologies I have been working with:</p>
          <ul className='skills-links'>
            {experiences[currentIndex].technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className='navigation-buttons'>
          <button className="prev-btn" onClick={handlePrev}>Previous</button>
          <button className="next-btn" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experience;
