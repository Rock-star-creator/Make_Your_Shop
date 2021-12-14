var express = require('express');
const { body } = require('express-validator');
const { expressValidation } = require('../helper/validation.Helper');
const { addProduct, getAllProduct } = require('../controllers/products.Controller');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllProduct, function (req, res, next) {
 
});


router.post('/addProduct', [
  body('productName').notEmpty().withMessage('productName should not be null'),
  body('price').isFloat().withMessage('price should be float').notEmpty().withMessage('price should not be null'),
  body('category').notEmpty().withMessage('category should not be null'),
  body('quantity').isNumeric().withMessage('quantity should be numeric').notEmpty().withMessage('quantity should not be null')
], expressValidation, addProduct, function (req, res, next) {

});

module.exports = router;
