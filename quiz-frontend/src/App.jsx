import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import General from './components/pages/General';
import Aptitude from './components/pages/Aptitude';
import Technical from './components/pages/Technical';
import Leaderboard from './components/pages/Leaderboard';
import Contact from './components/pages/Contact';
import Nav from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/general" element={<General />} />
          <Route path="/aptitude" element={<Aptitude />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
