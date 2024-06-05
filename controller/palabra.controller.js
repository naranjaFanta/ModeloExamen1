// //importo el servicio
import service from "../services/palabra.services.js";

//resuelvo los metodos
const getStrings = async (req, res) => {
  const strings = await service.getStrings();
  res.send(strings);
};

const getStringsCompleto = async (req, res) => {
  const strings = await service.getStringsCompleto();
  res.send(strings);
};

const postNombreNuevo = async (req, res) => {
  const palabra = req.body;
  const nueva = await service.postNombreNuevo(palabra);
  res.send(nueva);
};

//exporto los metodos
export default {
  getStrings,
  getStringsCompleto,
  postNombreNuevo,
};
