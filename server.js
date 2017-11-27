var http = require('http');
var app = require('./config/express');
var porta = 3000;

var httpServer = http.createServer(app);
httpServer.listen(porta, aoIniciar);

function aoIniciar() {
    console.log('Servidor iniciado e ouvindo a porta', porta);
}