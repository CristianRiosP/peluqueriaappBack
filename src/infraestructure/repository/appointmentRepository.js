const appointmentInterface = require("../../domain/repositories/appointmentInterface");
const Appointment = require("../models/Cita");


class SequelizeAppointmentRepository extends appointmentInterface {
    constructor(){
        super();
    }

    async createAppointment(appointmentRequestDto){
        try{
            const appointment = await Appointment.create({
                clientes_id: appointmentRequestDto.idUsuario,
                barbero: appointmentRequestDto.idBarbero,
                servicios_id: appointmentRequestDto.idServicio,
                fecha_cita: appointmentRequestDto.fechaCita,
                estado: appointmentRequestDto.estado,
                hora_inicio: appointmentRequestDto.horaCita,
                barberias_id: appointmentRequestDto.idBarberia
            });
            return appointment;
        }catch(error){
            console.error("Error al crear la cita en la base de datos.",error)
            throw new Error("Error al crear la cita en la base de datos.");
        }
        
        
    }

}

module.exports = SequelizeAppointmentRepository;