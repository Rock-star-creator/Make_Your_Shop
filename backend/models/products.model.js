const env = require("../cred/env");
const { randomAlphaNumeric } = require('../helper/randomGenerator.Helper')
const { dbConnection, productsTable } = require('../cred/env')
const moment = require('moment-timezone');
const { querBuilder } = require("../helper/queryBuilder.Helper");

const currentDate = moment().tz("asia/kolkata").format("YYYY-MM-DD");


exports.insertProductData = (productInfo) => {

    var prodId = randomAlphaNumeric();

    var q = `INSERT INTO ${productsTable} (product_id, price, category, quantity, product_name, status, created_by, created_date, brand, model)
     VALUES ('${prodId}', ${productInfo.price}, '${productInfo.category}', '${productInfo.quantity}','${productInfo.productName}', 1, '${productInfo.createdBy}', '${currentDate}', '${productInfo.brand}', '${productInfo.model}' )`;

    return querBuilder(q);
}

exports.getAllProduct = (prodId) => {

    if (prodId) {
        var q = `SELECT * FROM ${productsTable} WHERE product_id = '${prodId}'`;

    } else {
        var q = `SELECT * FROM ${productsTable}`;

    }


    return querBuilder(q);

}

exports.getAllProductByCatagory = (catagory) => {

    var q = `SELECT * FROM ${productsTable} WHERE category = '${catagory}'`;

    return querBuilder(q);

}

exports.updateProduct = (prodId, updateInfo) => {


    var q = `UPDATE ${productsTable} SET price=${updateInfo.price}, category='${updateInfo.category}',quantity='${updateInfo.quantity}',product_name='${updateInfo.productName}',status='${updateInfo.status}',created_by='${updateInfo.createdBy}',created_date='${currentDate}',brand='${updateInfo.brand}',model='${updateInfo.model}' WHERE product_id = '${prodId}'`

    return querBuilder(q);
}


