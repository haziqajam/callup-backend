const express = require("express");
const router = express.Router();

const campaignController = require("../controllers/Campaign");

router.post("/", campaignController.createCampaign);
router.get("/", campaignController.getAllCampaigns);
router.delete("/:id", campaignController.deleteCampaign);

module.exports = router;
