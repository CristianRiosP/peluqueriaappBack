class AppointmentDTO {
    constructor(idUsuario,idBarberia,idBarbero,idServicio,fechaCita,horaCita,estado) {
      this.idUsuario = idUsuario;
      this.idServicio = idServicio;
      this.idBarberia = idBarberia;
      this.idBarbero =idBarbero
      this.fechaCita = fechaCita;
      this.horaCita = horaCita;
      this.estado = estado;
    }
  }
  
  module.exports = AppointmentDTO;

