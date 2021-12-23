const moment = require('moment-timezone');

exports.currentDate = () => {
    var currentDate = moment().tz("asia/kolkata").format("YYYY-MM-DD");

    return currentDate;

}