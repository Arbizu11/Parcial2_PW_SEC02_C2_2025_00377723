const cuentas = require('../data/cuentas');

exports.getCuentaById = (req, res) => {
    const {id} = req.params;
    const item = cuentas.find(cuenta => cuenta._id == id);

    console.log(item);

    const finded = (item) ? true : false;

    res.json({
        finded: finded, 
        data: item,
    });
};