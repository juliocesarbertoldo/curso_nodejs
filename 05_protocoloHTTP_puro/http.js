let http = require('http')

http.createServer(function(req, res){
    res.end('Oi!')
}).listen(2080)

console.log('Servidor rodando!')