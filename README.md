# backend-pizzaria-nodejs

Repositório para o projeto de um backend de uma pizzaria

Código desenvolvido em JavaScript

![NodeJS logo!](https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg "Node JS")

## Instalação

1. Baixe todo o código.
2. Abra o terminal VS Code.
3. Execute: npm i
4. Rode usando: npm run dev

## Endpoints

Todos os endpoints da nossa aplicação serão listados abaixo:

### Usuário

Todos os endpoints do usuário:


/findById

200 - retorna um usuário válido

400 - retorna uma mensagem informando o erro

401 - retorna o erro de autenticação

404 - retorna uma mensagem informando que não encontrou o usuário


/findAll

200 - retorna todos os usuários do banco de dados

401- retorna uma mensagem informando o erro

404 - retorna o erro de autenticação

500 - retorna uma mensagem de Internal Server Error


/create

201 - retorna o usuário que acabou de ser criado

500 - retorna uma mensagem de Internal Server Error


/update

200 - retorna os dados do usuário atualizados

401- retorna uma mensagem informando o erro

404 - retorna o erro de autenticação

500 - retorna uma mensagem de Internal Server Error


/remove

200 - retorna os dados que foram removidos do usuário

401- retorna uma mensagem informando o erro

404 - retorna o erro de autenticação

500 - retorna uma mensagem de Internal Server Error


/addAddress

201 - retorna o endereço que foi adicionado ao usuário

401- retorna uma mensagem informando o erro

404 - retorna o erro de autenticação

500 - retorna uma mensagem de Internal Server Error


/removeAddress

200 - retorna os dados do usuário sem o endereço que foi removido

401- retorna uma mensagem informando o erro

404 - retorna o erro de autenticação

500 - retorna uma mensagem de Internal Server Error


Trecho do código do controller findById:

```javascript
const findUserByIdController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id);

        if (!user) {
            return res.status(404).send({ message: "Usuario nao encontrado. Tente novamente." });
        }

        return res.status(200).send(user);

    } catch (err) {
        if (err.kind == "ObjectId") {

            return res.status(400).send({ message: "ID informado está incorreto. Tente novamente" });
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado. Tente novamente!" });

    }
};

```

### Produto

Todos os endpoints de produto listados abaixo:

/find

### Carrinho

### Pedido
