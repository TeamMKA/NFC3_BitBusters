import {Route,Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home'
import  './styles/app.scss';

import NavBar from './components/NavBar'
import DrawerTemp from './utils/widgets/DrawerTemp';

import Footer from './components/Footer';


const App = () => {
  const primaryItems = ['Politicians', 'State', 'Party'];
  const secondaryItems = ['Predictive Analysis', 'News Tracking', 'Recommendation System'];
  
  return (
   <Router>
    <NavBar />
    <DrawerTemp items={primaryItems} secondaryItems={secondaryItems} drawerWidth={300} />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App