import './App.css';
import Contact from './components/Contact';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Works from './components/Works';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
