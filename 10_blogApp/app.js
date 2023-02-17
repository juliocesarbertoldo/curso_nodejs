// CARREGANDO MODULOS
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
//const mongoose = require('mongoose')

//CONFIGURAÇÕES
    // BODY PARSER
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    //HANDLEBARS
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions: {allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true}}))
    app.set('view engine', 'handlebars')
// ROTAS

// OUTROS
const port = 2081
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})