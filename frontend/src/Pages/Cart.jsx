// Cart.jsx
import React, { useState } from 'react';
import { Table, Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './PaymentDetail';
import './Cart.css';


const Cart = () => {
  const [giftMessage, setGiftMessage] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    country: '',
    state: '',
    pincode: '',
  });
  const [shippingOption, setShippingOption] = useState('free');

  const [cart, setCart] = useState([
    { id: 1, name: 'Pup 1', price: 5000, quantity: 1, image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D', seller: 'Pet Shop A' },
    { id: 2, name: 'Pup 2', price: 7000, quantity: 2, image: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D', seller: 'Pet Shop B' },
    { id: 3, name: 'Pup 3', price: 6000, quantity: 1, image: 'https://images.unsplash.com/photo-1592769606534-fe78d27bf450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D', seller: 'Pet Shop C' },
    { id: 2, name: 'Pup 2', price: 7000, quantity: 2, image: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D', seller: 'Pet Shop B' },
    { id: 3, name: 'Pup 3', price: 6000, quantity: 1, image: 'https://images.unsplash.com/photo-1592769606534-fe78d27bf450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D', seller: 'Pet Shop C' },
  ]);

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const removeProduct = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleGiftMessageChange = (e) => {
    setGiftMessage(e.target.value);
  };

  const handleDiscountCodeChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleShippingAddressChange = (field, value) => {
    setShippingAddress({ ...shippingAddress, [field]: value });
  };

  const handleShippingOptionChange = (option) => {
    setShippingOption(option);
  };

  const handleProceedToCheckout = () => {
    // Add logic for proceeding to checkout
    if (cart.length === 0) {
      alert('Your cart is empty. Add items to proceed to checkout.');
      return;
    }
    navigate('./PaymentDetail')
    console.log('Proceed to checkout');
  };

  const handleUpdateCart = () => {
    // Add logic for updating cart
    console.log('Update cart');
  };

  const handleUpdateShippingAddress = () => {
    // Add logic for updating shipping address
    console.log('Update shipping address');
  };

  return (
    <Container fluid className="mt-5" style={{ backgroundColor: '#000', color: 'white' }}>
      <h2 style={{ color: 'white' }}>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <div>
          <Table bordered={false} hover style={{ backgroundColor: '#333', color: 'white' }}>
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Seller</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div>
                      <strong>{item.name}</strong>
                      <p>Order ID: {item.id}   </p>
                    </div>
                  </td>
                  <td>
                   
                  </td>
                  <td>Rs.{item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                      min="1"
                    />
                  </td>
                  <td>Rs.{item.price * item.quantity}</td>
                  <td>{item.seller}</td>
                  <td>
                    <Button variant="danger" onClick={() => removeProduct(item.id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
                          </tbody>
          </Table>
          <div className='total'>
            <Button variant="primary" disabled>
              Total Price: Rs.{calculateTotal()}
            </Button>
          </div>
          <div className='order-summary-box'>
            <div className='order-summary'>
              <h3>Order Summary</h3>
              <div>
                <strong>Total Price of Product:</strong> Rs.{calculateTotal()}
              </div>
              <div>
                <strong>Delivery charges:</strong> Rs.{shippingOption === 'free' ? 0 : 1000}
              </div>
              <div>
                <strong>Sub-Total:</strong> Rs.{calculateTotal() + (shippingOption === 'free' ? 0 : 100)}
              </div>
              <div>
                <strong>Estimated Days of Delivery:</strong> 3
              </div>
              <div>
                <Form.Group controlId="giftMessage">
                  <Form.Label>Gift Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={giftMessage}
                    onChange={handleGiftMessageChange}
                  />
                </Form.Group>
              </div>
              <div>
                <Form.Group controlId="discountCode">
                  <Form.Label>Discount Code</Form.Label>
                  <Form.Control
                    type="text"
                    value={discountCode}
                    onChange={handleDiscountCodeChange}
                    size="sm" style={{ width: '150px' }}
                  />
                </Form.Group>
              </div>
             
            </div>
            <div className='shipping-address-box' style={{ textAlign: 'left' }}>
              <h3>Shipping Address</h3>
              {/* <div>
                <Form.Group controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    value={shippingAddress.country}
                    onChange={(e) => handleShippingAddressChange('country', e.target.value)}
                    style={{ width: '350px' }} // Adjust the width as needed
                  />
                </Form.Group>
              </div>
              <div>
                <Form.Group controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    value={shippingAddress.state}
                    onChange={(e) => handleShippingAddressChange('state', e.target.value)}
                    style={{ width: '350px' }} // Adjust the width as needed
                  />
                </Form.Group>
              </div>
              <div>
                <Form.Group controlId="pincode">
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control
                    type="text"
                    value={shippingAddress.pincode}
                    onChange={(e) => handleShippingAddressChange('pincode', e.target.value)}
                    style={{ width: '350px' }} // Adjust the width as needed
                  />
                </Form.Group>
              </div> */}

<div class="row">
                <div class="col-3"><p>Plot No.</p><input class="form-control"></input></div>
                <div class="col-6"><p>Street Name</p><input class="form-control"></input></div>
            </div>
            <div class="row">
                <div class="col-6"><p>City</p><input class="form-control"></input></div>
                <div class="col-6"><p>District</p><input class="form-control"></input></div>
            </div>
            <div class="row">
                <div class="col-4"><p>State</p><input class="form-control"></input></div>
                <div class="col-4"><p>PinCode</p><input class="form-control"></input></div>
          
                <div class="col-4"><p>Country</p><input class="form-control"></input></div>

            </div>
              <br></br>
              <div className='btn-update-address' style = {{ display : 'flex', gap :'15px'}}>
                {/* <Button type='success' style={{ backgroundColor: '#74992e', color: 'black' }} onClick={handleUpdateShippingAddress}>
                  Update Address
                </Button> */}
                <Button variant='success' style={{  color: 'black' }} onClick={handleProceedToCheckout} href="./PaymentDetail">
                  Proceed to Pay
                </Button>
                <Button variant='warning' style={{ color: 'black' }} onClick={handleUpdateCart} href="./Product1">
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;

