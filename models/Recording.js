const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const recordingSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 },
    contact_name: { type: String, required: true },
    campaign_name: { type: String, required: true },
    campaign_id: { type: String, required: true },
    contact_number: { type: String, required: true },
    direction: { type: String, required: true },
    date: { type: String, required: true },
    duration: { type: String, required: true },
    recording: { type: String, required: true },
    call_sid: { type: String, required: true },
  },
  { collection: "CallUpCallRecordings" }
);

const Recording = mongoose.model("Recording", recordingSchema);

module.exports = Recording;
