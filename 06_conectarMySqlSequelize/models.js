const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'XX2020xx', {
    host: 'localhost',
    dialect: 'mysql'
})

// model postagem

const Postagem = sequelize.define/*isso define o modelo/tabela*/('postagens',/*nome da tabela */{//nesse objeto vc vai passar os campos da tabela
    titulo: { //coluna da tabela
        type: Sequelize.STRING //tipo do campo
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//model usuario

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//chamar o "comando de criar tabale"
//Postagem.sync({force: true})

//sempre lembrar de excluir a linha depois, pq ele reseta a tabela se executar mais uma vez


//INSERIR DADOS NA TABELA usar a função create
Postagem.create({//usa objeto igual criar as tabelas
    titulo: 'Meu outro teste',
    conteudo: 'Testando outro conteudo da postagem'
})

Usuario.create({
    nome: 'Julio Cesar',
    sobrenome: 'Bertoldo',
    idade: 32,
    email: 'juliocesar.bertt@gmail.com'
})