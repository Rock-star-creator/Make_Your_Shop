const env = require('../cred/env');
const { querBuilder } = require('../helper/querybuilder.Helper');

exports.getWalletData = (walletId) => {
    var q= `SELECT * FROM ${env.walleteTable} where wallet_id = '${walletId}'`;

    return querBuilder(q);
}