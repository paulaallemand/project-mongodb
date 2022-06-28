const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

require("dotenv-safe").config();

const db = require("./config/mongoConfig");
db.connect();

const routes = require("../src/routes/usersRoutes");
app.use("/users", routes);

module.exports = app;