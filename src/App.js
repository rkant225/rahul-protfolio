import { useEffect } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import handleScroll from './Utilities/handleScroll';

function App() {

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container" onScroll={()=>{console.log('Scroling')}}>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
