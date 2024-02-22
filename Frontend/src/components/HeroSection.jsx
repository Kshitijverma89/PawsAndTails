import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './HeroSection.css'; // Import the CSS file for additional styling
import { FaPaw } from 'react-icons/fa';

const HeroSection = () => {
  const products = [
    {
      name: 'Dog',
      imageSrc: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3MlMjBmdW5ueXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Cat',
      imageSrc: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhdHMlMjBmdW5ueXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Birds',
      imageSrc: 'https://images.unsplash.com/photo-1490718720478-364a07a997cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyZHMlMjBmdW5ueXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Fish',
      imageSrc: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D',
    },
    
  ];
  // md={3}     
  return (
    <Container className="p-3 my-3 bg-dark text-white text-center">
      <h1> <FaPaw /> Welcome to Paws and Tails <FaPaw /> </h1>
      <p> Discover a world of pets and accessories. <FaPaw /></p>
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={3} className="mb-2"> {/* Change mb-4 to mb-2 */}
            <Card className={`product-card card-${index + 1}`}>
              <Card.Img variant="top" src={product.imageSrc} alt={product.name} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                <Card.Title className="font-weight-bold text-black mb-3">{product.name}</Card.Title>
                <Button variant="primary"> <a href = "/Product1" style={{ color: 'white', textDecoration: 'none' }}> See More </a></Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HeroSection;