import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Browse from './pages/Browse';
import Sell from './pages/Sell';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      
      <Routes>
       
        <Route path="/Browse" element={<Browse />} />
        {/*<Route path="/sell" element={<Sell />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />*/}
      </Routes>
      
    </Router>
  );
}

export default App;
