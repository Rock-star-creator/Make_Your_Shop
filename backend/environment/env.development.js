const sqlCred = require("../cred/mysqlCred");


module.exports = {
    dbConnection : sqlCred.dbConnect
}