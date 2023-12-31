
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import { FaPaw, FaUser, FaShoppingCart, FaHome } from 'react-icons/fa';
import './Navbar.css';
import { AuthContext } from '../context/AuthContext';
 import React, { useRef, useEffect, useContext } from "react";
 import { useNavigate } from "react-router-dom";
 import {NavLink} from "react-router-dom";


const AppNavbar = ({pass2}) => {

    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    }
  return (


    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="navbar-brand" style={{ fontFamily: 'Dancing Script, cursive' }} >
          <FaPaw /> Paws and Tails
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Nav.Link href="/" className="nav-link-neon">
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link href="/ComingSoon" className="nav-link-neon">
              Adopt
            </Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
             <NavLink to="/Product1"><Button id="dogs" onClick={pass2}>Dogs</Button></NavLink>
             <NavLink to="/Product1"><Button id="cats" onClick={pass2}>Cats</Button></NavLink>
             <NavLink to="/Product1"><Button id="fishes" onClick={pass2}>Fishes</Button></NavLink>
             <NavLink to="/Product1"><Button id="birds" onClick={pass2}>Birds</Button></NavLink>
              {/* <NavDropdown.Item href="/Product1"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">Cats</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Fishes</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Birds</NavDropdown.Item>
              <NavDropdown.Item href="#action7">ExoticAnimals</NavDropdown.Item> */}
            </NavDropdown>

            <Nav.Link href="/About" className="nav-link-neon">
            About Us
          </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>

        <Nav className="ml-auto" id="userCartNav">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {/* <Nav.Link href="./UserProfile" className="nav-link-neon mr-2">
            <FaUser /> Account
          </Nav.Link> */}

           <div>
            {
              user ? (
                <>
                 
                  <NavDropdown title={user.username} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={logout} >Logout</NavDropdown.Item>
                  <NavDropdown.Item href="./UserProfile">Profile</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item href="./Login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="./Register">Sign Up</NavDropdown.Item>
                  </NavDropdown>
                </>
              )
            }
          </div> 

              

          <Nav.Link href="/Cart" className="nav-link-neon">
            
            <FaShoppingCart /> Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;