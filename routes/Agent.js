const express = require("express");
const router = express.Router();

const agentController = require("../controllers/Agent");

router.post("/", agentController.createAgent);
router.get("/", agentController.getAllAgents);
router.put("/:id", agentController.updateAgent);
router.delete("/:id", agentController.deleteAgent);

module.exports = router;
