import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Meme from './pages/Memes';
import MemeEdit from './pages/MemeEdit';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/memes' element={<Meme />} />
          <Route path='/edit/:id' element={<MemeEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
