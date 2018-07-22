var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    var datos = {
        titulo: 'Startup = Crecimiento',
        pieDePagina: { autor: 'John Mendoza', fecha: Date() }
    }

    res.render('viewEnsayos/codigo11', datos);
});


module.exports = router;