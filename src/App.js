import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
