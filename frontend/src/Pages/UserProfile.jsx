import React from 'react';

const UserProfile = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.profile}>
          <img
            src="https://example.com/profile-image.jpg" // Replace with the URL of the user's profile image
            alt="Profile"
            style={styles.profileImage}
          />
          <button style={styles.sidebarButton} onClick={fetchUserInfo}>
            User Info
          </button>
          <button style={styles.sidebarButton} onClick={fetchUserOrders}>
            My Orders
          </button>
        </div>
      </div>
      <div style={styles.mainContent}>
        {/* Display user data here */}
        <h2>User Details</h2>
        <div style={styles.userData}>
          <label>Username:</label>
          <input type="text" value="john_doe123" readOnly />
        </div>
        <div style={styles.userData}>
          <label>Location:</label>
          <input type="text" value="City, Country" readOnly />
        </div>
        {/* Add more user details input boxes as needed */}
      </div>
    </div>
  );
};

const fetchUserInfo = () => {
  // Implement logic to fetch and display user info
  console.log('Fetching user info...');
};

const fetchUserOrders = () => {
  // Implement logic to fetch and display user orders
  console.log('Fetching user orders...');
};

const styles = {
  container: {
    display: 'flex',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '200px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#2c3e50', // Dark grey background color
  },
  sidebar: {
    width: '100%',
    marginRight: '100px',
     
  },
  profile: {
    marginBottom: '20px',
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
    padding: '70px',
    marginBottom: '10px',
    textAlign: 'left',
    backgroundColor: '#34495e', // Black sidebar background color
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  mainContent: {
    flex: '1',
    backgroundColor: '#34495e', // Dark grey main content background color
    padding: '20px',
    borderRadius: '5px',
  },
  userData: {
    marginBottom: '15px',
  },
};

export default UserProfile;
