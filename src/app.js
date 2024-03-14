import express from "express";
import routes from "./src/routes/index.js";
import dbConnect from "./src/config/dbConnect.js";

const app = express();

const conexao = dbConnect();

conexao.on("error", () => console.log("Erro ao conectar no banco de dados"));

conexao.once("open", () => console.log("Conectado no banco de dados"));

routes(app);

export default app;