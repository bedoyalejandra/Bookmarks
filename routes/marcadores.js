const express = require("express");
const router = express.Router();

const { validarMarcador, guardarMarcador, consultarMarcador, eliminarMarcador, editarMarcador } = require("../controllers/marcadores");

/**
 * Obtener todas los marcadores
 */
router.get("/marcadores", (req, res) => {
    consultarMarcador()
    .then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "marcadores consultad0s" });
    })
    .catch(error => {
      res.send(error);
    });
    
});


/**
 * Guarda una marcador
 */
router.post("/", (req, res) => {
  try {
    //Capturar el body desde la solicitud
    let info_marcador = req.body;

    // Valida la información, si hay un error se envia al catch
    validarMarcador(info_marcador);

    // Guardar la persona en base de datos
    guardarMarcador(info_marcador)
      .then(respuestaDB => {
        res.send({ ok: true, mensaje: "Marcador guardado", info: info_marcador });
      })
      .catch(error => {
        res.send(error);
      });

    // Responder
  } catch (error) {
    res.send(error);
  }
  
});

/**
 * Eliminar un marcador
 */
router.delete("/:id", (req, res) => {
    try {
      //Capturar el body desde la solicitud
      let info_marcador = req.params.id;
  
      // Elimina el marcador en base de datos
      eliminarMarcador(info_marcador)
        .then(respuestaDB => {
          res.send({ ok: true, mensaje: "Marcador eliminado", info: info_marcador });
        })
        .catch(error => {
          res.send(error);
        });
  
      // Responder
    } catch (error) {
      res.send(error);
    }
    
  });

  /**
 * Eliminar un marcador
 */
router.put("/", (req, res) => {
    try {
      //Capturar el body desde la solicitud
      let info_marcador = req.body;
  
      // Actualiza el marcador en base de datos
      editarMarcador(info_marcador)
        .then(respuestaDB => {
          res.send({ ok: true, mensaje: "Marcador editado", info: info_marcador });
        })
        .catch(error => {
          res.send(error);
        });
  
      // Responder
    } catch (error) {
      res.send(error);
    }
    
  });

module.exports = router;

