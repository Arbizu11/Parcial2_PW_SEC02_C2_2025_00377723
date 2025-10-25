const express = require('express');
const router = express.Router();
const appControllerCuentas = require('../controllers/cuentas-controller');

router.get('/', appControllerCuentas.getCuentaByQuery);
router.get('/', appControllerCuentas.getCuentas);


module.exports = router;
    