import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import About from './pages/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home'

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
