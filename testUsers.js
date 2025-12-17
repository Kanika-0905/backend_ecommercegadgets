const axios = require('axios');

const testUsers = async () => {
    try {
        console.log("Testing users endpoint...");
        
        const response = await axios.get('http://localhost:5050/api/admin/users');
        
        console.log("Response status:", response.status);
        console.log("Response data:", response.data);
        
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        console.error("Status:", error.response?.status);
    }
};

testUsers();