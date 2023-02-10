const express = require('express') // aqui é para carregar o modulo express, variável pode ter qq nome
const app = express() //aqui, faz uma variavel pra carregar a funcao express do modulo

app.get('/'/*get é para carregar a página aí escolhemos a principal, representa só por / */, function(req, res){ //essa funcao é o call back pra enviar uma resposta para página atraves do res
    res.send('Seja bem vindo ao meu app!')
})

app.get('/sobre', function(req, res){
    res.send('Minha pagina sobre')
})

app.get('/blog', function(req, res){
    res.send('Bem vindo ao meu blog!')
})

app.get('/parametros/:cargo/:nome/:cor',/*tudo que coloca com /: é um parâmetro, e precisa ser declarado no navegador*/function(req, res){
    res.send(`Oi ${req.params.nome}, o seu cargo e ${req.params.cargo} e cor preferida e ${req.params.cor}`)//o send só pode ser usado uma unica vez, por isso deve ter tudo em um unico comando
})

app.listen(2080,/*isso é sempre a ultima linha, cria o servidor*/ function(){//declarar uma funcao assim, damos o nome de call back, só pra obter uma resposta do comando executado
    console.log('Servidor rodando na url http://localhost:2080')//aqui escrevemos a resposta no terminal só pra aparecer que está rodando o servidor
})
