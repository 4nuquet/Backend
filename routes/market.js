var express = require('express');
var router = express.Router();

router.get("/",(req, res, next)=>{
    req.db.query("SELECT * FROM fruit",(err, result)=>{
        if(err)
            res.send({msg: "Error al realizar la Consulta"});
        else
            res.send(result); 
    });

});

module.exports = router;