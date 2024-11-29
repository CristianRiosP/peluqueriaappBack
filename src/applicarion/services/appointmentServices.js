const AppointmentRepository = require("../../domain/repositories/AppointmentInterface");
const AppointmentDTO = require("../../domain/entities/appointmentDto");
const AppointmentListDto = require("../../domain/entities/appointmentListDto");
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
            1
        );

        return await this.appointmentRepository.createAppointment(appointmentRequestDto);
        }catch(error){
            throw new Error("Error al crear la cita.",error);
        }
       
    }
    async AllApponintmentsBarber(BarberId){
        try{
            const appointmentListDto = new AppointmentListDto(
                BarberId,
                1
            )
            const response = await this.appointmentRepository.allListAppointment(appointmentListDto);
            
            return response;

        }catch(error){

            console.error(error)
            throw new Error("Error al obtener citas.",error);

        }

    }
}

module.exports = AppointmentServices;

