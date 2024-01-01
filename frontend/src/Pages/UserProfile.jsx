import React from 'react';

const UserProfile = () => {
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
          <button style={styles.sidebarButton} > 
           Edit Profile
          </button>
          <button style={styles.sidebarButton} onClick={fetchUserInfo}>
           Logout
          </button>
        </div>
      </div>
      <div style={styles.mainContent}>
        {/* Display user data here */}
        <h2>User Details</h2>
        <div style={styles.userData}>
          <label>Username:</label>
          <input type="text" value="Anuja 111" readOnly style={styles.inputField} />
        </div>
        <div style={styles.userData}>
          <label>Location:</label>
          <input type="text" value="city" readOnly style={styles.inputField} />
          <input type="text" value="country" readOnly style={styles.inputField} />
        </div>
        <div style={styles.userData}>
          <label>Mobile no.:</label>
          <input type="text" value="Anuja 111" readOnly style={styles.inputField} />
        </div>
        <div style={styles.userData}>
          <label>Email:</label>
          <input type="text" value="Anuja 111" readOnly style={styles.inputField} />
        </div>
        {/* Add more user details input boxes acc to table anujaaaa*/}
      </div>
    </div>
  );
};

const fetchUserInfo = () => {
  // Implement logic to fetch and display user info  from db
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