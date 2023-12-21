const Recording = require("../models/Recording");
const catchAsync = require("./../utils/catchAsync");

exports.getAllRecordings = catchAsync(async (req, res, next) => {
  const allRecordings = await Recording.find({});

  res.json({
    allRecordings,
  });
});
