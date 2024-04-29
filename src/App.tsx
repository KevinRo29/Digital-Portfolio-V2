import Navbar from "./components/NavbarComponent";
import Dashboard from "./components/DashboardComponent";
import AboutMe from "./components/AboutMeComponent";
import Projects from "./components/ProjectsComponent";
import Contact from "./components/ContactComponent";
import Footer from "./components/FooterComponent";

function App() {
  return (
    <>
      <div className="h-screen w-full">
        <div className="h-auto">
          <Navbar />
        </div>

        <div className="h-auto">
          <Dashboard />
        </div>

        <div className="h-auto">
          <AboutMe />
        </div>

        <div className="h-auto">
          <Projects />
        </div>

        <div className="h-auto">
          <Contact />
        </div>

        <div className="h-auto">
          <Footer />
        </div>

        <a
          href="https://wa.me/4424667799"
          className="fixed bottom-4 right-4 z-10 animate-bounce"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="Whatsapp"
            className="w-11 h-11 lg:w-16 lg:h-16"
          />
          <div className="flex items-center justify-center text-white text-[10px] lg:text-base absolute 
          top-0.5 right-0.5 lg:top-1 lg:right-1 h-3 w-3 lg:h-4 lg:w-4 bg-red-500 rounded-full">
            1
          </div>
        </a>
      </div>
    </>
  );
}

export default App;
