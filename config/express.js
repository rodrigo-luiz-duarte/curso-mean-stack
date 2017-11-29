var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

// middleware que torna acessível o conteúdo da pasta /public
app.use(express.static('./public'));

// middleware que habilita o parser para JSON em requisições
app.use(bodyParser.json());

// Módulo do node que realiza o include de conteúdo.
// Ele automatiza a inclusão dos módulos de API e Routes.
consign({cwd: 'app'})
    .include('api')
    .then('routes')
    .into(app);


module.exports = app;