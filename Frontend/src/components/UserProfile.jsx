import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('token'));
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        const response = await axios.get('http://localhost:8000/user/current', config); // Assuming your backend endpoint for fetching user data is /api/users/me
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEditProfile = () => {
    // Redirect to EditProfile page when Edit Profile button is clicked
    navigate('/edit-profile');
  };

  const fetchUserInfo = () => {
    // Implement logic to fetch and display user info from the frontend
    console.log('Fetching user info from the frontend...');
  };

  const fetchUserOrders = () => {
    // Implement logic to fetch and display user orders from the frontend
    console.log('Fetching user orders from the frontend...');
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.profile}>
          <img
            src="https://image.pngaaa.com/730/4806730-middle.png" // Replace with the URL of the user's profile image
            alt="Profile"
            style={styles.profileImage}
          />
          <button style={styles.sidebarButton} onClick={fetchUserInfo}>
            User Info
          </button>
          <button style={styles.sidebarButton} onClick={fetchUserOrders}>
            My Orders
          </button>
          <button style={styles.sidebarButton} onClick={handleEditProfile}>Edit Profile</button>
          <button style={styles.sidebarButton} onClick={fetchUserInfo}>
            Logout
          </button>
        </div>
      </div>
      <div style={styles.mainContent}>
        {/* Display user data here */}
        <h2>User Details</h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div>
            <div style={styles.userData}>
              <label>Username:</label>
              <input type="text" value={userData ? userData.username : ''} readOnly style={styles.inputField} />
            </div>
            <div style={styles.userData}>
              <label>firstName:</label>
              <input type="text" value={userData ? userData.firstName : ''} readOnly style={styles.inputField} />
            </div>
            <div style={styles.userData}>
              <label>firstName:</label>
              <input type="text" value={userData ? userData.lastName : ''} readOnly style={styles.inputField} />
            </div>
            <div style={styles.userData}>
              <label>Mobile no.:</label>
              <input type="text" value={userData ? userData.mobileNo : ''} readOnly style={styles.inputField} />
            </div>
            <div style={styles.userData}>
              <label>Email:</label>
              <input type="text" value={userData ? userData.email : ''} readOnly style={styles.inputField} />
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    background: '#9673b9', // Lavender color
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  sidebar: {
    width: '30%',
    marginRight: '20px',
    background: '#c7b5e0', // Lavender color
    borderRadius: '5px',
    padding: '20px',
    boxSizing: 'border-box',
  },
  profile: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  sidebarButton: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    textAlign: 'left',
    background: '#9673b9', // Lavender color
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  mainContent: {
    flex: '1',
    background: '#c7b5e0', // Lavender color
    padding: '20px',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  userData: {
    marginBottom: '15px',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
  },
};

export default UserProfile;
