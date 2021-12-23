const { createOrder, getAllOrders } = require('../models/order.model');
const { getAllProduct } = require('../models/products.model');
const userModel = require('../models/users.model');


exports.createOrder = async (req, res) => {

    var userData = req.body.userData;
    var productData = req.body.productData;
    var ordereSuccess = [];
    var ordereFailed = [];

    var userResponse = await userModel.getUserData(userData.userId)

    console.log("\nuser Data==>", JSON.stringify(userResponse.data[0]));


    for (const product of productData) {
        console.log("\nprof id-->", product.productId);
        var prodResp = await getAllProduct(product.productId)

        var userReq = {
            "userId": userData.userId,
            "address": userData.address,
            "mobile": userData.mobile,
            "email": userData.email,
            "pincode": userData.pincode,
            "payment_type": userData.payment_type,
            "productId": product.productId,
            "quantity": product.quantity,
            "price": prodResp.data[0].price * product.quantity,
            "discount": product.discount,
            "order_status": "INITIATED"
        };

        var orderResp = await createOrder(userReq);

        try {
            ordereSuccess.push(
                {
                    "productId": product.productId,
                    "order_status": "INITIATED"
                }
            )
        } catch (error) {
            ordereFailed.push({
                "productId": product.productId,
                "order_status": "FAILED"
            })
        }



    }

    console.log("success data==>", ordereSuccess);

    res.status(200).json({
        status: 1,
        message: "List of orders",
        success: ordereSuccess,
        fails: ordereFailed
    })




}

exports.showOrders = async (req, res) => {

    getAllOrders(req.body.userId).then(orderResp => {

        res.status(200).json({
            status: 1,
            message: "List of orders",
            data: orderResp.data
        })
    }).catch(err => {

        console.log("\nerror on fetch order==>", err);
        res.status(200).json({
            status: 1,
            message: "error on fetch order",
            error: err
        })
    })
}