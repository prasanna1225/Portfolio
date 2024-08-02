import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Experience from './components/experience/Experience';
import Project from './components/projects/Projects';
import './index.css';
function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Header/>
    <About/>
    <Experience/>
    <Project/>
    <div className='footer-text'>
    <p>Built and designed by Prasanna.</p>
    <p>All rights reserved.©</p>
    </div>
    </div>
  );
}

export default App;
