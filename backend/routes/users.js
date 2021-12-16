var express = require('express');
const { createUser } = require('../controllers/users.Controller');
const { body,check } = require('express-validator');
const { expressValidation } = require('../helper/validation.Helper');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/user_registration', [
 body('fname').notEmpty().withMessage("fname is required").isAlpha().withMessage("fname error"),
 //body('mname').notEmpty().withMessage("mname is required").isAlpha().withMessage("mname error"),
 body('lastname').notEmpty().withMessage("lastname is required").isAlpha().withMessage("lastname error"),
 check("password", "...").notEmpty().withMessage("password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage("Password should be combination of one uppercase , one lower case, one special char, one digit and min 8"),
// check('email').notEmpty().withMessage("email is required").isEmail()
 body('email').notEmpty().withMessage("email is required").isEmail().normalizeEmail(),
 body('mobileno').notEmpty().withMessage("email is required").isNumeric().isLength({min:10}).withMessage("mobilenumber should be minimum 10 digit"), 
],expressValidation ,createUser, function(req, res, next) {
  
});

router.post('/login', [
  body('user_name').notEmpty().withMessage('fname should not be null'),
  body('password').notEmpty().withMessage('fname should not be null')

] ,createUser, function(req, res, next) {
  
});


module.exports = router;
