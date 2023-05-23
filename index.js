const express = require("express");
const connectToDatabase = require("./src/database/database"); //arquivo de conexão com o banco

const usuario = require("./src/router/usuario.router"); //arquivo de rota do usuario
const auth = require("./src/router/auth.router"); //arquivo de rota do auth

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); //conectando com o banco

app.use("/usuario", usuario); //chamando as rotas do usuario
app.use("/auth", auth); //chamando as rotas do auth

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo ao backend da Pizaria"
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})