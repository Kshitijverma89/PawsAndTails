// src/Home.jsx
import React from "react";
import AppNavbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";
import PaymentDetail from "./PaymentDetail";

import ProductPage from "./Product1";
import Cart from "./Cart";

const Home = () => {
  return (
    <div>
     

      <MainContent />

      <HeroSection />

      <FeaturedProducts />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
