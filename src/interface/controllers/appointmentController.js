const AppointmentServices = require("../../applicarion/services/appointmentServices");
const CreateAppointmentDTO = require("../../applicarion/dto/appointment/appointmentRequest");

class AppointmentController {
  constructor(appointmentServices) {
    this.appointmentServices = appointmentServices || new AppointmentServices();
  }

  async postCreateAppointment(req, res) {
    const { User_id, Barber_id, Fecha_cita, Hora_cita, Servicio_id } = req.body;
    const createAppointmentDTO = new CreateAppointmentDTO(
      User_id,     
      Barber_id,
      "0",
      Fecha_cita,
      Hora_cita,
      Servicio_id
    );

    await this.appointmentServices
      .CreateAppointment(createAppointmentDTO)
      .then((response) => {
        res.status(201).json({
          status: "success",
          message: "Su cita ha sido creada correctamente",
          data: response,
        });
      })
      .catch((error) => {
        console.error("Error al crear la cita:", error);
        return res.status(500).json({
          status: "error",
          message:
            "Ha ocurrido un error al crear la cita. Por favor, intente nuevamente más tarde.",
          error: error.message || error,
        });
      });
  }
  async postAppointmentsBarber(req, res) {
    const { Barber_id } = req.body;
  
    try {
      const response = await this.appointmentServices.AllApponintmentsBarber(Barber_id);
  
      if (response && response.length === 0) {
        // Si la respuesta está vacía
        return res.status(200).json({
          status: "empty",
          message: "No se encontraron citas para este barbero.",
          data: [],
        });
      }
  
      // Si hay citas
      return res.status(200).json({
        status: "success",
        message: "El listado de citas se ha generado correctamente",
        data: response,
      });
    } catch (error) {
      console.error("Error al obtener las citas:", error);
      return res.status(500).json({
        status: "error",
        message:
          "Ha ocurrido un error al obtener las citas. Por favor, intente nuevamente más tarde.",
        error: error.message || error,
      });
    }
  }
}

module.exports = AppointmentController;
