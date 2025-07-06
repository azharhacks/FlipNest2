import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Browse from './pages/Browse';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import Login from './pages/Login';
import Messages from './pages/Messages'
import Profile from './pages/Profile';
import Register from './pages/Register';
import Sell from './pages/Sell';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sell" element={<Sell />} />
       
      </Routes>
      
      
    </Router>
  );
}

export default App;
