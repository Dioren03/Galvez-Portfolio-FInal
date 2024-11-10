import './assets/App.css'
import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import NavBarSection from './components/NavBarSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSetion'
import FooterSection from './components/FooterSection'
import ProjectSection from './components/ProjectSection'


function App() {
  
  return (
    <>
    <div className='bg-brown '>
    <NavBarSection/>
      <HeroSection/>
      <SkillsSection/>
      <AboutSection/>
      <ProjectSection />
      <ContactSection/>
      <FooterSection/>
    </div>
      
    </>
  )
}

export default App
