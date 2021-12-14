const activeENV = (process.env.NODE_ENV) ? process.env.NODE_ENV : 'development'
console.log("envRuning on", activeENV);

const environmentSetup = require(`./../environment/env.${activeENV}.js`)


exports.credDir = __dirname


exports.dbConnection = environmentSetup.dbConnection;
