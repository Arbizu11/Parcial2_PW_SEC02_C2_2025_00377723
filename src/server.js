const express = require('express');
const app = express();
const routesCuentas = require('./routes/Cuentas-routes');
const routesCuenta = require('./routes/Cuenta-routes');
const routesBalance = require('./routes/CuentasBalance-routes');

const PORT = 3130;

app.use(express.json());

app.use('/cuentas', routesCuentas);
app.use('/cuenta', routesCuenta);
app.use('/cuentasBalance', routesBalance);

app.listen(PORT, () => {
    console.log(`API http://localhost:${PORT}`)
});