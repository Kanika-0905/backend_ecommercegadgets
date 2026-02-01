const express = require("express");
const router = express.Router();

const {submitContact, getAllContacts, updateContactStatus, deleteContact} = require("./../Controllers/ContactController");

router.get("/contacts", getAllContacts);
router.post("/contacts", submitContact);
router.put("/contacts/:id/status", updateContactStatus);
router.delete("/contacts/:id", deleteContact);


router.get("/test", (req, res) => {
    res.json({ message: "Contact routes working!" });
});

module.exports = router;
