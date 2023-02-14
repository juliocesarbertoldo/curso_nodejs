//CONEXÃO COM O BANCO MOGODB
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1/aprendendo', {
    useNewUrlParser: true
}).then(() => {
    console.log('Conectado com sucesso!')
}).catch((erro) => {
    console.log('Houve um erro ao se conectar ao mongodb ' + erro)
})

//MODEL - USUARIOS
//DEFININDO O MODEL
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})
//FALANDO A COLLECTION
mongoose.model('usuarios', UsuarioSchema)

//PASSAR OS DADOS
const novoUsuario = mongoose.model('usuarios')
new novoUsuario({
    nome: 'Edivânia',
    sobrenome: 'Bertoldo',
    idade: 29,
    pais: 'Brasil'
}).save().then(() => {
    console.log('Usuario criado com sucesso!')
}).catch((erro) => {
    console.log('Houve um erro ao criar o usuario' + erro)
})