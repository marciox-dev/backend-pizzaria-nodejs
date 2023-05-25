const ObjectId = require("mongoose").Types.ObjectId;

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

const validaEndereco = (req, res, next) => {
    let erros = [];
    req.body.map(( value, key ) => {
        if(!value.rua){
            erros.push(`'${key+1}' - rua`)
        }
        if(!value.numero){
            erros.push(`'${key+1}' - numero`)
        }
        if(!value.CEP){
            erros.push(`'${key+1}' - CEP`)
        }
    });

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

    if (req.body.concluido  == undefined ) {
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

const validaId = (req, res, next) => {
    if(ObjectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID não corresponde aos padrões necessários`})
    }
}

const validaLogin = (req, res, next) => {
    let erros = []; //var para acumular os erros
    
    if (!req.body.email) {
        erros.push("email");
    }

    if (!req.body.senha) {
        erros.push("senha");
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

const validaProdutosCarrinhoPedido = (req, res, next) => {
    let erros = [];
    
    req.body.produtos.map(( value, key ) => {
        if(!value._id){
            erros.push(`'${key+1} - _id'`)
        }
        if(!ObjectId.isValid(value._id)){
            erros.push(`'${key+1} - _id - tipo inválido'`)
        }
        if(!value.quantidade){
            erros.push(`'${key+1} - quantidade'`)
        }
        
    });

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
    validaEndereco,
    validaProduto,
    validaCategoria,
    validaPedido,
    validaCarrinho,
    validaId,
    validaLogin,
    validaProdutosCarrinhoPedido
}

//{
 //   "email": "mes@agosto.com",
  //  "senha": "agosto"
   // }