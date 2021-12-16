const env = require("../cred/env");
const { randomAlphaNumeric } = require('../helper/randomGenerator.Helper')


exports.insertUserData = ( newuserdata , res ) => {
var emailexit= `SELECT * FROM users WHERE Email = '${newuserdata.email}' OR Mobile_no = ${newuserdata.mobileno}`;

env.dbConnection.query(emailexit,(err,result) => {
    
if (result.length == 0) {

var userId = randomAlphaNumeric();
var walleteId = randomAlphaNumeric();
var q = `INSERT INTO users(User_id,User_firstname,User_middlename,User_lastname,user_password,Mobile_no,Email,User_type,Date,Status) VALUES ('${userId}','${newuserdata.fname}','${newuserdata.mname}','${newuserdata.lastname}','${newuserdata.password}','${newuserdata.mobileno}','${newuserdata.email}','${newuserdata.usertype}','${newuserdata.date}','${newuserdata.status}')`;
   console.log(q,"userdata==>");
    env.dbConnection.query(q, (err, result) => {
        if (err) {
            console.log("error on insert ==>", err);
        } else {
            console.log("Insert Success ==>",JSON.stringify(result));
            var wallete_query = `INSERT INTO wallete(wallet_id,user_id,virtual_amount,update_time,update_by) VALUES ('${walleteId}','${userId}',0,'${newuserdata.date}','${newuserdata.fname}')`;
            env.dbConnection.query(wallete_query, (err, result) => {
                if (err) {
                    console.log("error on insert ==>", err);
                }
                else{
                    console.log("wallete create successfully===>",JSON.stringify(result));
                }
            })
            res.status(200).json({
                status: 1,
                message:"user created successfully"
            })
            
        }
    })
} else {
    console.log("Email or mobileno already used");
    res.status(400).json({
        "message" : "email id or mobileno allready used"
    })
    
    }
 })

}