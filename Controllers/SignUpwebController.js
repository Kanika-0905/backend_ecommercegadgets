const User = require("./../Modals/SignUpwebModals.js");
const SignupUserweb = async(req, res) => {
    try{
      const{name, email, phone, password,confirmPassword} = req.body;

        const newUser = new User({
            name,
            email,
            phone,
            password,
            confirmPassword,
        });
        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User Registered Successfully",
            data: savedUser,
        });
    }

    catch(error)
    {
        res.status(500).json({
            message: "Error Registering User",
           error: error.message,
        });
    }
};


const LoginUserweb = async(req, res) => {
    try{
        const{email, password} = req.body;
        
        const user = await User.findOne({email});
        
        if(!user){
            return res.status(404).json({
                message: "User not found"
            });
        }
        
        if(user.password !== password){
            return res.status(401).json({
                message: "Invalid password"
            });
        }
        
        res.status(200).json({
            message: "Login successful",
            data: {
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error logging in",
            error: error.message
        });
    }
};


module.exports = {
 SignupUserweb,
 LoginUserweb,
}
