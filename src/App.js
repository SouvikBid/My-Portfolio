import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import ContactMe from "./components/contactme";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
