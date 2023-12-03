import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await dbConnect();

conexao.on("error",(erro)=>{
    console.error("Erro de Conexão:",erro);
});

conexao.once("open",()=>{
    console.log("Conexão realizada com Sucesso!")
});

const app = express();
routes(app);

app.get("/livros/:id", (req, res) => {
    const id = req.params.id;
    const livro = buscaLivro(id);
    if (!livro) {
        res.status(404).send("Livro não encontrado");
    }
    res.status(200).json(livro);
});

app.get("/autores", (req, res) => {
    res.send("Lista de Autores");
});

export default app;