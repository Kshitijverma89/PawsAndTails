import React, { useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../Pages/Product.css";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const ProductCards = (products) => {
    console.log("asdfasdf",products);
    console.log(products.products.description.age);
    const [quantities, setQuantities] = useState(1);
    
    const cartbody={
        cartItemId : " ",
        product: {
            productId: " ",
            category: " ",
            productName: " ",
            price: " ",
            description: {
                    Id: " ",
                    Breed: " ",
                    Age: " ",
                    lifeExpectancy: " ",
                    size: "",
                    origination: " ",
                    color: " ",
                    behaviour: " ",
                    imageLink: " "
                    },
            sellers: [
                {
                    sellerId:" ",
                    name: " ",
                    address: {
                        addrId:" ",
                        plotNo: " ",
                        street: " ",
                        city: " ",
                        district: " ",
                        state: " ",
                        country: " ",
                        pinCode: " "
                    },
                    email: " ",
                    contactNumber: " "
                }
                ],
        
            },
            quantity: " ",
            totalAmount: " "
        }
        const [cart, setCart] = useState({cartbody});
        // const handleNextPage = () => {
        //     if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
        //         setCurrentPage(currentPage + 1);
        //     }
        // };

        // const handlePrevPage = () => {
        //     if (currentPage > 1) {
        //         setCurrentPage(currentPage - 1);
        //     }
        // }
        console.log(products.products.description);

        // Calculate the range of products to display
        // const startIndex = (currentPage - 1) * productsPerPage;
        // const endIndex = startIndex + productsPerPage;

        const handleIncreaseQuantity = () => {
            setQuantities(quantities+1);
          };
        
          const handleDecreaseQuantity = () => {
            if(quantities>1){
                setQuantities(quantities-1);
            }
          };
          
          const user = localStorage.getItem("user");
          const username = JSON.parse(user).username;
          const addToCart = async (e) => {
            try {
                const dec_token = jwtDecode(localStorage.getItem("token"));
                console.log(dec_token.roles);
                // console.log(e.target.id);
            //   const response = await axios.post(`http://localhost:8000/cart/cartItems/${localStorage.getItem("user")}`,
              const response = await axios.post(`http://localhost:8000/cart/${username}`, {
                // headers: {
                //             'Authorization': `Bearer ${localStorage.getItem("token")}`,
                //             'Content-Type': 'application/JSON',
                //              // Add any other headers as needed
                //         },
                // cartItemId: "1",
                // product: {
                //   ...products.products,
                //   description: { ...products.products.description }
                // },
                product: e.target.id,
                quantity: quantities,
                totalAmount: "", 
              });

            //   setCart([...cart, response.data]);
             
              
              console.log('Product added to cart:', response.data);
              alert('Product added to cart:');
            } catch (error) {
                alert("Product already Present in cart")
              console.error('Error adding product to cart:', error);
        
            }
          };


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
                                            <Card.Title id ="temp" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#ad8cd4' }} >{products.products.productName}</Card.Title>
                                            <Card.Text style={{ color: '#fff' }}>Breed : {products.products.breed}</Card.Text>
                                            <Card.Text style={{ color: '#fff' }}>Age : {products.products.description.age} years</Card.Text>
                                            <Card.Text style={{ color: '#fff' }}>color : {products.products.description.color}</Card.Text>
                                            <Card.Text style={{ color: '#fff' }}>LifeExpectancy : {products.products.description.lifeExpectancy} years</Card.Text>
                                            <Card.Text style={{ color: '#fff' }}>size : {products.products.description.size} in length</Card.Text>
                                            <Card.Text style={{ color: '#fff' }}>Origination : {products.products.description.origination}</Card.Text>
                                            <Card.Text style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#FDFD96' }}>{`Rs. ${products.products.price}`}</Card.Text>
                                            <Card.Text style={{ color: '#66ff66' }}>Free Delivery</Card.Text>
                                            <div  className="d-flex justify-content-between align-items-center">
                                                <Button id={products.products.productId} variant="primary" onClick={addToCart}>Add to Cart</Button>
                                                <div className="d-flex quantity-buttons">
                                                <Button variant="secondary" className="mr-4" style={{ marginRight: '5px' }}onClick={ handleDecreaseQuantity}>-</Button>
                                                <Button variant="secondary" className="mr-4" style={{ marginRight: '5px' }}>
                                                 {quantities}</Button>
                                                <Button variant="secondary" onClick={handleIncreaseQuantity}>+</Button>
                                                 </div>
                                                <Button variant="warning" ><a href='/Cart' style={{ color: 'white', textDecoration: 'none' }}>Buy Now</a></Button>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                </Row>
                
            </Container>
        );
    }

export default ProductCards;

// <Card.Text style={{ color: '#fff' }}>Behaviour : {products.products.description.behaviour}</Card.Text>