const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// DB Config
const { mongoURI } = require("./config/keys.js");
// Routes
const users = require("./routes/users");

const app = express();

// Set View Engine
app.set("view engine", "pug");
app.set("views", "./views");
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Connect MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB is connected..."))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello Docker");
});

// Use Routes
app.use("/users", users);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
