const barberiaServices = require("../../applicarion/services/barberiaServices");

const getAllBarberias = async (req, res) => {
  const response = await barberiaServices.allBarberiasService();
  res.send({status : 200, data: response});
};
const postBarberiaById = async (req, res) => {
  const { barberiaId } = req.body;
  const response = await barberiaServices.ServicesByBarberId(barberiaId);
  res.send({status : 200, data: response});
}


module.exports = {
  getAllBarberias,
  postBarberiaById,
  // createServicio,
  // updateServicio,
  // deleteServicio,
};
