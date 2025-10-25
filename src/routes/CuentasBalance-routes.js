const express = require('express');
const router = express.Router();
const appControllerBalance = require('../controllers/cuentasBalance-controller')

router.get('/', appControllerBalance.getCuentasBalance);


module.exports = router;