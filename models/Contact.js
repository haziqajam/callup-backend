const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const contactSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    list_name: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "Contact" }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
