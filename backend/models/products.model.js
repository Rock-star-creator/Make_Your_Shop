const env = require("../cred/env");
const { randomAlphaNumeric } = require('../helper/randomGenerator.Helper')
const { dbConnection, productsTable } = require('../cred/env')
const moment = require('moment-timezone')

const currentDate = moment().tz("asia/kolkata").format("YYYY-MM-DD");;


exports.insertProductData = (productInfo) => {

    var prodId = randomAlphaNumeric();

    var q = `INSERT INTO ${productsTable} (product_id, price, category, quantity, product_name, status, created_by, created_date)
     VALUES ('${prodId}', ${productInfo.price}, '${productInfo.category}', '${productInfo.quantity}','${productInfo.productName}', 1,' ${productInfo.createdBy}', '${currentDate}' )`;

    return querBuilder(q);
}

exports.getAllProduct = () => {

    var q = `SELECT * FROM ${productsTable}`;

    return querBuilder(q);

}





function querBuilder(qry) {

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