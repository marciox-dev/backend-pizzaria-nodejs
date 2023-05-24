const validaUsuario = (req, res, next) => {
    if (!req.body.nome) {

        return res.status(400).send({ message: `O campo NOME precisa ser preenchido!` });
    }
    if (!req.body.email) {

        return res.status(400).send({ message: `O campo EMAIL precisa ser preenchido!` });
    }
    if (!req.body.senha) {

        return res.status(400).send({ message: `O campo SENHA precisa ser preenchido!` });
    }
    if (!req.body.imagem) {

        return res.status(400).send({ message: `O campo IMAGEM precisa ser preenchido!` });
    }
    if (!req.body.admin) {

        return res.status(400).send({ message: `O campo ADMIN precisa ser preenchido!` });
    }

    return next();
}

const validaProduto = (req, res, next) => {
    let erros = []; //var para acumular os erros

    if (!req.body.sabor) {
        erros.push("sabor");
    }
    if (!req.body.tamanho) {
        erros.push("nome");
    }
    if (!req.body.precoUnit) {
        erros.push("precoUnit");
    }
    if (!req.body.imagem) {
        erros.push("imagem");
    }
    if (!req.body.referencia) {
        erros.push("referencia");
    }

    //testando quantos erros temos e toma uma decisão
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }


}

const validaCategoria = (req, res, next) => {
    if (!req.body.nome) {
        return res.status(400).send({ message: `O campo NOME precisa ser preenchido!` });
    }
}

const validaPedido = (req, res, next) => {
    let erros = []; //var para acumular os erros

    if (!req.body.precoTotal) {
        erros.push("precoTotal");
    }

    if (!req.body.frete) {
        erros.push("frete");
    }

    if (!req.body.concluido) {
        erros.push("concluido");
    }

    //testando quantos erros temos e toma uma decisão
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }

}

const validaCarrinho = (req, res, next) => {
    let erros = []; //var para acumular os erros

    if (!req.body.precoTotal) {
        erros.push("precoTotal");
    }

    if (!req.body.frete) {
        erros.push("frete");
    }

    //testando quantos erros temos e toma uma decisão
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }

}

module.exports = {
    validaUsuario,
    validaProduto,
    validaCategoria,
    validaPedido,
    validaCarrinho
}

//{
 //   "email": "mes@agosto.com",
  //  "senha": "agosto"
   // }