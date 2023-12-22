const Campaign = require("../models/Campaign");
const catchAsync = require("../Utils/catchAsync");

exports.createCampaign = catchAsync(async (req, res, next) => {
  const { campaign_name, agent_id, list_name, max_budget } = req.body;

  const createdCampaign = new Campaign({
    campaign_name,
    agent_id,
    list_name,
    max_budget,
  });
  await createdCampaign.save();

  res.status(201).json({ createdCampaign });
});

exports.getAllCampaigns = catchAsync(async (req, res, next) => {
  const allCampaigns = await Campaign.find({});

  res.json({
    allCampaigns,
  });
});

exports.deleteCampaign = catchAsync(async (req, res, next) => {
  const { id } = req.params; // Assuming you're passing the product ID in the request parameters

  // Find the product by ID and delete it
  const deletedCampaign = await Campaign.findByIdAndDelete(id);

  if (!deletedCampaign) {
    return res.status(404).json({ error: "Campaign not found" });
  }

  res.json({ message: "Campaign deleted successfully" });
});
