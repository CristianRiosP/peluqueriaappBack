const Appointment = require("../models/Cita");
const { Sequelize, Op } = require('sequelize');
const AppointmentInterface = require("../../domain/repositories/AppointmentInterface");


class SequelizeAppointmentRepository {
    constructor(){
        
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
    async allListAppointment(appointmentListDto){
        try {
            const listAppointment = await Appointment.findAll({
                where:{
                    barberias_id:{
                        [Sequelize.Op.eq]: appointmentListDto.idBarberia                 
                    },
                    estado:{
                        [Sequelize.Op.eq]: appointmentListDto.estado
                    }

                }
            })
            return listAppointment;
        } catch (error) {
            console.error("Error al obtener las citas en la base de datos.",error);
            throw new Error("Error al obtener las citas en la base de datos");
        }
    }

}

module.exports = SequelizeAppointmentRepository;