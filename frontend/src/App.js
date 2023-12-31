
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Cart from './Pages/Cart';
import Home from './Pages/Home';
import ComingSoon from './Pages/ComingSoon';
import UserProfile from './Pages/UserProfile';
import ProductPage from './Pages/Product1';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';
import About from './Pages/About';
import PlacedOrder from './Pages/PlacedOrder';
import PaymentDetail from './Pages/PaymentDetail';

const App = () => {
  return (
    <div>
    <Router>
      <AppNavbar/>
    
    <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/ComingSoon" element={<ComingSoon/>} /> */}
    {/* <Route path="/Home" element={<Home />} /> */}
    <Route path="/Cart" element={<Cart />} />
    <Route path="/PlacedOrder" element={<PlacedOrder />} />
      <Route path="/Cart/PaymentDetail/PlacedOrder" element={<PlacedOrder />} />
      <Route path="/UserProfile" element={<UserProfile/>} />
      <Route path="/Product1" element={<ProductPage />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/ComingSoon" element={<ComingSoon/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Cart/PaymentDetail" element={<PaymentDetail/>} />

      
  
   
    </Routes>
  </Router>
  <Footer/>
  </div>
    
   
  //  <Home/>
  );
};

export default App;

