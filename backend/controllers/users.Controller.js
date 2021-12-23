const { insertUserData,loginData } = require("../models/users.model");
const moment = require("moment-timezone");
var date = moment().tz("asia/kolkata").format("YYYY-MM-DD");
var bcrypt = require('bcrypt');

exports.createUser = async(req, res) => {
    var bodydata = req.body;
    console.log(bodydata,"bodydata===>");
    var reqpassword = bodydata.password;
    const encryptpassword = await bcrypt.hash(reqpassword,10);
    console.log(encryptpassword);

    var newuserdata = {
        "fname": bodydata.fname,
        "mname": bodydata.mname,
        "lastname": bodydata.lastname,
        "password": encryptpassword,
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

exports.login = async(req,res) => {
    var bodydata = req.body;
    var reqpassword = bodydata.password;
    var email = bodydata.email;
    var reqlogindata = {
       "password": bodydata.password,
       "email" : bodydata.email,
        }
    loginData(reqlogindata).then(async(loginresp)=> {
        var dbEmail = loginresp.data[0].Email;
        var dbpassword =loginresp.data[0].user_password;
        const validPass = await bcrypt.compare(reqpassword,dbpassword);
        if (dbEmail == email && validPass == true)
                 {
        res.status(200).json({
            status: 1,
            message: "login successfully",
            })
    }
    else {
        res.status(400).json({
            status: 0,
            message: "Please enter valid email and password",
            error: err
        })
    }
    }).catch(err => {

        console.log("database query error");
        res.status(400).json({
            status: 0,
            message: "database error",
            error: err
        })
    })

}

exports.update_credential = async(req,res) => {

}
