const AppointmentRepository = require("../../infraestructure/repository/appointmentRepository");
const AppointmentDTO = require("../../domain/entities/appointmentDto");
class AppointmentServices {
   
    constructor(appointmentRepository){
        this.appointmentRepository = appointmentRepository || new AppointmentRepository();
    }

    async CreateAppointment(createAppointmentDTO){
        try{
            const appointmentRequestDto = new AppointmentDTO(
            createAppointmentDTO.userId,
            createAppointmentDTO.barberId,
            createAppointmentDTO.barberoId,
            createAppointmentDTO.servicioId,
            createAppointmentDTO.fechaCita,
            createAppointmentDTO.horaCita,
            "Programada"
        );

        return await this.appointmentRepository.createAppointment(appointmentRequestDto);
        }catch(error){
            throw new Error("Error al crear la cita.",error);
        }
       
    }
}

module.exports = AppointmentServices;

