import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"
import Footer from "./components/footer/Footer"

function App() {
  

  return (
    <div className="bg-[#171d32] h-auto text-amber-50 w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
