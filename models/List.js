const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const listSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 },
    name: {
      type: String,
      required: [true, "List Name is Required"],
      unique: true,
    },
  },
  { collection: "List" }
);

const List = mongoose.model("List", listSchema);

module.exports = List;
