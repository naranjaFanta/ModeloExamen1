import model from "../model/palabra.model.js";

const getStrings = async () => {
  const strings = await model.getStrings();
  return strings;
};

const getStringsCompleto = async () => {
  const strings = await model.getStringsCompleto();
  return strings;
};

const postNombreNuevo = async (palabra) => {
  const nueva = await model.postNombreNuevo(palabra.palabra)
  return nueva
  }
export default {
    getStrings,
    getStringsCompleto,
    postNombreNuevo
};
