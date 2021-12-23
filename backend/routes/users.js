var express = require('express');
const { createUser,login,update_credential } = require('../controllers/users.Controller');
const { body,check } = require('express-validator');
const { expressValidation } = require('../helper/validation.Helper');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/user_registration', [
 body('fname').notEmpty().withMessage("fname is required").isAlpha().withMessage("fname error"),
 body('lastname').notEmpty().withMessage("lastname is required").isAlpha().withMessage("lastname error"),
 check("password", "...").notEmpty().withMessage("password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage("Password should be combination of one uppercase , one lower case, one special char, one digit and min 8"),
 body('email').notEmpty().withMessage("email is required").isEmail().normalizeEmail(),
 body('mobileno').notEmpty().withMessage("email is required").isNumeric().isLength({min:10}).withMessage("mobilenumber should be minimum 10 digit"), 
],expressValidation ,createUser, function(req, res, next) {
  
});

router.post('/login', [
  body('email').notEmpty().withMessage("email is required").isEmail().normalizeEmail(),
  check("password", "...").notEmpty().withMessage("password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage("Password should be combination of one uppercase , one lower case, one special char, one digit and min 8")

],expressValidation,login, function(req, res, next) {
  
});

router.post('/update_password',[
  body('email').notEmpty().withMessage("email is required").isEmail().normalizeEmail(),
  check("password", "...").notEmpty().withMessage("password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage("Password should be combination of one uppercase , one lower case, one special char, one digit and min 8"),
  check("conformpassword", "...").notEmpty().withMessage("password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage("Password should be combination of one uppercase , one lower case, one special char, one digit and min 8")

],expressValidation,update_credential,function(req, res, next) {
  
});


module.exports = router;
