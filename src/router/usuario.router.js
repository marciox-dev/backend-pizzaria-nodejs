const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

//rotas GET
router.get("/findById/:id", usuarioController.findUserByIdController);
router.get("/findAll", usuarioController.findAllUsersController);

//rotas POST    
router.post("/create", usuarioController.createUserController);
router.post("/addAddress/:id", usuarioController.addUserAddressController);

//rotas PUT
router.put("/update/:id", usuarioController.updateUserController);

//rotas DELETE  
router.delete("/remove/:id", usuarioController.removeUserController);
router.delete("/removeAddress", usuarioController.removeUserAddressController);

module.exports = router;