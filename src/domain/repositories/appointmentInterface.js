const SequelizeAppointmentRepository = require("../../infraestructure/repository/appointmentRepository");
const ListAppointmentDto = require("../entities/listAppointmentDto")


class AppointmentInterface {
    constructor(sequelizeAppointmentRepository){
        this.sequelizeAppointmentRepository =sequelizeAppointmentRepository || new SequelizeAppointmentRepository();
    }

    async createAppointment(appointmentRequestDto){
        try {
            return await SequelizeAppointmentRepository.createAppointment(appointmentRequestDto);
        } catch (error) {
            console.log(error)
            throw new Error('Error en Creacion');
        }
    }

    async allListAppointment(appointmentListDto){
        try {
            const response = await this.sequelizeAppointmentRepository.allListAppointment(appointmentListDto);

            const mappedAppointments = response.map((appointment)=>{
               return new ListAppointmentDto(
                appointment.barberias_id,
                appointment.fecha_cita,
                appointment.hora_inicio,
                appointment.hora_fin
               ); 
            });
            return mappedAppointments 
        } catch (error) {
            console.log(error)
            throw new Error('Error en la consulta');
        }
    }
}

module.exports = AppointmentInterface;

