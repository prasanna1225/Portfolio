import React from 'react'
import './project.css'

import projects from '../data.json';
import Card from './Card';

const Project = () => {
  return (    
  <section id='projects'>
  <h1 className='title'>Projects</h1>
    <div className='projects' >
    
   {projects.map((project,id)=>{
    return <Card key={id} project={project}/>
   })}
    </div>
    </section>
    
  )
}

export default Project
