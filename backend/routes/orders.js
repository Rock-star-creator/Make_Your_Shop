var express = require('express');
const { createOrder, showOrders } = require('../controllers/orders.Controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create_order', createOrder);
router.post('/show_orders', showOrders);

module.exports = router;
