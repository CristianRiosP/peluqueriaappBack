const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

/**
 * @openapi
 * /api/v1/auth/Registro:
 *   post:
 *     summary:
 *     description: Crea un nuevo usuario y devuelve un token JWT.
 *     tags: 
 *       - auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente, retorna el token JWT.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Usuario ya existe o error en los datos.
 *       500:
 *         description: Error del servidor.
 */
router.post("/Registro",authController.register);
/**
 *@openapi
 *  /api/v1/auth/Login:
 *   post:
 *     summary: 
 *     description: Inicia sesión y obtiene un token JWT.
 *     tags:
 *       - auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso, retorna el token JWT.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Credenciales incorrectas.
 *       500:
 *         description: Error del servidor.
 */

router.post("/Login",authController.login);


module.exports = router;