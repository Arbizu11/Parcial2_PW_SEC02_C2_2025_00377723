const cuentas = require('../data/cuentas');

exports.getCuentasBalance = (req, res) => {

    const items = cuentas.filter(cuenta => cuenta.isActive === true);
    const finded = true;
    if (items.length === 0)
        finded = false;

    let sum = 0;

    items.forEach(cuenta => {
        const valor = Number(cuenta.balance.replace(/\$|,/g, ''));
        sum += valor;
    });

    res.json({
        status: finded,
        accountBalance: "$ " + sum,
    });
};