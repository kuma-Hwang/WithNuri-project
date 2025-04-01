import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import MainPage from './pages/MainPage';
import ConcertSelectPage from './pages/ConcertSelectPage';
import TicketBookingPage from './pages/TicketBookingPage';
import RegisterPage from './pages/RegisterPage';
import Login from './pages/Login';
import MyConcertPage from './pages/MyConcertPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/concerts" element={<ConcertSelectPage />} />
          <Route path="/booking" element={<TicketBookingPage />} />
          <Route path="/booking/:concertId" element={<TicketBookingPage />} />
          <Route path="/my-concerts" element={<MyConcertPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
