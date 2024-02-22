import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Piechart from '../components/PieChart'; 

const AdminDashboard = () => {
  // State for the data to be displayed in the cards
  const [monthlySales, setMonthlySales] = useState(0);
  const [yearlyProfit, setYearlyProfit] = useState(0);
  const [activeCustomers, setActiveCustomers] = useState(0);
  const [activeSellers, setActiveSellers] = useState(0); // State for active sellers

  // Function to calculate the monthly sales, yearly profit, active customers, and active sellers (replace with actual logic)
  const calculateData = () => {
    // Placeholder logic, replace with actual calculations
    setMonthlySales(5000);
    setYearlyProfit(60000);
    setActiveCustomers(200);
    setActiveSellers(10); // Placeholder value for active sellers
  };

  // Call the calculateData function when the component mounts to populate the card data
  useEffect(() => {
    calculateData();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.profile}>
          <img
            src="admin_profile_image.jpg"
            alt="Admin Profile"
            style={styles.profileImage}
          />
          <p>Admin</p>
        </div>
        <div style={styles.adminActions}>
          <h2>Admin Dashboard</h2>
          <Link to="/UserList" style={styles.sidebarLink}>User List</Link>
          <Link to="/ProductList" style={styles.sidebarLink}>Product List</Link>
          <Link to="/Seller" style={styles.sidebarLink}>Add Product</Link>
          <Link to="/PieChart" style={styles.sidebarLink}>Charts</Link>
        </div>
      </div>
      <div style={styles.mainContent}>
        {/* Monthly Sales Card */}
        <div style={{...styles.card, background: 'linear-gradient(to right, #ff7eb3, #ffc4eb)'}}>
          <h3>Monthly Sales</h3>
          <p>Total Sales: ${monthlySales}</p>
        </div>
        {/* Yearly Profit Card */}
        <div style={{...styles.card, background: 'linear-gradient(to right, #75c3ff, #8de8ff)'}}>
          <h3>Yearly Profit</h3>
          <p>Total Profit: ${yearlyProfit}</p>
        </div>
        {/* Active Customers Card */}
        <div style={{...styles.card, background: 'linear-gradient(to right, #ffff99, #ffdb4d)'}}>
          <h3>Active Customers</h3>
          <p>Total Active Customers: {activeCustomers}</p>
        </div>
        {/* Active Sellers Card */}
        <div style={{...styles.card, background: 'linear-gradient(to right, #8cff8a, #8eff8b)'}}>
          <h3>Active Sellers</h3>
          <p>Total Active Sellers: {activeSellers}</p>
        </div>
        {/* Pie Chart */}
        <div style={styles.pieChart}>
          <Piechart />
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
    background: '#fff', // White color
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  sidebar: {
    width: '20%',
    background: '#9673b9', // Purple color
    borderRadius: '5px',
    padding: '20px',
    boxSizing: 'border-box',
  },
  mainContent: {
    flex: '1',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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
  sidebarLink: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    textAlign: 'left',
    background: '#c7b5e0', // Lavender color
    color: '#fff', // White color
    textDecoration: 'none', // Remove underline from links
    borderRadius: '5px',
    cursor: 'pointer',
  },
  card: {
    width: 'calc(50% - 20px)',
    padding: '20px',
    borderRadius: '10px',
    boxSizing: 'border-box',
    textAlign: 'center',
    marginBottom: '20px',
  },
  pieChart: {
    width: '100%',
    marginTop: '20px',
  },
};

export default AdminDashboard;
