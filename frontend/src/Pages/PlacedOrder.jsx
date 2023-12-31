// PlacedOrder.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPaw } from 'react-icons/fa';

const PlacedOrder = ({ orderDetails }) => {
    if (!orderDetails || !Array.isArray(orderDetails)) {
  return (
    <Container fluid style={{ backgroundColor: '#111315' , color: '#ffffff'  }}>
      <Row className="justify-content-center">
        <Col xs={8} className="text-center">
          <h2>  Yay !! Order Placed Successfully! <FaPaw/> <FaPaw/> </h2>
          <img
            src="https://clipart-library.com/images/Lcd5doyqi.png" // Replace with your success image URL
            alt="Success"
            style={{ width: '100%', maxWidth: '120px', margin: '20px 0' }}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={8}>
          <h3>Your Order Details:</h3>
          <ul>
            <p>  i will  fetch order detail (logic)</p>
            {/* {orderDetails.map((product) => (
              <li key={product.id}>
                {product.name} - Rs.{product.price} x {product.quantity}
              </li>
            ))} */}
          </ul>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={8}>
          <h3>Customer Details:</h3>
          {/* Display customer details here */}
          {/* <p>Name: {orderDetails.customerName}</p>
          <p>Email: {orderDetails.customerEmail}</p>
          <p>Address: {orderDetails.customerAddress}</p> */}
          {/* Add more customer details as needed */}
          <p>  i will  fetch customer detail (logic)</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={8} className="text-center">
          <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <Button variant="success" href="/">
            Shop More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
};

export default PlacedOrder;
