const { dbConnection } = require("../cred/env");


exports.querBuilder = (qry) => {

    console.log("Query==>", qry);

    return new Promise((resolve, reject) => {

        dbConnection.query(qry, (err, result) => {
            if (!err) {
                console.log("Query Executed ==>", JSON.stringify(result));
                resolve({ data: result })
            } else {
                console.log("error on query execution ==>", err);
                reject({ err: err })
            }
        })
    })


}