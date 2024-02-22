import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './EditProfile.css';
import { useNavigate } from 'react-router-dom';


const UserProfile = () => {
    const [updatedUser, setUpdatedUser] = useState(null); // Initialize as null
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [updateMessage, setUpdateMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('token'));
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                const response = await axios.get('http://localhost:8000/user/current', config);
                setUserData(response.data);
                setUpdatedUser(response.data); // Populate updatedUser with userData
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);
    

    const updateUser = async () => {
        try {
            const token = JSON.parse(localStorage.getItem('token'));
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            await axios.put('http://localhost:8000/user/current', updatedUser, config);
            console.log('User data updated successfully!');
            navigate('/UserProfile');
            // setUpdateMessage('User data updated successfully!');
            // setTimeout(() => {
            //     setUpdateMessage('');
            //     navigate('/UserProfile');
            // }, 3000);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    

    return (
        <div className="form-container">
            <h2>Update User Details</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {userData && (
                <div>
                    <div>
                        <label>First Name:</label>
                        <input type="text" value={updatedUser.firstName || ''} name="firstName" onChange={handleInputChange} />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" value={updatedUser.lastName || ''} name="lastName" onChange={handleInputChange} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={updatedUser.email || ''} name="email" onChange={handleInputChange} />
                    </div>
                    <div>
                        <label>Mobile No.:</label>
                        <input type="text" value={updatedUser.mobileNo || ''} name="mobileNo" onChange={handleInputChange} />
                    </div>
                    <button onClick={updateUser}>Update User</button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;


