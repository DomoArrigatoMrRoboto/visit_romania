import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './pages/About/About';
import Experiences from './pages/Experiences/Experiences';
import Discover from './pages/Discover/Discover';
import Events from './pages/Events/Events';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Container fluid className="vh-100 p-0">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
