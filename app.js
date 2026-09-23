import express from "express"; // se importa express desde la libreria 
import fisicaRoutes from "./routes/fisica.routes.js"; 
import matematicasRoutes from "./routes/matematicas.routes.js";
import cors from "cors";

const app = express (); // se asigna la función express a la constante app
const port = 3000; // se define el puerto por donde se ejecutará la aplicación 

app.use(express.json()); // se inidca que se usará el formato json en express
app.use(cors());

app.use("/fisica", fisicaRoutes);
app.use("/matematicas", matematicasRoutes);

app.listen (port, () => {
    console.log(`La aplicación está corriendo en el puerto ${port}`)
}); // se le dice a la aplicación porque puerto ser escuhado y enviamos un mensaje por consola
