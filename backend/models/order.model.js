const env = require('../cred/env');
const { currentDate } = require('../helper/date.Helper');
const { querBuilder } = require('../helper/queryBuilder.Helper');
const { randomAlphaNumeric } = require('../helper/randomGenerator.Helper')

exports.createOrder = (orderInfo) => {


    var orderId = randomAlphaNumeric();
    var q = `INSERT INTO ${env.orderTable} (order_id, product_id, quantity, price, discount, user_id, address, mobile, email, order_status, pincode, payment_type, date_time)
     VALUES ('${orderId}','${orderInfo.productId}',${orderInfo.quantity},${orderInfo.price},${orderInfo.discount},'${orderInfo.userId}','${orderInfo.address}','${orderInfo.mobile}'
     ,'${orderInfo.email}','${orderInfo.order_status}','${orderInfo.pincode}','${orderInfo.payment_type}','${currentDate()}')`

    return querBuilder(q);
}

exports.getAllOrders = (uid) => {
    var q = `SELECT * FROM ${env.orderTable} WHERE user_id = '${uid}'`;

    return querBuilder(q);
}

