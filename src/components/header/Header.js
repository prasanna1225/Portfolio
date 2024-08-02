import Giphy from '../../assets/giphyy.gif'
import { FaGithub,FaLinkedin,FaTwitterSquare} from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";
import { FaHashnode } from "react-icons/fa6";
import './header.css'
import TextAnimation from '../animations/TextAnimation'
const Header = () => {
  const emailAddress = 'prasannadonga1357@gmail.com';
  return (
    <div className='header'>
    <div className='left-header'>
     <TextAnimation/>
     <h3>I Create Stuff Sometimes✨</h3>
     <p>I'm enthusiastic about crafting digital solutions that merge innovation with technology.</p>
     <a href={`mailto:${emailAddress}`}>
      <button>Say Hello!</button>
    </a>
    <div className='links-container'>
      <a href='https://github.com/prasanna1225'><FaGithub color='#F5F6F6' size={25}/></a>
      <a href='https://www.linkedin.com/in/prasanna-donga-615a14247/'><FaLinkedin color='#F5F6F6' size={25}/></a>
      <a href={`mailto:${emailAddress}`}><TbBrandGmail color='#F5F6F6' size={25}/></a>
      <a href='https://twitter.com/Prasann1225'><FaTwitterSquare color='#F5F6F6' size={25}/></a>
      <a href='https://prasanna16.hashnode.dev/'><FaHashnode color='#F5F6F6' size={25}/></a>
      
    </div>
    </div>
    <div className='right-header'>
     <div>
       <img src={Giphy} alt='my-pic'/>
     </div>
    </div>
    </div>
  )
}

export default Header
