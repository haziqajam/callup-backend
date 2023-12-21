const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const agentSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 },
    name: { type: String, required: true },
    // type: {
    //   type: String,
    //   required: true,
    //   enum: ["Sales", "Customer Service", "Custom Case"],
    //   default: "Sales",
    // },
    voice_id: {
      type: String,
      // required: true,
      // enum: ["male-voice.mp4", "female-voice.mp4"],
      default: "I8LWG3T24PepfiowqlRa",
    },
    prompt: { type: String, required: true },
    sub_prompt: { type: String, required: true },
    greeting: { type: String, default: "Hey Haseeb!" },
    // lastEdited: { type: String },
  },
  { collection: "Agent" }
);

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
