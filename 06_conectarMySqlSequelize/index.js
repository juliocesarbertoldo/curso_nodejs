//SEQUELIZE é uma ORM, é uma tecnica que ajuda a manipular bando de dados através de orientação a objetos

const Sequelize = require('sequelize')//letra maiúscula porque é uma classe
const sequelize = new Sequelize('teste',/*nome do banco PRECISA EXISTIR O BANCO*/ 'root'/*usuario*/, 'XX2020xx'/*senha*/, {/*ojeto para definir qual servidor está rodando*/
    host: 'localhost',//computador que está conectando
    dialect: 'mysql'//qual banco de dados está conectando
})

sequelize.authenticate().then/*é como se fosse uma função de callback, é executada quando o evento acontece*/(function(){//aqui só criamos a função callback de then
    console.log('Conectado com sucesso!')
}).catch/*é como a then mas é chamada quando da erro*/(function(erro){
    console.log('Falha ao se conectar: ' + erro)
})