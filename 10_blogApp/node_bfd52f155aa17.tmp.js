// CARREGANDO MODULOS
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const admin = require('./routes/admin')
const path = require('path')
const exp = require('constants')
const mongoose = require('mongoose')

//CONFIGURAÇÕES
    // BODY PARSER
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    //HANDLEBARS
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions: {allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true}}))
    app.set('view engine', 'handlebars')

    //MONGOOSE
    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb://127.0.0.1/blogapp', {
        useNewUrlParser: true
    }).then(() => {
        console.log('Conectado ao mongo')
    }).catch((erro) => {
        console.log('Houve um erro ao se conectar ao mongodb ' + erro)
    })

    //PUBLIC
    app.use(express.static(path.join(__dirname, 'public')))

// ROTAS
    app.use('/admin', admin)
    
// OUTROS
    const port = 2081
    app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})