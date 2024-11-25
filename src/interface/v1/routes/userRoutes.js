const express = require('express');
const router = express.Router();
const verificarToken = require('../../../middlewares/auth');

/**
 * @openapi
 * /api/v1/checkToken:
 *   post:
 *     summary: 
 *     description: 
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 
 *     responses:
 *       200:
 *         description: Token válido, se devuelve la información del usuario.
 *       401:
 *         description: Token inválido o expirado.
 *       500:
 *         description: Error interno del servidor.
 */

router.post("/", verificarToken, (req, res) => {
  
  res.json({
    message: 'Acceso autorizado',
    usuario: req.usuario,  // Información del usuario decodificada del token
  });
});

module.exports = router;