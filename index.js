const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database"); //arquivo de conexão com o banco

const usuario = require("./src/router/usuario.router"); //arquivo de rota do usuario
const auth = require("./src/router/auth.router"); //arquivo de rota do auth
const produto = require("./src/router/produto.router"); //arquivo de rota do produto
const categoria = require("./src/router/categoria.router"); //arquivo de rota da categoria
const carrinho = require("./src/router/carrinho.router"); //arquivo de rota do carrinho
const pedido = require("./src/router/pedido.router"); //arquivo de rota do pedido
const docs = require("./src/router/docs.router"); //arquivo de rota do documentação

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); //conectando com o banco

app.use("/usuario", usuario); //chamando as rotas do usuario
app.use("/auth", auth); //chamando as rotas do auth
app.use("/produto", produto); //chamando as rotas do produto
app.use("/categoria", categoria); //chamando as rotas da categoria
app.use("/carrinho", carrinho); //chamando as rotas do carrinho
app.use("/pedido", pedido); //chamando as rotas do pedido
app.use("/docs", docs); //chamando as rotas do docs

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo ao backend da Pizaria"
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})