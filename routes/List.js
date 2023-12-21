const express = require("express");
const router = express.Router();

const ListController = require("../controllers/List");

router.post("/", ListController.createList);
router.get("/", ListController.getAllLists);

module.exports = router;
