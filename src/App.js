import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Meme from './pages/Memes';
import MemeEdit from './pages/MemeEdit';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/memes' element={<Meme />} />
          <Route path='/edit/:id' element={<MemeEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
