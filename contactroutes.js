const express = require("express");
const router = express.Router();

const {
  createContact,
  getAllContacts,
  deleteContact
} = require("../controllers/contactcontrollers");   // <-- correct file name

router.post("/", createContact);
router.get("/", getAllContacts);
router.delete("/:id", deleteContact);

module.exports = router;
