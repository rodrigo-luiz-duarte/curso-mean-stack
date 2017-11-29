var http = require('http');
var app = require('./config/express');
var porta = 3000;

// Carrega as configurações de conexão com o banco de dados.
require('./config/database')('localhost/alurapic');

var httpServer = http.createServer(app);
httpServer.listen(porta, aoIniciar);

function aoIniciar() {
    console.log('Servidor iniciado e ouvindo a porta', porta);
}