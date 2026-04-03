import Nav from './components/Nav';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Works from './components/Works';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      <Works />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
