import express from "express";
//importo la ruta

 import rt from'./routes/palabra.routes.js'

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// hago el app.use (/api (opcional) ,(el nombre con el que importo la ruta line 3) )

app.use("/api",rt)

app.listen(PORT, () => console.log(`servidor listo en puerto ${PORT}`));
app.on("error", (error) => console.log(`error !!!!!!!!: ${error}`));

