const express = require('express');
const router = express.Router();
 const barberiaController = require('../../controllers/barberiaController');
/**
 * @openapi
 * /api/v1/barberias:
 *   get:
 *     tags:   
 *       - barberias
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
 * 
 */
    router.get("/",barberiaController.getAllBarberias);
 /**
 * @openapi
 * /api/v1/barberias:
 *   post:  
 *     tags:
 *       - barberias
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               barberiaId:
 *                 type: string
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
 *                   type: object
 * 
 */
      router.post("/", barberiaController.postBarberiaById);

 



module.exports = router;