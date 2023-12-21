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
      required: true,
      enum: ["vK3QzyncmoX3zNal2Nji", "gUzcionDlcxCd0Zlkz3f"],
      default: "vK3QzyncmoX3zNal2Nji",
    },
    prompt: { type: String, required: true },
    sub_prompt: { type: String, required: true },
    greeting: { type: String, default: "Hey Haseeb!" },
  },
  { collection: "Agent" }
);

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
