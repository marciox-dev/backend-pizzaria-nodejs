const router = require("express").Router();
const authMiddleware = require ("../middleware/auth.middleware");

const carrinhoController = require("../controller/carrinho.controller");
const { validaCarrinho, validaId, validaProdutosCarrinhoPedido } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/find/:id", authMiddleware, validaId, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, paginacao, carrinhoController.findAllCarrinhosController);

router.post("/create", authMiddleware, validaProdutosCarrinhoPedido, validaCarrinho, carrinhoController.createCarrinhoController);

router.put("/update/:id", authMiddleware, validaId, carrinhoController.updateCarrinhoController);

router.delete("/delete/:id", authMiddleware, validaId, carrinhoController.deleteCarrinhoController);

module.exports = router;