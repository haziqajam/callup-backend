const xlsx = require("xlsx");
const Contact = require("../models/Contact");
const catchAsync = require("../Utils/catchAsync");

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

exports.uploadContacts = catchAsync(async (req, res, next) => {
  const { list_name } = req.body;

  const uploadedFile = req.files.uploadedFile;

  // Read the uploaded Excel file
  const workbook = xlsx.read(uploadedFile.data);

  // Assuming the first sheet contains the contacts
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Convert the sheet to JSON data
  const contacts = xlsx.utils.sheet_to_json(sheet);

  // Iterating through the contacts array and creating each contact
  for (const contactData of contacts) {
    const { name, email, phone } = contactData;
    const createdContact = new Contact({
      name,
      email,
      phone,
      list_name: list_name,
    });

    await createdContact.save();
  }

  res.status(200).send("Contacts created successfully.");
});
