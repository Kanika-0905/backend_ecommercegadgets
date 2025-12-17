const User = require("./../Modals/SignUpwebModals.js");
const Admin = require("./../Modals/AdminModals.js");
const SignupUserweb = async(req, res) => {
    try{
      const{name, email, phone, password, confirmPassword, role} = req.body;

        const newUser = new User({
            name,
            email,
            phone,
            password,
            confirmPassword: confirmPassword || password,
            role: role || 'customer'
        });
        const savedUser = await newUser.save();

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            user: savedUser,
            data: savedUser,
        });
    }

    catch(error)
    {
        res.status(500).json({
            success: false,
            message: "Error Registering User",
           error: error.message,
        });
    }
};


const LoginUserweb = async(req, res) => {
    try{
        const{email, password} = req.body;
        
        // Check if it's an admin first
        const admin = await Admin.findOne({email});
        if(admin && admin.password === password){
            return res.status(200).json({
                success: true,
                message: "Login successful",
                user: {
                    name: admin.username,
                    email: admin.email,
                    role: admin.role
                }
            });
        }
        
        // Check regular user
        const user = await User.findOne({email});
        
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        if(user.password !== password){
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role || 'customer'
            }
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Error logging in",
            error: error.message
        });
    }
};


const getAllUsers = async(req, res) => {
    try{
        const users = await User.find({});
        
        res.status(200).json({
            message: "Users retrieved successfully",
            users: users
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error retrieving users",
            error: error.message
        });
    }
};

const updateUser = async(req, res) => {
    try{
        const {id} = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});
        
        if(!updatedUser){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser,
            data: updatedUser
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Error updating user",
            error: error.message
        });
    }
};

const deleteUser = async(req, res) => {
    try{
        const {id} = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        
        if(!deletedUser){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Error deleting user",
            error: error.message
        });
    }
};

module.exports = {
 SignupUserweb,
 LoginUserweb,
 getAllUsers,
 updateUser,
 deleteUser,
}
