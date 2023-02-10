const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//CONFIG
//TEMPLATE ENGINE
app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
}}))
app.set('view engine', 'handlebars')

//BODY PARSER - (serve para receber dados do formulário)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//ROTAS
app.get('/index', function(req, res){
    res.render('formulario')
})

app.get('/lista', function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        res.render('lista', {posts: posts})
    })
})

app.post('/cadastro', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/lista')
    }).catch(function(erro){
        res.send(`Houve um erro: ${erro}`)
    });
})

//CRIAÇÃO DO SERVIDOR
app.listen(2081, function(){
    console.log('Servidor em uso na URL http://localhost:2081')
})