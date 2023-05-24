const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    sabor: { type: String, unique: true, required: true },
    tamanho: { type: String, required: true },
    precoUnit: { type: Number, required: true },
    imagem: { type: String, required: true },
    referencia: { type: Number, required: true, unique: true },
    categoria: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "categorias" },
            createdAt: { type: Date, required: true }
        },
    ],
});

const Produto = mongoose.model("produtos", ProdutoSchema);

module.exports = Produto;