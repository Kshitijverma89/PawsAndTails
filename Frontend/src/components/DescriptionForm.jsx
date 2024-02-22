import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';


export default function DescriptionForm() {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    quantity: '',
    condition: '',
    category: '',
    brand: '',
    shipping: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/addDescription', formData);
      alert('Product details submitted successfully!');
    } catch (error) {
      console.error('Error submitting product details:', error);
      alert('An error occurred while submitting the product details. Please try again.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={8}>
        <div className="description__form p-4 rounded" style={{ border: '1px solid #ccc', padding: '20px', margin: '20px auto', maxWidth: '600px', backgroundColor: '#fff', borderRadius: '10px' }}>
            <h2 className="text-center" style={{ color: 'black', marginBottom: '20px' }}>Upload Product Details </h2>
            <Form onSubmit={handleSubmit}>
              <div className="form-group-lg mb-3">
                <Form.Control type="text" placeholder="Product Name" id="productName" name="productName" onChange={handleChange} required />
              </div>

              <div className="form-group-lg mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Description" id="description" name="description" onChange={handleChange} />
              </div>

              <Row className="mb-3">
                <Col>
                  <Form.Control type="text" placeholder="Price" id="price" name="price" onChange={handleChange} required />
                </Col>
                <Col>
                  <Form.Control type="number" placeholder="Quantity" id="quantity" name="quantity" onChange={handleChange} required />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Control type="text" placeholder="Condition" id="condition" name="condition" onChange={handleChange} required />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Category" id="category" name="category" onChange={handleChange} required />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Control type="text" placeholder="Brand" id="brand" name="brand" onChange={handleChange} />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Shipping" id="shipping" name="shipping" onChange={handleChange} />
                </Col>
              </Row>

              <Button className='btn secondary__btn auth__btn' type='submit' style={{backgroundColor: 'blue', borderColor: 'blue', color: 'white'}}>Submit</Button>


            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
