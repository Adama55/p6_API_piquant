const express = require("express");
const app = express();

const sauceRoutes = require("./routes/sauces")

app.use(express.json());
app.use("/", sauceRoutes)

module.exports = app;