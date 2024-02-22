import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//import Cart from './Pages/Cart';
import Home from './Pages/Home';
import ComingSoon from './Pages/ComingSoon';
import UserProfile from './components/UserProfile';
import ProductPage from './Pages/Product1';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AppNavbar from './components/Navbar';
import AppNavbar2 from './components/NavbarSeller';
import AppNavbar3 from './components/NavbarUser';
import Footer from './components/Footer';
import About from './Pages/About';
import PlacedOrder from './Pages/PlacedOrder';
import PaymentDetail from './Pages/PaymentDetail';
import AdminDashboard from './Pages/AdminDashboard';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import UpdateUser from './components/UpdateUser';
import Seller from './components/Seller';
import DescriptionForm from './components/DescriptionForm';
import Piechart from './components/PieChart';
import SellerDashboard from './Pages/SellerDashboard';
import RegisterSeller from './Pages/RegisterSeller';
import Dashboard from './Pages/DashBoard';
import EditProfile from './components/EditProfile';
import { jwtDecode } from 'jwt-decode';
import { AuthContext } from './context/AuthContext';
import SearchResultsPage from './components/SearchResultsPage';

import PaymentSuccess from './components/Payments/PaymentSuccess';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Order from './components/Order/Order';
import OrderDetails from './components/Order/OrderDetails';



const App = () => {
  const [category, setCategory] = useState('');

  const { user, admin, dispatch } = useContext(AuthContext);
  const [searchItem, setSearchItem] = useState('');
  console.log(user?.authorities[0].authority)

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token === null || jwtDecode(token).roles !== "ADMIN") {
  //     setRole("USER");
  //   } else {
  //     setRole("ADMIN");
  //   }
  //   console.log(role)
  // }, [role]);

  // let {role} = null;
  const pass = (event) => {
    console.log(event)
    setCategory(event.target.id);
  };

  const search = (event)=>{
    console.log(event);
    setSearchItem(event);
    console.log(searchItem)
  }
 

  return (
    <div>
      <Router>
      {user?.authorities[0].authority==="ADMIN"?<AppNavbar pass2={[pass,search]}/>:<AppNavbar3 pass2={[pass,search]}/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PlacedOrder" element={<PlacedOrder />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/Product1" element={<ProductPage category={category} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ComingSoon" element={<ComingSoon />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart/PaymentDetail" element={<PaymentDetail />} />
          <Route path="/SellerDashboard" element={<SellerDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/UserList" element={<UserList />} />
          <Route path="/update/:userId" element={<UpdateUser />} />
          <Route path="/Seller" element={<Seller />} />
          <Route path="/RegisterSeller" element={<RegisterSeller />} />
          <Route path="/DescriptionForm" element={<DescriptionForm />} />
          <Route path="/PieChart" element={<Piechart />} />
          <Route path="/seller" element={<SellerDashboard/>} />
          <Route path="/EditProfile" element={<EditProfile/>} />
          <Route path="/search-results/" element={<SearchResultsPage searchItem ={searchItem}/>} />

          <Route path="/payment/:orderIdpayment-success?order_id=:orderId" element={<PaymentSuccess/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/cart/checkout" element={<Checkout/>} />
      <Route path="/account/orders" element={<Order/>} />
      <Route path="/account/orders/:orderId" element={<OrderDetails/>} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
