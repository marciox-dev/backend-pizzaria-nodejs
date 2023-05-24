const pedidoService = require("../service/pedido.service");

const findPedidoByIdController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.findPedidoByIdService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" });
    }
};

const findAllPedidosController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.findAllPedidosService());
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" });
    }
};

const createPedidoController = async (req, res) => {
    try{
        const corpo = {
            ...req.body, 
            userId: req.userId
        }
        res.status(201).send(await pedidoService.createPedidoService(corpo));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" });
    }
};

const deletePedidoController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.deletePedidoService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" });
    }
};

const updateStatusPedidoController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.updateStatusPedidoService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" });
    }
};

module.exports = {
    findPedidoByIdController,
    findAllPedidosController,
    createPedidoController,
    deletePedidoController,
    updateStatusPedidoController
}