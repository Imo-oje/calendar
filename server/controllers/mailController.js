const asyncHandler = require("express-async-handler");

exports.mails = asyncHandler(async (req, res) => {
  res.send("EMails");
});
