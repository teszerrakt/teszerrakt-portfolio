import './App.css'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import SocialMedia from './components/SocialMedia/SocialMedia'

function App() {
  return (
    <div className='App'>
      <SocialMedia />
      <Landing />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
