var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var datos = {
        tipo: 'ENSAYOS',
        ensayos: [
            { codigo: 1, titulo: 'Startup = Crecimiento', descripcion: 'Evolución de la Startups' },
            { codigo: 2, titulo: 'Todo lo que eres capaz', descripcion: 'manzanas' },
            { codigo: 3, titulo: 'Teniendo en mente la carrera', descripcion: 'naranjas' },
            { codigo: 4, titulo: 'La Universidad te forma', descripcion: 'Trata sobre la calidad educativa' },
            { codigo: 5, titulo: 'Todo lo que eres capaz', descripcion: 'manzanas' },
            { codigo: 6, titulo: 'Teniendo en mente la carrera', descripcion: 'naranjas' },
            { codigo: 7, titulo: 'La Universidad te forma', descripcion: 'Trata sobre la calidad educativa' },
            { codigo: 8, titulo: 'Todo lo que eres capaz', descripcion: 'manzanas' },
            { codigo: 9, titulo: 'Teniendo en mente la carrera', descripcion: 'naranjas' },
            { codigo: 10, titulo: 'La Universidad te forma', descripcion: 'Trata sobre la calidad educativa' },
            { codigo: 11, titulo: 'Todo lo que eres capaz', descripcion: 'manzanas' },
            { codigo: 12, titulo: 'Teniendo en mente la carrera', descripcion: 'naranjas' },
            { codigo: 13, titulo: 'La Universidad te forma', descripcion: 'Trata sobre la calidad educativa' },
            { codigo: 14, titulo: 'Todo lo que eres capaz', descripcion: 'manzanas' },
            { codigo: 15, titulo: 'Teniendo en mente la carrera', descripcion: 'naranjas' },
            { codigo: 16, titulo: 'La Universidad te forma', descripcion: 'Trata sobre la calidad educativa' },
            { codigo: 17, titulo: 'Todo lo que eres capaz', descripcion: 'manzanas' },
            { codigo: 18, titulo: 'Teniendo en mente la carrera', descripcion: 'naranjas' },
        ],
        pieDePagina: { autor: 'John Mendoza', fecha: Date() }
    };

    res.render('investigaciones', datos);
});


module.exports = router;