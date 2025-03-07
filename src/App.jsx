import Navbar from './components/navbar'
import SectionOne from './components/section-one'
import Services from './components/services'
import AboutMe from './components/about-me'
import Skills from './components/precentage'
import Portfolio from './components/portfolio'
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
    </div>
  );
  
}

export default App
