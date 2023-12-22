const List = require("../models/List");
const catchAsync = require("../utils/catchAsync");

exports.createList = catchAsync(async (req, res, next) => {
  const { name } = req.body;

  const createdList = new List({
    name,
  });
  await createdList.save();

  res.status(201).json({ createdList });
});

exports.getAllLists = catchAsync(async (req, res, next) => {
  const allLists = await List.find({});

  res.json({
    allLists,
  });
});
