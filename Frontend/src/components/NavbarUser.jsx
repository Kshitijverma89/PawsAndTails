import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import { FaPaw, FaShoppingCart, FaHome } from 'react-icons/fa';
import './Navbar.css';
import { AuthContext } from '../context/AuthContext';
import React, { useContext , useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AppNavbar3 = ({pass2}) => {
    console.log(pass2)
      const navigate = useNavigate();
      const { user,admin, dispatch } = useContext(AuthContext);
      const [searchTerm, setSearchTerm] = useState('');
  
      const handleSearch = (event) => {
        event.preventDefault();
        const func = pass2[1]
        console.log(searchTerm)
        func(searchTerm);
        if (searchTerm.trim() !== '') {
            navigate(`/search-results?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    }

   

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
            <Container fluid>
                <Navbar.Brand href="/" className="navbar-brand" style={{ fontFamily: 'Dancing Script, cursive' }}>
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
                            <NavLink to="/Product1"><Button id="dogs" onClick={pass2[0]}>Dogs</Button></NavLink>
                            <NavLink to="/Product1"><Button id="cats" onClick={pass2[0]}>Cats</Button></NavLink>
                            <NavLink to="/Product1"><Button id="fishes" onClick={pass2[0]}>Fishes</Button></NavLink>
                            <NavLink to="/Product1"><Button id="birds" onClick={pass2[0]}>Birds</Button></NavLink>
                        </NavDropdown>
                        <Nav.Link href="/About" className="nav-link-neon">
                            About Us
                        </Nav.Link>
                        
                            <Nav.Link href="/UserProfile" className="nav-link-neon">
                                Dashboard
                            </Nav.Link>
                       
                    </Nav>

                    <Nav className="ml-auto" id="userCartNav">
                    <Form className="d-flex" onSubmit={handleSearch}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        
                            <Button onClick={handleSearch} variant="outline-success">Search</Button>
                        </Form>

                        <div>
                            {user ? (
                                <NavDropdown title={user.username} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                    <NavDropdown.Item href="/UserProfile">Profile</NavDropdown.Item>
                                </NavDropdown>
                            ) : (admin ? (
                                <NavDropdown title={admin.username} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                    <NavDropdown.Item href="/AdminDashboard">Admin Dashboard</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <NavDropdown title="Account" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="./Login">Login</NavDropdown.Item>
                                    <NavDropdown.Item href="./Register">Sign Up</NavDropdown.Item>
                                    <NavDropdown.Item href="./RegisterSeller">Sign Up As Seller</NavDropdown.Item>
                                </NavDropdown>
                            ))}
                        </div>

                        <Nav.Link href="/Cart" className="nav-link-neon">
                            <FaShoppingCart /> Cart
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar3;
