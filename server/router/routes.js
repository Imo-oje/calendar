const express = require("express");
const router = express.Router();

const { mails, people } = require("../controllers/mailController");

router.get("/mail", mails);
module.exports = router;
