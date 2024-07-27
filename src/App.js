import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import Landing from './components/Landing';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/' element={<Landing/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
