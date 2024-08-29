
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/app.scss";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';
<<<<<<< HEAD
import WorkflowTimeline from './components/WorkflowTimeline';
import Test from './components/Test';

=======
>>>>>>> a5a70fea91286c829db89292930383e079fd3f81


const App = () => {
  return (
   <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/cards' element={<ProfileCard />} />
<<<<<<< HEAD
      <Route path='/about' element={<WorkflowTimeline />} />
      <Route path='/test' element={<Test/>}/>
=======

>>>>>>> a5a70fea91286c829db89292930383e079fd3f81
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App;
