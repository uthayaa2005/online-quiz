import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import AddQuestion from './components/pages/AddQuestion'
import Leaderboard from './components/pages/Leaderboard';
import Contact from './components/pages/Contact';
import Nav from './components/Navbar';
import AdminLogin from './components/AdminLogin';
import Admin from './components/Admin';
import StudentQuiz from './components/pages/StudentQuiz';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/contact" element={<Contact />} />
             <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<Admin />} />
          <Route path="/addquestion" element= {<AddQuestion />} />
          <Route path="/quiz" element={<StudentQuiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
