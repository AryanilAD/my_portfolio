import VideoBackground from "./components/VideoBackground";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/ProfessionalExperience";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <VideoBackground />
      {/* Overlay for readability */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(17,23,39,0.07)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
      <Sidebar />
      <main className="main-content">
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Education />
        <Hobbies />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
export default App;
