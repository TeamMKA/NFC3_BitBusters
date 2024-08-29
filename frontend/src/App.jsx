import {Route,Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home'
import  './styles/app.scss';

import NavBar from './components/NavBar'

import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';
import WorkflowTimeline from './components/WorkflowTimeline';
import Test from './components/Test';



const App = () => {

  return (
   <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/cards' element={<ProfileCard />} />
      <Route path='/about' element={<WorkflowTimeline />} />
      <Route path='/test' element={<Test/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App