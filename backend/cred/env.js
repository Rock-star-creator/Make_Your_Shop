const activeENV = (process.env.NODE_ENV) ? process.env.NODE_ENV : 'development'
console.log("envRuning on", activeENV);

const environmentSetup = require(`./../environment/env.${activeENV}.js`)


exports.credDir = __dirname


exports.dbConnection = environmentSetup.dbConnection;

exports.orderTable = environmentSetup.orderTable;
exports.paymentTable = environmentSetup.paymentTable;
exports.productsTable = environmentSetup.productsTable;
exports.usersTable = environmentSetup.usersTable;
exports.walleteTable = environmentSetup.walleteTable;
exports.product_imagesTable = environmentSetup.product_imagesTable;

