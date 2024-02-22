import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log(JSON.parse(localStorage.getItem("token")));
        const config = {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` }
        };
        // const response = await axios.get(`http://localhost:8000/admin/users`, config)
        const response = await axios.get('http://localhost:8000/admin/users',config).then((response)=>{
          console.log(response.data.user);
          console.log(response.status);
          setUsers(response.data.user); // Assuming response.data is an array of user objects
          setLoading(false);

        }).catch((error)=>{
          // console.error("Something went wrong");
          console.log(error.response.status);
          if(error.response.status = 403){
            setErrorMessage("Forbidden");
            setError(true);
            setLoading(false);
          }
        });
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      

      }
    };

    fetchUsers();
  }, [error, loading]);

  const handleDelete = async (userId) => {
    try {
      let result = window.confirm("are you sure you want to delete");
      if(result){

      const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` }
      };
      await axios.delete(`http://localhost:8000/admin/users/${userId}`,config).then((response)=>{
        setUsers(users.filter(user => user.userId !== userId));
        console.log('User deleted successfully!');
      }).catch((error)=>{
        console.error('Error deleting user:', error);

      });   
    }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
    
  };
  

  return (
    <Container>
      <h1>User List</h1>
      {error ? <p >{errorMessage}</p>: loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.firstName+" "+user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <Button color="danger" onClick={() => handleDelete(user.userId)}>Delete</Button>
                  <Link to={`/update/${user.userId}`}>
                  <Button color="primary">Update</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  );
};

export default UserList;
