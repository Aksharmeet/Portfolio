import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

// Header and footer
import Header from './Common Components/Header';
import Footer from './Common Components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/About" element={<About/>}></Route>
      <Route  exact path="/Contact" element={<Contact/>}></Route>
    </Routes>
    <div className="App">
      
    </div>
    </BrowserRouter>
  );
}

export default App;
