const axios = require('axios');

const testLogin = async () => {
    try {
        console.log("Testing admin login...");
        
        const response = await axios.post('http://localhost:5050/api/user/login', {
            email: 'admin@example.com',
            password: 'admin123'
        });
        
        console.log("Response status:", response.status);
        console.log("Response data:", response.data);
        
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
    }
};

testLogin();