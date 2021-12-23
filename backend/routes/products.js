var express = require('express');
const { body, param } = require('express-validator');
const { expressValidation } = require('../helper/validation.Helper');
const { addProduct, getAllProduct, getProductByCatagory, updateProductById, getProductData } = require('../controllers/products.Controller');

var router = express.Router();

const multer = require('multer');

const upload = multer({ dest: 'public/productImages' }).single('upload_file')

/* GET users listing. */



router.post('/addProduct', upload, addProduct);

router.get('/', getAllProduct);

router.get('/:id', getProductData);

router.get('/getProductByCatagory/:catagory', getProductByCatagory);

router.post('/updateProduct/:id', updateProductById);


module.exports = router;
