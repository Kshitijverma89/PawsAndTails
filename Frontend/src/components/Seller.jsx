import React, { useState } from 'react';
import axios from 'axios';
import '../components/Seller.css';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    category: '',
    productName: '',
    price: '',
    imageLink: '',
    monthlyStock: '',
    description: {
      breed: '',
      age: '',
      lifeExpectancy: '',
      size: '',
      origination: '',
      color: '',
      behaviour: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDescriptionChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({
      ...prevState,
      description: {
        ...prevState.description,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(productData)
    try {
      await axios.post('http://localhost:8000/product/add', productData);
      alert('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="add-product-heading" style={{ color: '#9673b9' }}>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <label>Category:</label>
        <select name="category" value={productData.category} onChange={handleChange} className="input-field">
          <option value="">Select Category</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Fish">Fish</option>
          <option value="Bird">Bird</option>
        </select>
        <label>Product Name:</label>
        <input type="text" name="productName" value={productData.productName} onChange={handleChange} className="input-field" />
        <label>Price:</label>
        <input type="text" name="price" value={productData.price} onChange={handleChange} className="input-field" />
        <label>Image Link:</label>
        <input type="text" name="imageLink" value={productData.imageLink} onChange={handleChange} className="input-field" />
        <label>Monthly Stock:</label>
        <input type="text" name="monthlyStock" value={productData.monthlyStock} onChange={handleChange} className="input-field" />
        
        <h3>Description</h3>
        <label>Breed:</label>
        <input type="text" name="breed" value={productData.description.breed} onChange={handleDescriptionChange} className="input-field" />
        <label>Age:</label>
        <input type="text" name="age" value={productData.description.age} onChange={handleDescriptionChange} className="input-field" />
        <label>Life Expectancy:</label>
        <input type="text" name="lifeExpectancy" value={productData.description.lifeExpectancy} onChange={handleDescriptionChange} className="input-field" />
        <label>Size:</label>
        <input type="text" name="size" value={productData.description.size} onChange={handleDescriptionChange} className="input-field" />
        <label>Origination:</label>
        <input type="text" name="origination" value={productData.description.origination} onChange={handleDescriptionChange} className="input-field" />
        <label>Color:</label>
        <input type="text" name="color" value={productData.description.color} onChange={handleDescriptionChange} className="input-field" />
        <label>Behaviour:</label>
        <select name="behaviour" value={productData.description.behaviour} onChange={handleDescriptionChange} className="input-field">
          <option value="">Select Behaviour</option>
          <option value="AGGRESSIVE">AGGRESSIVE</option>
          <option value="CALM">CALM</option>
        </select>

        <button type="submit" className="submit-button">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
