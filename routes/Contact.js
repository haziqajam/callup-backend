const express = require("express");
const router = express.Router();

const contactController = require("../controllers/Contact");

router.post("/", contactController.createContact);
router.get("/", contactController.getAllContacts);
router.put("/:id", contactController.updateContact);
router.delete("/:id", contactController.deleteContact);

module.exports = router;
