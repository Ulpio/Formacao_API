import express from "express";
import dbConnect from "./config/dbConnect.js";

const conexao = await dbConnect();

conexao.on("error",(erro)=>{
    console.error("Erro de Conexão:",erro);
});

conexao.once("open",()=>{
    console.log("Conexão realizada com Sucesso!")
});


const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis",
    },
    {
        id: 2,
        titulo: "Harry Potter",
    },
    {
        id: 3,
        titulo: "As Crônicas de Gelo e Fogo",
    },
];

const buscaLivro = (id) => {
    const livro = livros.find((livro) => livro.id == Number(id));
    return livro;
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Express");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
    const livro = req.body;
    livros.push(livro);
    res.status(201).json(livro);
});

app.get("/livros/:id", (req, res) => {
    const id = req.params.id;
    const livro = buscaLivro(id);
    if (!livro) {
        res.status(404).send("Livro não encontrado");
    }
    res.status(200).json(livro);
});

app.put("/livros/:id", (req, res) => {
    const id = req.params.id;
    const livroBody = req.body;
    const livro = buscaLivro(id);
    if (!livro) {
        res.status(404).send("Livro não encontrado");
    }
    livro.titulo = livroBody.titulo;
    res.status(200).json(livro);
});

app.delete("/livros/:id", (req, res) => {
    const id = req.params.id;
    const livro = buscaLivro(id);
    if (!livro) {
        res.status(404).send("Livro não encontrado");
    }
    const index = livros.indexOf(livro);
    livros.splice(index, 1);
    res.status(200).json(livro);
});

app.get("/autores", (req, res) => {
    res.send("Lista de Autores");
});

export default app;