const mysql = require('mysql2');

require('dotenv').config();

const connection1 = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
});

connection1.connect( (err) =>{
    if(err) {
        console.error("Error en la conexion a la DB", err);
        return;
    }

    console.log("Conectado a la base datos Nº1: " + process.env.HOST);
});

const connection2 = mysql.createConnection({
    host: process.env.REMOTE_HOST,
    user: process.env.REMOTE_USERNAME,
    password: process.env.REMOTE_PASSWORD,
    database: process.env.REMOTE_DATABASE,
    port: process.env.REMOTE_PORT
});

connection2.connect( (err) =>{
    if(err) {
        console.error("Error en la conexion a la DB 2..." + process.env.REMOTE_HOST + "/" + process.env.REMOTE_USER + "/"+ process.env.REMOTE_PASSWORD + "/"+ process.env.REMOTE_DATABASE + "/"+ process.env.REMOTE_PORT + "/", err);
        return;
    }

    console.log("Conectado a la base datos Nº2: " + process.env.REMOTE_HOST);
});

module.exports = { connection1, connection2 };