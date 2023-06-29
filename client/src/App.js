import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/home/Home";
import About from "./Component/about/About";
import Blog from "./Component/Blog/Blog";
import Services from "./Component/service/Services";
import Signup from "./Component/signup/Signup";
import Register from "./Component/signup/Register";
import Mocktest from "./mocktest/Mocktest";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Component/Footer.js/Footer";
import SubjectPage from "./pages/SubjectPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/courses" element={<CoursesPage  />} />
        <Route exact path="/course/:course_id" element={<SubjectPage  />} />
        <Route exact path="/signin" element={<Signup />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/:course_id/mocktest/:subject_id" element={<Mocktest />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
