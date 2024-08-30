import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/app.scss";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import Test from "./components/Test";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<ProfileCard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/about" element= {<About/> } />
        <Route path="/contact" element= {<Contact/> } />
        <Route path="/services" element= {<Services/> } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
