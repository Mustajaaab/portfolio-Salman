import Navbar from './components/navbar'
import SectionOne from './components/section-one'
import Services from './components/services'
import AboutMe from './components/about-me'
import Skills from './components/precentage'
import Portfolio from './components/portfolio'
import Contact from './components/contact-us'
import './App.css'

function App() {

  return (
    <div className='bg-[#121212]'>
    <Navbar/>
    <SectionOne/>
    <Services/>
    <AboutMe/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    </div>
  );
  
}

export default App
