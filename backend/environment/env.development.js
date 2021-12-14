const sqlCred = require("../cred/mysqlCred");


module.exports = {
    dbConnection : sqlCred.dbConnect,
    orderTable : 'order',
    paymentTable : 'payment',
    productsTable : 'products',
    usersTable: 'users',
    walleteTable : 'wallete'
}