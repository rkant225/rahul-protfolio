import { useEffect } from 'react';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
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
    </div>
  );
}

export default App;
