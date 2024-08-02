import React from 'react'
import { FaGithub} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import { IoFolderOutline } from "react-icons/io5";

const Card = ({
    project : {github, deploy,description,technologies, title}}) => {
   
  return (
    <div className='card'>
    <div>
    <div className='project-links-container'>
    <div className='project-logo'>
    <a href='none'><IoFolderOutline  color='#22c1c3' size={30}/></a>
    </div>
    <div className='project-links'>
    <a href={github}><FaGithub color='#22c1c3' size={27}/></a>
    <a href={deploy}><FaArrowUpRightFromSquare color='#22c1c3' size={23}/></a>   
</div>
    </div>
<div className='card-description'>
 <h2>{title}</h2>
 <p>{description}</p>
 <p className='tech-used'>{technologies}</p>
</div>
</div>
</div>

  )
}

export default Card
