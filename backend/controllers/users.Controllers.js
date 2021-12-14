const { insertUserData } = require("../models/users.model");


exports.createUser = (req, res) => {

    insertUserData(req);
    console.log("user created successfully");
}