const barberiaInterfaceRepository = require("../../domain/repositories/baberiaInterfaceRepository");

const getAllBarberiasService = async () =>{
    const response = await barberiaInterfaceRepository.getAllBarberia();
    return response;
}

const getBarberiaByIdService = async (barberiaId) =>{
  var response;
  await barberiaInterfaceRepository.getBarberiaById(barberiaId).then(servicios=>{
     // Limpiar la respuesta para que se vea más estructurada
    response = servicios.map(servicio => ({
      id: servicio.id,
      precio: servicio.precio,
      duracion: servicio.duracion,
      activo: servicio.activo,
      created_at: servicio.created_at,
      updated_at: servicio.updated_at,
      fk_barberia_id: servicio.fk_barberia_id,
      fk_servicios_id: servicio.fk_servicios_id,
      barberia: servicio.barberia.nombre,  // Solo el nombre de la barbería
      servicio: servicio.servicio.nombre,  // Solo el nombre del servicio
    }));
  });
  return response;
}

module.exports = {
    getAllBarberiasService,
    getBarberiaByIdService
}
