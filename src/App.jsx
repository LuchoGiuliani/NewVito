import { BrowserRouter } from "react-router-dom"
import { About, Contact, Youtube, Feedbacks, Hero, Navbar, Works, StarsCanvas} from './components'

const App = ()  =>  {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
        <Youtube />
        <About />
        <StarsCanvas />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
    </div>
    
    </BrowserRouter>
   
  )
}

export default App
