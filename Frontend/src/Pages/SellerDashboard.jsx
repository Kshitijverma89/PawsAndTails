import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SellerProductSalesChart from '../components/SellerChart';
import Histogram from '../components/Histogram';

const SellerDashboard = () => {
  const [monthlySales, setMonthlySales] = useState(0);
  const [mostSoldProduct, setMostSoldProduct] = useState('');
  
  const calculateData = () => {
    // Placeholder data calculation
    setMonthlySales(5000);
    setMostSoldProduct('Product X');
  };

  useEffect(() => {
    calculateData();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.profile}>
          <img
            src="seller_profile_image.jpg"
            alt="Seller Profile"
            style={styles.profileImage}
          />
          <p>Seller A</p>
        </div>
        <div style={styles.sidebarActions}>
          <h2>Seller Dashboard</h2>
          <br/>
          <br/>
          <br/>
          <br/>
          <Link to="/seller/info" style={styles.sidebarLink}>Seller Information</Link>
          <Link to="/Seller" style={styles.sidebarLink}>Add Product</Link>
          <Link to="/SellerChart" style={styles.sidebarLink}>Charts</Link>
        </div>
      </div>
      <div style={styles.mainContent}>
        <div style={{ ...styles.card, width: '45%', background: 'linear-gradient(to right, #ffe845, #ffd700)' }}>
          <h3>Monthly Sales</h3>
          <p>Total Sales: ${monthlySales}</p>
        </div>
        <div style={{ ...styles.card, width: '45%', background: 'linear-gradient(to right, #8eff8b, #8cff8a)' }}>
          <h3>Most Sold Product</h3>
          <p>{mostSoldProduct}</p>
        </div>
        <div style={{ width: '100%' }}>
          <SellerProductSalesChart />
        </div>
         <div style={{ width: '50%' }}>
            <Histogram />
          </div> 
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  sidebar: {
    width: '20%',
    background: '#b0eef5', // Change background color to a green shade
    borderRadius: '5px',
    padding: '20px',
    boxSizing: 'border-box',
  },
  mainContent: {
    flex: '1',
    display: 'flex',
    flexDirection: 'row', // Changed flex direction to row
    alignItems: 'flex-start',
    justifyContent: 'space-between', // Added space-between to distribute items evenly
    flexWrap: 'wrap', // Added wrap to wrap items to the next line if needed
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
  sidebarActions: {
    marginBottom: '20px',
  },
  sidebarLink: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    textAlign: 'left',
    background: '#35a8e6',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  card: {
    // width: '100%', // Removed width
    flex: '0 0 auto', // Prevent card from growing
    minWidth: '45%', // Set minimum width for card
    padding: '20px',
    borderRadius: '10px',
    boxSizing: 'border-box',
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default SellerDashboard;
