const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router/routes.js");
require("./db.js");

const app = express();
const port = "8080";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOption = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOption));

app.use("/", router);

const server = app.listen(port, "localhost", () => {
  console.log(`server is running on port ${port}...`);
});
