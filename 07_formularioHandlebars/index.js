const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

//CONFIG
//TEMPLATE ENGINE
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//BODY PARSER 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//CONEXÃO COM O BANCO DE DADOS MYSQL
const sequelize = new Sequelize('postagens', 'root', 'XX2020xx', {
    host: 'localhost',
    dialect: 'mysql'
})

//ROTAS
app.get('/index', function(req, res){
    res.render('formulario')
})

app.post('/cadastra', function(req, res){
    res.send(`O titulo é ${req.body.titulo} o conteudo é ${req.body.conteudo}`)
    res.send('Formulário recebido')
})

// PORTA DO SERVIDOR
app.listen(2080, function(){
    console.log('Servidor em uso na url http://localhost:2080')
})