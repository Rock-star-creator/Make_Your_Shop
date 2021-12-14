const { insertProductData, getAllProduct } = require("../models/products.model")


exports.addProduct = (req, res) => {

    var addProductReq = {
       productName : req.body.productName,
       price : req.body.price,
       category : req.body.category,
       quantity : req.body.quantity,
       createdBy : 'shyam'
    }

    insertProductData(addProductReq)

}

exports.getAllProduct = (req, res) => {

    getAllProduct().then(productResp => {

        res.send(productResp)
    })

   
}