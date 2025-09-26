import './App.css'
import AboutMe from './Components/AboutMe/AboutMe'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/testimonials'

function App() {


  return (
    <>
      
      <Navbar></Navbar>

      <main>
        <section id='home'>
            <Banner></Banner>
        </section>

        <section id='about'>
          <AboutMe></AboutMe>
        </section>

        <section id='services'>
          <Services></Services>
        </section>

        <section id='projects'>
          <Projects></Projects>
        </section>

        <section id='testimonials'>
          <Testimonials></Testimonials>
        </section>

        <section id='contacts'>
          <Contact></Contact>
        </section>

      </main>
    <Footer></Footer>

    </>
  )
}

export default App
