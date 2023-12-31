import React, { useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../Pages/Product1.css";

const ProductCards = (products) => {
    console.log("asdfasdf",products);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
    const totalProducts = 12;

        const handleNextPage = () => {
            if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
                setCurrentPage(currentPage + 1);
            }
        };

        const handlePrevPage = () => {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        }
        console.log(products.products.description);

        // Calculate the range of products to display
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;


        return (
            <Container fluid className="mt-5" style={{ backgroundColor: 'black', color: 'white' }}>
                {/* <Row>
                    <Col xs={12}>
                        <div className="d-flex justify-content-between">
                            <div>{`Displaying ${startIndex + 1}-${endIndex} of ${totalProducts} products`}</div>
                            <div>
                                <p style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#gray' }}>Result: DOGS</p>
                            </div>
                            <Button variant="secondary" style={{ borderRadius: '10px', padding: '5px 20px', fontSize: '14px', height: '40px' }}>Sort</Button>
                        </div>
                    </Col>
                </Row> */}

                <Row>
                        <Col key={products.products.productId} xs={12} className="mb-3">
                            <Card style={{ width: '100%', backgroundColor: 'black', border: '1px solid #333' }}>
                                <Row noGutters>
                                    <Col xs={3}>
                                        <Card.Img src={products.products.imageLink} style={{ height: '100%', objectFit: 'cover' }} />
                                    </Col>
                                    <Col xs={6}>
                                        <Card.Body>
                                            <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>{products.products.productName}</Card.Title>
                                            <Card.Text style={{ color: '#fff' }}>{products.products.description.age}</Card.Text>
                                            <Card.Text style={{ color: '#fff' }}>{products.products.description.behaviour}</Card.Text>
                                            <Card.Text style={{ color: '#fff' }}>{products.products.description.breed}</Card.Text>
                                            <Card.Text style={{ color: '#fff' }}>{products.products.description.color}</Card.Text>
                                            <Card.Text style={{ color: '#fff' }}>{products.products.description.lifeExpectancy}</Card.Text>
                                            <Card.Text style={{ color: '#fff' }}>{products.products.description.size}</Card.Text>
                                            <Card.Text style={{ color: '#fff' }}>{products.products.description.origination}</Card.Text>
                                            <Card.Text style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#FDFD96' }}>{`Rs. ${products.products.price}`}</Card.Text>
                                            <Card.Text style={{ color: '#66ff66' }}>Free Delivery</Card.Text>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <Button variant="primary">Add to Cart</Button>
                                                <div className="d-flex quantity-buttons" >
                                                    <Button variant="secondary" className="mr-4" style={{ marginRight: '5px' }}>{/* Quantity Decrease Button goes here */}-</Button>
                                                    <Button variant="secondary" className="mr-4" style={{ marginRight: '5px' }}>{/* Quantity Display goes here */}1</Button>
                                                    <Button variant="secondary">{/* Quantity Increase Button goes here */}+</Button>
                                                </div>
                                                <Button variant="warning">Buy Now</Button>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} className="d-flex justify-content-center">
                        <Button variant="secondary" onClick={handlePrevPage}>
                            Previous
                        </Button>
                        <Button variant="secondary" className="ml-5" onClick={handleNextPage}>
                            Next
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }

export default ProductCards;