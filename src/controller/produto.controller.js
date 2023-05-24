const produtoService = require("../service/produto.service");

const findProductByIdController = async (req, res) => {
    try{
        res.send(await produtoService.findProductByIdService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" });
    }

};

const findAllProductsController = async (req, res) => {
    try{
        res.send(await produtoService.findAllProductsService());
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" });
    }
};

const createProductController = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId
        }

        res.send(await produtoService.createProductService(corpo));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" });
    }
};

const updateProductController = async (req, res) => {
    try{
        res.send(await produtoService.updateProductService(req.params.id, req.body));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" });
    }
};

const deleteProductController = async (req, res) => {
    try{
        res.send(await produtoService.deleteProductService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" });
    }
};

const addCategoriaProdutoController = async (req, res) => {
    try{
        const categoria = await produtoService.addCategoriaProdutoService(req.params.id, req.body);
        res.status(200).send(categoria);
        }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" });
    }
}

const removeCategoriaProdutoController = async (req, res) => {
    try{
        const categoria = await produtoService.removeCategoriaProdutoService(req.params.id, req.body);
        res.status(200).send(categoria);
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" });
    }
}

module.exports = {
    findProductByIdController,
    findAllProductsController,
    createProductController,
    updateProductController,
    deleteProductController,
    addCategoriaProdutoController,
    removeCategoriaProdutoController
}