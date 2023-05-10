import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import ProjectGallery from "./sections/ProjectGallery";
import Footer from "./sections/footer";
import './App.css';

function App() {
  return (
      <div className="App">
          <Router>
              <NavBar />
              <AboutMe />
              <Skills />
              <ProjectGallery />
              <Footer />
          </Router>
    </div>
  );
}

export default App;
