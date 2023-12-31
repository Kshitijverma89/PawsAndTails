// Footer.jsx
import React from 'react';
import { FaPaw , FaPhone, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaLinkedinIn , FaCat , FaDog } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-md-6 col-lg-3 about-footer">
              <h3>Contact Us</h3>
              <ul>
                <li><a href="tel:(010) 1234 4321"><FaPhone /> (091) 8848756233</a></li>
                <li><FaMapMarkerAlt />
                 12/879 ,  sadar house,
                  <br />New Delhi, India,
                  <br />LIC 3201
                </li>
              </ul>
              <a href="" className="btn red-btn">Buy Now <FaDog/></a>
            </div>
            
            <div className="col-md-6 col-lg-2 page-more-info">
              <div className="footer-title">
                <h4>Page links</h4>
              </div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3 page-more-info">
              <div className="footer-title">
                <h4>More Info</h4>
              </div>
              <ul>
                <li><a href="#">Breeding</a></li>
                <li><a href="#">Adoption</a></li>
                <li><a href="#">Pet spa Grooming  </a></li>
                <li><a href="#">Pet Doctor</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 open-hours">
              <div className="footer-title">
                <h4>Our Socials</h4>
                <ul className="footer-social">
                  <li><a href="" target="_blank"><FaFacebookF /> P&T@fb.com</a></li>
                  <li><a href="" target="_blank"><FaInstagram />  PawsAndTails</a></li>
                  <li><a href="" target="_blank"><FaLinkedinIn />  PawTail Twitter</a></li>
                </ul>
              </div>
             
              <hr />
              <div className="footer-logo">
                <table>
                  <tbody>
                    <tr>
                      <td><FaPaw /> Paws and Tails</td>
                     <br></br> 
                      <td><FaCat /> Paws and Tails</td>
                      <td><FaDog /> Paws and Tails</td>
                      
                      
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="row">
            <div className="col-sm-4">
              <a href="">Privacy policy</a>
            </div>
            <div className="col-sm-8">
              <p><FaPaw />    Paws And Tails.in    @ 2023 All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
