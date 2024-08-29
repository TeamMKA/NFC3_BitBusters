import {Route,Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home'
import  './styles/app.scss';
import NavBar from './components/NavBar'

const App = () => {
  return (
   <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </Router>
  )
}

export default App