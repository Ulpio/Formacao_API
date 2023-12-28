import express from 'express';
import AutorController from '../controllers/autorController.js';

const routes = express.Router();

routes.get("/autores", AutorController.listarAutor);
routes.post("/autores", AutorController.cadastraAutor);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.deletarAutor);

export default routes;