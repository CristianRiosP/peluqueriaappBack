const express = require('express');
const router = express.Router();
const AppointmentController = require("../../controllers/appointmentController");
const AppointmentServices = require("../../../applicarion/services/appointmentServices");


const appointmentServices = new AppointmentServices();
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
/**
 * @openapi
 * /api/v1/appointment/barber:
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
 *               Barber_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post("/barber", appointmentController.postAppointmentsBarber.bind(appointmentController));




module.exports = router;