import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        nome: "O Senhor dos Anéis",
    },
    {
        id: 2,
        nome: "Harry Potter",
    },
    {
        id: 3,
        nome: "As Crônicas de Gelo e Fogo",
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

app.get("/livros/:id", (req, res) => {
    const id = req.params.id;
    const livro = buscaLivro(id);
    if (!livro) {
        res.status(404).send("Livro não encontrado");
    }
    res.status(200).json(livro);
});

app.post("/livros", (req, res) => {
});

app.get("/autores", (req, res) => {
    res.send("Lista de Autores");
});

export default app;