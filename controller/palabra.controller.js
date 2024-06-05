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

// const posNombrenuevo = async (req,res) => {
// const palabraNueva = req.body
// const strings = await service.getStringsCompleto();
// palabraNueva.id = strings[strings.length -1].id +1
// strings.push(palabraNueva)
// res.send(strings);
// } const newItem = ItemService.addItem(name);

const postNombreNuevo = async (req,res) => {
const palabra = req.body
const nueva = await service.postNombreNuevo(palabra)
res.send(nueva);
}

//exporto los metodos
export default {
  getStrings,
  getStringsCompleto,
  postNombreNuevo
};
