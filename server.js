import http from 'http';

const PORT = 3000;

const rotas = {
    "/":"Curso de Express",
    "/livros":"Lista de Livros",
    "/autores":"Lista de Autores"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});