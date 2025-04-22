const express = require ('express');
const router = express.Router();
const indexController = require('../Controllers/indexHTMLController')

///aca van todas las acciones de esta seccion GET POST PUT DELETE
router.get('/', indexController.obtenerCategorias);
module.exports = router;