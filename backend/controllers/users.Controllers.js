const { insertUserData } = require("../models/users.model");


exports.createUser = (req, res) => {
console.log(req);
    insertUserData(req);
    console.log("user created successfully");
}