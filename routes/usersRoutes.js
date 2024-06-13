const express = require('express');
const router = express.Router();
const { connection1, connection2 } = require('../db/db.js');

// Obtiene una lista de usuario..
router.get("/list", (request, response) => {
    const sql = 'SELECT * FROM ' + process.env.DATABASE + '.' + process.env.TABLE;
    connection1.query(sql, (err, result) => {
        if (err) throw err;
        response.send(result);        
    });
});

router.get("/listado", (request, response) => {
    const sql = 'SELECT * FROM ' + process.env.REMOTE_DATABASE + '.' + process.env.REMOTE_TABLE;
    connection2.query(sql, (err, result) => {
        if (err) throw err;
        response.send(result);        
    });
});

module.exports = router;