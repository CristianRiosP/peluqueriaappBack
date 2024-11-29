class ListAppointmentDto {
    constructor(id_Barberia,Fecha_Cita,Hora_inicio,Hora_fin) {
      this.idBarberia = id_Barberia;
      this.Fecha_Cita = Fecha_Cita;
      this.HoraIni= Hora_inicio;
      this.Horafin= Hora_fin;
    }
  }
  
  module.exports = ListAppointmentDto;