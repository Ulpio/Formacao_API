import app from "./src/app.js";
// mongodb+srv://admin:<password>@cluster0.foopjvu.mongodb.net/?retryWrites=true&w=majority

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});