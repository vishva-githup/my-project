import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Abouts from './Abouts';
import Services from './Services';
import Contact from './Contact';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav className='header'>
      <BrowserRouter>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/abouts">Abouts</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abouts' element={<Abouts />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
      </BrowserRouter>
    </nav>

    </div>
  );
}

export default App;
