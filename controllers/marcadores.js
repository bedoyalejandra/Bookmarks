
const ServicioPg = require("../services/postgres");


let validarMarcador = marcador => {
  if (!marcador) {
    throw {
      ok: false,
      mensaje: "La información de la persona es obligatoria."
    };
  }

  if (!marcador.url) {
    throw { ok: false, mensaje: "La url es obligatoria." };
  }
  if (!marcador.nombre) {
    throw { ok: false, mensaje: "El nombre es obligatori0." };
  }
};

let guardarMarcador = async marcador => {
  let _servicio = new ServicioPg();
  let sql = `INSERT INTO public.marcadores(
               url, nombre, descripcion, acciones)
              VALUES (
                  '${marcador.url}',
                  '${marcador.nombre}',
                  '${marcador.descripcion}',
                  TRUE);`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarMarcadores = async () => {
  let _servicio = new ServicioPg();
  let sql = `SELECT * FROM marcadores`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarMarcador = async (id) => {
  let _servicio = new ServicioPg();
  let sql = `SELECT * FROM marcadores WHERE id = '${id}'`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let eliminarMarcador = id => {
    let _servicio = new ServicioPg();
    let sql = `DELETE FROM marcadores WHERE id='${id}'`;
    let respuesta =  _servicio.ejecutarSql(sql);
    return respuesta;
};

let editarMarcador = async (marcador, id) => {
    let _servicio = new ServicioPg();
    let sql = `UPDATE marcadores set url = '${marcador.url}',
                 nombre = '${marcador.nombre}',
                 descripcion = '${marcador.descripcion}',
                 acciones = TRUE WHERE id='${id}'`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};
module.exports = { validarMarcador, guardarMarcador, consultarMarcador, consultarMarcadores, eliminarMarcador, editarMarcador };
