import './App.css';
import { useState } from 'react';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Works from './components/Works';

function App() {
  const [menuOpen, setMenu] = useState(false);
  function handleMenu() {
    setMenu(!menuOpen);
  }
  return (
    <div className='h-screen'>
      <NavBar menuOpen={menuOpen} handleMenu={handleMenu} />
      <Menu menuOpen={menuOpen} handleMenu={handleMenu} />
      <div className='w-full h-screen  -top-[70px] bg-lightsalmon relative top-16'>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div >
  );
}

export default App;
