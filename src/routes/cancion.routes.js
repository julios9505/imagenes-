const express = require('express');
const router = express.Router();

const cancion = require('../controllers/cancion.controller');

router.get('/', cancion.getCanciones);
router.post('/', cancion.createCancion);
router.get('/:id', cancion.getCancion);
router.put('/:id', cancion.editCancion);
router.delete('/:id', cancion.deleteCancion);

module.exports = router;