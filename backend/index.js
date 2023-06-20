const express = require("express");
const crypto = require("crypto");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", require("./src/controllers/route"));

module.exports = app;
