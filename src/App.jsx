import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correctly import BrowserRouter
import './App.css';
import Navigationbar from './components/Navigationbar';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <SplashScreen />
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
