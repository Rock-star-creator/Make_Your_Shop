const { insertUserData } = require("../models/users.model");
const moment = require("moment-timezone");
var date = moment().tz("asia/kolkata").format("YYYY-MM-DD");

exports.createUser = (req, res) => {
    var bodydata = req.body;
    console.log(bodydata,"bodydata===>");

    var newuserdata = {
        "fname": bodydata.fname,
        "mname": bodydata.mname,
        "lastname": bodydata.lastname,
        "password": bodydata.password,
       "mobileno": bodydata.mobileno,
        "email" : bodydata.email,
        "usertype" : bodydata.usertype,
        "date" : date,
        "status" : 1
 }
 console.log("user created successfully");
    insertUserData(newuserdata).then(success => {
    res.status(200).json({
                status: 1,
                message:"user and wallete created successfully"
            })

    }).catch(err =>{
        res.status(400).json({
        status: 0,
        message:err.err
    })
    
    })
    
}