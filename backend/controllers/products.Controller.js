const { insertProductData, getAllProduct, getAllProductByCatagory, updateProduct } = require("../models/products.model")


exports.addProduct = (req, res) => {
console.log("file datas==>", req.file);
    var addProductReq = {
        productName: req.body.productName,
        price: req.body.price,
        category: req.body.category,
        quantity: req.body.quantity,
        brand: req.body.brand,
        model: req.body.model,
        createdBy: req.body.createdBy,
        Img_data: req.file,
        Img_type: req.file.mimetype
    }

    insertProductData(addProductReq).then(addproductResp => {

        res.status(400).json({
            status: 1,
            message: "Product added successfully",
            // data: addproductResp.data
        })

    }).catch(err => {

        console.log("\nerror on add product==>", err);
        res.status(400).json({
            status: 0,
            message: "error on add product",
            error: err
        })
    })


}

exports.getAllProduct = (req, res) => {

    getAllProduct().then(productResp => {

        res.status(400).json({
            status: 1,
            data: productResp.data
        })

    }).catch(err => {

        console.log("\nerror on fetch data==>", err);
        res.status(400).json({
            status: 0,
            message: "error on fetch data",
            error: err
        })
    })


}

exports.getProductByCatagory = (req, res) => {
    var data = []
    var catagory = req.params.catagory;
    getAllProductByCatagory(catagory).then(productResp => {

        res.status(400).json({
            status: 1,
            catagory: catagory,
            data: productResp.data
        })

    }).catch(err => {

        console.log("\nerror on fetch data==>", err);
        res.status(400).json({
            status: 0,
            message: "error on fetch data",
            error: err
        })
    })
}

exports.updateProductById = (req, res) => {

    var updateReq = {
        productName: req.body.productName,
        price: req.body.price,
        category: req.body.category,
        quantity: req.body.quantity,
        brand: req.body.brand,
        model: req.body.model,
        status: req.body.status,
        createdBy: req.body.createdBy
    }
    updateProduct(req.params.id, updateReq)
}


exports.getProductData = (req, res) => {

    getAllProduct(req.params.id).then(productResp => {

        res.status(200).json({
            status: 1,
            data: productResp.data
        })

    }).catch(err => {

        console.log("\nerror on fetch data==>", err);
        res.status(400).json({
            status: 0,
            message: "error on fetch data",
            error: err
        })
    })


}

