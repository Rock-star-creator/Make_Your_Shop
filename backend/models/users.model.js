const env = require("../cred/env");
const { randomAlphaNumeric } = require('../helper/randomGenerator.Helper');
const { querBuilder } = require('../helper/querybuilder.Helper')

exports.insertUserData = (newuserdata) => {
    var emailexit = `SELECT * FROM users WHERE Email = '${newuserdata.email}' OR Mobile_no = ${newuserdata.mobileno}`;
    return new Promise((resolve, reject) => {
        env.dbConnection.query(emailexit, (err, result) => {
            if (result.length == 0) {
                var userId = randomAlphaNumeric();
                var walleteId = randomAlphaNumeric();
                var q = `INSERT INTO users(User_id,User_firstname,User_middlename,User_lastname,user_password,Mobile_no,Email,User_type,Date,Status) VALUES ('${userId}','${newuserdata.fname}','${newuserdata.mname}','${newuserdata.lastname}','${newuserdata.password}','${newuserdata.mobileno}','${newuserdata.email}','${newuserdata.usertype}','${newuserdata.date}','${newuserdata.status}')`;
                env.dbConnection.query(q, (err, result) => {
                    if (err) {
                        console.log("error on insert ==>", err);
                        reject({ err: "user insert error" });
                    } else {
                        console.log("Insert Success ==>", JSON.stringify(result));
                        var wallete_query = `INSERT INTO wallete(wallet_id,user_id,virtual_amount,update_time,update_by) VALUES ('${walleteId}','${userId}',0,'${newuserdata.date}','${newuserdata.fname}')`;
                        env.dbConnection.query(wallete_query, (err, result) => {
                            if (err) {
                                console.log("error on insert ==>", err);
                                reject({ err: "wallete create error" })

                            }
                            else {
                                console.log("wallete create successfully===>", JSON.stringify(result));
                                resolve({ data: result })

                            }
                        })


                    }
                })

            } else {
                console.log("Email or mobileno already used");
                reject({ err: "Email or mobileno already used" })
            }

        })
    })

}


exports.getUserData = (uid) => {
    var q =  `SELECT * FROM ${env.usersTable} WHERE User_id = '${uid}'`;

    return querBuilder(q)
}