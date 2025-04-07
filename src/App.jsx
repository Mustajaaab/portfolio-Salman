import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import SectionOne from './components/section-one';
import Services from './components/services';
import AboutMe from './components/about-me';
import Skills from './components/precentage';
import Portfolio from './components/portfolio';
import Contact from './components/contact-us';
import Success from './components/success'; // 👈 import your new success page
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-[#121212]">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SectionOne />
                <Services />
                <AboutMe />
                <Skills />
                <Portfolio />
                <Contact />
              </>
            }
          />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
