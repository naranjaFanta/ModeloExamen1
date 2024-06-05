const strings = [
//   { id: 1, palabra: "Hola", timestamp: 1624450180112 },
//   { id: 2, palabra: "que", timestamp: 1624450189685 },
//   { id: 3, palabra: "tal", timestamp: 1624450195068 },
];

const getStrings = () => {
  let acumulador = "";
  if (strings.length < 0) {
    return "No hay productos en la lista. ";
  } else {
    for (let index = 0; index < strings.length; index++) {
      //   acumulador =acumulador +" "+ strings[index].palabra
      acumulador += strings[index].palabra + " ";
    }
    return acumulador;
  }
};

const getStringsCompleto = () => {
  if (strings.length < 0) {
    return "No hay productos en la lista. ";
  } else {
    return strings;
  }
};

// const posNombrenuevo = async (req,res) => {
// const palabraNueva = req.body
// const strings = await service.getStringsCompleto();
// palabraNueva.id = strings[strings.length -1].id +1
// strings.push(palabraNueva)
// res.send(strings);
// } const newItem = ItemService.addItem(name);

const postNombreNuevo = (palabra) => {
    
    const nuevaPalabra = {
        id: strings.length > 0 ? strings[strings.length - 1].id + 1 : 1,
        palabra: palabra,
        timestamp: Date.now()
    };
    strings.push(nuevaPalabra);
   
    return nuevaPalabra;
};

export default {
  getStrings,
  getStringsCompleto,
  postNombreNuevo
};
