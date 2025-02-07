/* eslint-disable react/no-unknown-property */
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import ContactUs from "./pages/ContactUs";
import EducationalQualification from "./pages/EducationalQualification";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {

  return (
  <div className="container mx-auto">
  <Navbar></Navbar>
  <Home></Home>
  <AboutMe></AboutMe>
  <Skills></Skills>
  <EducationalQualification></EducationalQualification>
  <Projects></Projects>
  <ContactUs></ContactUs>
  <Outlet></Outlet>
  <Footer></Footer>
  </div>
  );
}

export default App;
