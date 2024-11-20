const barberiaServices = require("../../applicarion/services/barberiaServices");

const getAllBarberias = async (req, res) => {
  const response = await barberiaServices.getAllBarberiasService();
  res.send({status : 200, data: response});
};
const postBarberiaById = async (req, res) => {
  const { barberiaId } = req.body;
  const response = await barberiaServices.getBarberiaByIdService(barberiaId);
  res.send({status : 200, data: response});
}


module.exports = {
  getAllBarberias,
  postBarberiaById,
  // createServicio,
  // updateServicio,
  // deleteServicio,
};
