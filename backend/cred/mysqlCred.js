var mysql = require('mysql');

const connection = mysql.createConnection({
    host: "192.168.68.130:8080",
    port: "3306",
    user: "",
    password: "",
    database: "make_your_shop"
});


connection.connect(function (err) {
    if(!err){
        console.log("database conncted");
    }
    else{
        console.log(`not connected because of ${err}`);
    }
});

module.exports = connection;