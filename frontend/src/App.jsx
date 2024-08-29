import {Route,Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home'
import  './styles/app.scss';

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </Router>
  )
}

export default App