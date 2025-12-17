const Contact = require("./../Modals/ContactModals.js");

const submitContact = async(req, res) => {
    try{
        const{name, email, query} = req.body;

        const newContact = new Contact({
            name,
            email,
            query,
        });
        const savedContact = await newContact.save();

        res.status(201).json({
            message: "Message sent successfully",
            data: savedContact,
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error sending message",
            error: error.message,
        });
    }
};

module.exports = {
    submitContact,
};