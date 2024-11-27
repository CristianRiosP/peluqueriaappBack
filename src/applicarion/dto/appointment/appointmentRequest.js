class AppointmentRequestDto {
    constructor(userid,barberid,barberoid,fechaCita,horaCita,servicioid) {
      this.userId = userid;
      this.barberId = barberid;
      this.barberoId =barberoid;
      this.fechaCita = fechaCita;
      this.horaCita = horaCita;
      this.servicioId = servicioid
    }
  }
  
  module.exports = AppointmentRequestDto;


  
