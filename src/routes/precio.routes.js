const express = require('express');
const router = express.Router();

const precio = require('../controllers/precio.controller');

router.get('/', precio.getPrecios);
router.post('/', precio.createPrecio);
router.get('/:id', precio.getPrecio);
router.put('/:id', precio.editPrecio);
router.delete('/:id', precio.deletePrecio);

module.exports = router;