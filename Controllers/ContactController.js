const Contact = require("./../Modals/ContactModals.js");
const mongoose = require("mongoose");

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

const updateContactStatus = async(req, res) => {
    try{
        const {id} = req.params;
        const {status} = req.body;
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                message: "Invalid contact ID format"
            });
        }
        
        const updatedContact = await Contact.findByIdAndUpdate(
            id, 
            {status}, 
            {new: true}
        );
        
        if(!updatedContact){
            return res.status(404).json({
                message: "Contact not found"
            });
        }
        
        res.status(200).json({
            message: "Contact status updated successfully",
            data: updatedContact
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error updating contact status",
            error: error.message
        });
    }
};


const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        
        res.status(200).json({
            message: "Contacts retrieved successfully",
            data: contacts,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving contacts",
            error: error.message,
        });
    }
};



const deleteContact = async(req, res) => {
    try{
        const {id} = req.params;
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                message: "Invalid contact ID format"
            });
        }
        
        const deletedContact = await Contact.findByIdAndDelete(id);
        
        if(!deletedContact){
            return res.status(404).json({
                message: "Contact not found"
            });
        }
        
        res.status(200).json({
            message: "Contact deleted successfully"
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error deleting contact",
            error: error.message
        });
    }
};

module.exports = {
    submitContact,
    getAllContacts,
    updateContactStatus,
    deleteContact,
};

