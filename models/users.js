const mongoose = require("mongoose");

// UserSchema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  }
});

// User Model
const User = mongoose.model("users", UserSchema);

module.exports = User;
