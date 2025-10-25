const express = require('express');
const router = express.Router();
const appControllerCuenta = require('../controllers/cuenta-controller');

router.get('/:id', appControllerCuenta.getCuentaById);

module.exports = router;
