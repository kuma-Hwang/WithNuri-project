import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ConcertSelectPage from './pages/ConcertSelectPage';
import TicketBookingPage from './pages/TicketBookingPage';
import RegisterPage from './pages/RegisterPage';
import Login from './pages/Login';
import MyConcertPage from './pages/MyConcertPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/concerts" element={<ConcertSelectPage />} />
        <Route path="/booking" element={<TicketBookingPage />} />
        <Route path="/my-concerts" element={<MyConcertPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
