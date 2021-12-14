const sqlCred = require("../cred/mysqlCred");


module.exports = {
    dbConnection : sqlCred.dbConnect,
    orderTable : 'order',
    paymentTable : 'payment',
    productsTable : 'products',
    usersTable: 'users',
    walleteTable : 'wallete',
    product_imagesTable : 'product_images'
}