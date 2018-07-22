var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var datos = {
        tipoGeneral: 'Libros recomendados',
        librosGeneral: [
            { codigo: 1, titulo: 'La vida es bella', restriccion: 'Descargar', img: 'images/portadaLibros/libro1.jpeg', src: 'https://drive.google.com/file/d/1WVLQJUczn0Yl5veVQBbN-5FnE7UU9CpV/view?usp=sharing' },
            { codigo: 2, titulo: 'Emprender para ganar', restriccion: 'Descargar', img: 'images/portadaLibros/libro2.jpg', src: 'https://drive.google.com/file/d/1WVLQJUczn0Yl5veVQBbN-5FnE7UU9CpV/view?usp=sharing' },
            { codigo: 3, titulo: 'Emprender para ganar', restriccion: 'Descargar', img: 'images/portadaLibros/libro2.jpg', src: 'https://drive.google.com/file/d/1WVLQJUczn0Yl5veVQBbN-5FnE7UU9CpV/view?usp=sharing' },
            { codigo: 4, titulo: 'Desarrollo tecnológico', restriccion: 'Descargar', img: 'images/portadaLibros/libro3.jpg', src: 'https://drive.google.com/file/d/1WVLQJUczn0Yl5veVQBbN-5FnE7UU9CpV/view?usp=sharing' },
            { codigo: 5, titulo: 'Desarrollo tecnológico', restriccion: 'Descargar', img: 'images/portadaLibros/libro3.jpg', src: 'https://drive.google.com/file/d/1WVLQJUczn0Yl5veVQBbN-5FnE7UU9CpV/view?usp=sharing' },
            { codigo: 6, titulo: 'La vida es bella', restriccion: 'Descargar', img: 'images/portadaLibros/libro1.jpeg', src: 'https://drive.google.com/file/d/1WVLQJUczn0Yl5veVQBbN-5FnE7UU9CpV/view?usp=sharing' },

        ],
        tipoEmprendimiento: 'Libros de emprendimiento',
        librosEmprendimiento: [
            { codigo: 1, titulo: 'Como Ganar Amigos', restriccion: 'Descargar', img: 'images/portadaLibros/libro1.jpeg', src: 'https://drive.google.com/file/d/1WVLQJUczn0Yl5veVQBbN-5FnE7UU9CpV/view?usp=sharing' },
            { codigo: 2, titulo: 'Elon Musk', restriccion: 'Descargar', img: 'images/portadaLibros/libro2.jpg', src: 'https://drive.google.com/file/d/1WVLQJUczn0Yl5veVQBbN-5FnE7UU9CpV/view?usp=sharing' },
            { codigo: 3, titulo: 'De Cero a Uni', restriccion: 'Descargar', img: 'images/portadaLibros/libro2.jpg', src: 'https://drive.google.com/file/d/1WVLQJUczn0Yl5veVQBbN-5FnE7UU9CpV/view?usp=sharing' },
            { codigo: 4, titulo: 'Quién se ha llevado mi queso', restriccion: 'Descargar', img: 'images/portadaLibros/libro3.jpg', src: 'https://drive.google.com/file/d/1WVLQJUczn0Yl5veVQBbN-5FnE7UU9CpV/view?usp=sharing' },
            { codigo: 5, titulo: 'La vaca purpura', restriccion: 'Descargar', img: 'images/portadaLibros/libro3.jpg', src: 'https://drive.google.com/file/d/1WVLQJUczn0Yl5veVQBbN-5FnE7UU9CpV/view?usp=sharing' },
            { codigo: 6, titulo: 'Emprende como un genio', restriccion: 'Descargar', img: 'images/portadaLibros/libro1.jpeg', src: 'https://drive.google.com/file/d/1WVLQJUczn0Yl5veVQBbN-5FnE7UU9CpV/view?usp=sharing' },

        ],
        pieDePagina: { autor: 'John Mendoza', fecha: Date() }
    };

    res.render('libros', datos);
});


module.exports = router;