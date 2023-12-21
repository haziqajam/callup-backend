const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const campaignSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 },
    userId: { type: String, default: uuidv4 },
    campaign_name: { type: String, required: true },
    campaign_type: {
      type: String,
      // enum: ["Inbound", "Outbound"],
      default: "Outbound",
    },
    agent_id: { type: String, required: true },
    list_name: { type: String, required: true },
    max_budget: { type: Number, required: true },
  },
  { collection: "Campaign" }
);

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;
