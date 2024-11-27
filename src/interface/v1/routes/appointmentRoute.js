const express = require('express');
const router = express.Router();
const AppointmentController = require("../../controllers/appointmentController");
const AppointmentServices = require("../../../applicarion/services/appointmentServices");


// Instancia el servicio
const appointmentServices = new AppointmentServices();

// Pasa la instancia del servicio al controlador
const appointmentController = new AppointmentController(appointmentServices);



/**
 * @openapi
 * /api/v1/appointment:
 *   post:  
 *     tags:
 *       - appointment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               User_id:
 *                 type: string
 *               Barber_id:
 *                 type: string
 *               Fecha_cita:
 *                 type: string
 *               Hora_cita:
 *                 type: string
 *               Servicio_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post("/", appointmentController.postCreateAppointment.bind(appointmentController));



module.exports = router;