const Contact = require("../models/Contact");
const catchAsync = require("./../utils/catchAsync");

exports.createContact = catchAsync(async (req, res, next) => {
  const { name, email, phone, list_name, createdAt } = req.body;

  const createdContact = new Contact({
    name,
    email,
    phone,
    list_name,
    createdAt,
  });
  await createdContact.save();

  res.status(201).json({ createdContact });
});

exports.getAllContacts = catchAsync(async (req, res, next) => {
  const allContacts = await Contact.find({});

  res.json({
    allContacts,
  });
});

exports.updateContact = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const { name, email, phone } = req.body;

  // Find the contact by ID
  const contact = await Contact.findById(id);
  if (!contact) {
    return res.status(404).json({ error: "Contact not found" });
  }
  // Update the contact data
  contact.name = name;
  contact.email = email;
  contact.phone = phone;

  // Save the updated agent
  const updatedContact = await contact.save();

  res.json(updatedContact);
});

exports.deleteContact = catchAsync(async (req, res, next) => {
  const { id } = req.params; // Assuming you're passing the product ID in the request parameters

  // Find the product by ID and delete it
  const deletedContact = await Contact.findByIdAndDelete(id);

  if (!deletedContact) {
    return res.status(404).json({ error: "Contact not found" });
  }

  res.json({ message: "Contact deleted successfully" });
});
