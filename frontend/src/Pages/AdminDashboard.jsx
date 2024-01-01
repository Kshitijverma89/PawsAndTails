import React, { useState } from 'react';

const AdminDashboard = () => {
  const [productInfo, setProductInfo] = useState({
    productId: 1,
    category: '',
    productName: '',
    price: 0,
    description: {
      Id: 1,
      Breed: '',
      Age: 0,
      lifeExpectancy: 0,
      size: 0,
      origination: '',
      color: '',
      behaviour: '',
      imageLink: '',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleDescriptionChange = (e) => {
    const { name, value } = e.target;
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      description: {
        ...prevInfo.description,
        [name]: value,
      },
    }));
  };

  const handleUploadProduct = () => {
    // Implement logic to upload the product information to the database
    console.log('Uploading product:', productInfo);
    // Add API call or state management as needed
  };

  const handleDeleteProduct = (productId) => {
    // Implement logic to delete the product based on product_id
    console.log(`Deleting product with ID: ${productId}`);
    // Add API call or state management as needed
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.adminActions}>
          <h2>Admin Actions</h2>
          <label>Category:</label>
          <select
            name="category"
            value={productInfo.category}
            onChange={handleInputChange}
            style={styles.inputField}
          >
            <option value="">Select a category</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Fish">Fish</option>
            {/* Add more options as needed */}
          </select>
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={productInfo.productName}
            onChange={handleInputChange}
            style={styles.inputField}
          />
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={productInfo.price}
            onChange={handleInputChange}
            style={styles.inputField}
          />
          <h3>Description:</h3>
          <label>Breed:</label>
          <input
            type="text"
            name="Breed"
            value={productInfo.description.Breed}
            onChange={handleDescriptionChange}
            style={styles.inputField}
          />
          {/* Add more fields for other description properties */}
          {/* ... */}
          <label>Image Link:</label>
          <input
            type="text"
            name="imageLink"
            value={productInfo.description.imageLink}
            onChange={handleDescriptionChange}
            style={styles.inputField}
          />
          <button style={styles.sidebarButton} onClick={handleUploadProduct}>
            Upload Product
          </button>
          <label>Delete Product:</label>
          <input
            type="text"
            placeholder="Enter Product ID"
            style={styles.inputField}
          />
          <button
            style={styles.sidebarButton}
            onClick={() => handleDeleteProduct( /* pass product_id here */ )}
          >
            Delete Product
          </button>
        </div>
      </div>
      <div style={styles.mainContent}>
        {/* Display additional information or product list here */}
        <h2>Product List</h2>
        {/* Add a list of products with delete functionality */}
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
  

export default AdminDashboard;