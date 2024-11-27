const barberiaInterfaceRepository = require("../../domain/repositories/baberiaRepository");

const allBarberiasService = async () =>{
    const response = await barberiaInterfaceRepository.getAllBarberia();
    return response;
}

const ServicesByBarberId = async (barberiaId) =>{
  var response;
  await barberiaInterfaceRepository.getBarberiaById(barberiaId).then(servicios=>{
    response = servicios.map(servicio => ({
      id: servicio.id,
      precio: servicio.precio,
      duracion: servicio.duracion,
      activo: servicio.activo,
      created_at: servicio.created_at,
      updated_at: servicio.updated_at,
      fk_barberia_id: servicio.fk_barberia_id,
      fk_servicios_id: servicio.fk_servicios_id,
      barberia: servicio.barberia.nombre, 
      servicio: servicio.servicio.nombre,  
    }));
  });
  return response;
}

module.exports = {
    allBarberiasService,
    ServicesByBarberId
}
