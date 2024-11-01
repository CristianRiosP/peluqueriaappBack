const express = require('express');
const router = express.Router();
 const servicioController = require('../../controllers/servicioController');
/**
 * @openapi
 * /api/v1/appoitment:
 *   get:
 *     tags:
 *       - Appoitment
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
    router.get("/",servicioController.getAllServicios)

    router .get("/:servicioId",servicioController.getServicioById)

     router.post("/:servicioId",servicioController.createServicio)

     router.patch("/:servicioId",servicioController.updateServicio)

     router.delete("/:servicioId",servicioController.deleteServicio);




module.exports = router;