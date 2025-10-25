const cuentas = require('../data/cuentas');

exports.getCuentas = (req, res) => {
    res.json({
        count: cuentas.length,
        data: cuentas,
    });
};  

exports.getCuentaByQuery = (req, res) => {
  const query = req.query.queryParam;
  const isActiveFilter = req.query.isActive;

  let resultados = cuentas;

  if (isActiveFilter !== undefined) {
    resultados = resultados.filter(c => String(c.isActive) === isActiveFilter);
  }

  if (query) {
    resultados = resultados.filter(c =>
      String(c._id) === query || // ID como string
      (c.client && c.client.toLowerCase().includes(query.toLowerCase())) ||
      (c.gender && c.gender.toLowerCase() === query.toLowerCase())
    ); 
  }

  if (resultados.length === 0) {
    res.json({ finded: false });
  } else if (resultados.length === 1) {
    res.json({ finded: true, account: resultados[0] });
  } else {
    res.json({ finded: true, data: resultados });
  }
};



