const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

router.get("/findById/:id", usuarioController.findUserByIdController);
router.get("/findAll", usuarioController.findAllUsersController);

router.post("/create", usuarioController.createUserController);
router.post("/addAddress/:id", usuarioController.addUserAddressController);

router.put("/update/:id", usuarioController.updateUserController);

router.delete("/remove/:id", usuarioController.removeUserController);
router.delete("/removeAddress", usuarioController.removeUserAddressController);

module.exports = router;
