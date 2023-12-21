const express = require("express");
const router = express.Router();

const RecordingController = require("../controllers/Recording");

// router.post("/", RecordingController.createList);
router.get("/", RecordingController.getAllRecordings);

module.exports = router;
