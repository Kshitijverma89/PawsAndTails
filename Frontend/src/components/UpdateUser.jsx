import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  const { userId } = useParams(); // Accessing userId from URL params
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('token'));
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        const response = await axios.get(`http://localhost:8000/admin/users/${userId}`, config);
        console.log(response.data);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setMobileNo(response.data.mobileNo);
      } catch (error) {
        setError('Error fetching user data');
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [userId]);

 

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const updatedUserData = { firstName, lastName, email, mobileNo };
      await axios.put(`http://localhost:8000/admin/users/${userId}`, updatedUserData, config);
      console.log('User updated successfully!');
      // You can redirect the user to another page after successful update
    } catch (error) {
      setError('Error updating user data');
      console.error('Error updating user:', error);
    }
    setLoading(false);
  };


  return (
    <Container>
    <h1>Update User</h1>
    <Form onSubmit={handleUpdate}>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="mobileNo">Mobile Number</Label>
        <Input
          type="text"
          name="mobileNo"
          id="mobileNo"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </FormGroup>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button type="submit" color="primary" disabled={loading}>{loading ? 'Updating...' : 'Update'}</Button>
    </Form>
    </Container>
  );
};

export default UpdateUser;


 