import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import HeroSection from "./sections/HeroSection";
import Portfolio from "./sections/Portfolio";
import Service from "./sections/Service";
import WorkFlow from "./sections/WorkFlow";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Portfolio />
      <Service />
      <WorkFlow />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
