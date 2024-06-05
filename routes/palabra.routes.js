// //importar express
import express from "express";
import controller from "../controller/palabra.controller.js";

//creo una constante y hagho exp.Routes
const route = express.Router();
//declaro la ruta a usar y paso controlador
route.get("/strings", controller.getStrings);
route.get("/strings/Completo", controller.getStringsCompleto);
route.post("/strings", controller.postNombreNuevo);

export default route;
