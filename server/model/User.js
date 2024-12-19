const mongoose = require("mongoose");

//Define User schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true }, // User's name
    email: { type: String, required: true, unique: true }, // User's email (must be unique)
    password: { type: String, required: true } // Hashed password
});

//Create User model
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;