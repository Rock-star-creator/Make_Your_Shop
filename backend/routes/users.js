var express = require('express');
const { createUser } = require('../controllers/users.Controllers');
const { body } = require('express-validator');
const { expressValidation } = require('../helper/validation.Helper');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/create_user', [
  body('fname').notEmpty().withMessage('fname should not be null')
] ,createUser, function(req, res, next) {
  
});

module.exports = router;
