var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    var datos = {
        titulo: 'Cuándo no tomar decisiones',
        pieDePagina: { autor: 'John Mendoza', fecha: Date() }
    }

    res.render('viewEnsayos/codigo2', datos);
});


module.exports = router;