const Admin = require("./../Modals/AdminModals.js");
const User = require("./../Modals/SignUpwebModals.js");

const adminLogin = async(req, res) => {
    try{
        const{email, password} = req.body;
        
        const admin = await Admin.findOne({email});
        
        if(!admin){
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            });
        }
        
        if(admin.password !== password){
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Admin login successful",
            user: {
                name: admin.username,
                email: admin.email,
                role: admin.role
            }
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Error logging in admin",
            error: error.message
        });
    }
};

const getAllUsers = async(req, res) => {
    try{
        const users = await User.find({}).select('-password -confirmPassword');
        
        res.status(200).json({
            message: "Users retrieved successfully",
            users: users,
            data: users
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error retrieving users",
            error: error.message
        });
    }
};

const updateUserRole = async(req, res) => {
    try{
        const { id } = req.params;
        const { role } = req.body;
        
        const updatedUser = await User.findByIdAndUpdate(
            id, 
            { role }, 
            { new: true }
        ).select('-password -confirmPassword');
        
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.status(200).json({
            message: "User role updated successfully",
            data: updatedUser
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error updating user role",
            error: error.message
        });
    }
};

module.exports = {
    adminLogin,
    getAllUsers,
    updateUserRole,
};