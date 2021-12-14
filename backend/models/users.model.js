const { dbConnection } = require("../cred/env");

exports.insertUserData = (userInfo) => {

    console.log("uinfo==>", userInfo);


    return new Promise((resolve, reject) => {
        var query = "INSERT INTO customers (name, address) VALUES ('shyam', 'Highway 37')";
        console.log(query);
        dbConnection.query(query, (err, result) => {
            if (!err) {
                // console.log("sdfghfgdsmbffff");
                // console.log(result);
                resolve({ data: result });
            }
            else {
                console.log("in elseghjk");
                reject({ err: err });
            }
        })
    })
}