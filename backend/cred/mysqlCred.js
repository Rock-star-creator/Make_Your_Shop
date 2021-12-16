var mysql = require('mysql');

const connection = {
    host: "192.168.1.127",
    port: "3306",
    user: "mys",
    password: "",
    database: "make_your_shop"
}




// connection.connect(function (err) {
//     if (!err) {
//         console.log("database conncted");
//     }
//     else {
//         console.log(`not connected because of ${err}`);
//     }
// });



exports.dbConnect= mysql.createConnection(connection);