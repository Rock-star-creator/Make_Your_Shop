const env = require("../cred/env");



exports.insertUserData = (userInfo) => {


    var q = "INSERT INTO customers (name, address) VALUES ('@333', 'Highway 37dfgh')";
   
    env.dbConnection.query(q, (err, result) => {
        if (err) {
            console.log("error on insert ==>", err);
        } else {
            console.log("Insert Success ==>",JSON.stringify(result));
        }
    })


}