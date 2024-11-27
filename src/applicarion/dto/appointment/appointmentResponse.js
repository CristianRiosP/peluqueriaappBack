class AppointmentResponseDto {
    constructor(userid,barberid,fechaCita,horaCita,servicioid,estado_cita) {
      this.usuario = userid;
      this.barbero = barberid;
      this.fecha_Cita = fechaCita;
      this.hora_Cita = horaCita;
      this.servicio = servicioid;
      this.estado_cita = estado_cita
    }
  }

  module.exports = AppointmentResponseDto;
