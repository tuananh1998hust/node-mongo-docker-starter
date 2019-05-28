const express = require("express");
const router = express.Router();

// User Model
const User = require("../models/users");

// @route    GET users/
// @desc     Get User Page
// @access   Public
router.get("/", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.render("users/index", { users }));
});

// @route    GET users/create
// @desc     Get Create User Page
// @access   Public
router.get("/create", (req, res) => res.render("users/create"));

// @route    POST users/create
// @desc     Create New User
// @access   Public
router.post("/create", (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.render("users/create", { msg: "Please Fill All The Fields" });
  }

  const newUser = new User({
    name,
    email,
    phone
  });

  newUser.save().then(() => res.redirect("/users"));
});

module.exports = router;
