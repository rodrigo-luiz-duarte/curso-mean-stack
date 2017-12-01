var mongoose = require('mongoose');

// solicitando o modelo 'Foto'
var model = mongoose.model('Foto');

var api = {}

// função que atenderá as requisições para o endpoint /v1/fotos
api.lista = function(req, res) {

    model.find()  
        .then(function(fotos) {
        res.json(fotos);

    }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
}

// função que realizará a busca pelo ID da foto
api.buscaPorId = function(req, res) {
    
    model.findById(req.params.id)
    .then(function(foto) {

        if (!foto) throw new Error('Foto não encontrada');
        res.json(foto);

    }, function(error) {

        console.log(error);
        res.sendStatus(500);
    });
};

// função que realizará a exclusão pelo ID da foto
api.removePorId = function(req, res) {
    
    model.remove({'_id' : req.params.id})
    .then(function() {

        res.sendStatus(204);

    }, function(error) {

        console.log(error);
        res.sendStatus(500);
    });
};

// função que realizará a inclusão de uma nova foto
api.adiciona = function(req, res) {
    
    model.create(req.body)
    .then(function(foto) {

        res.json(foto);

    }, function(error) {

        console.log(error);
        res.sendStatus(500);
    });
};

// função que realizará a atualização de uma foto pelo ID.
api.atualiza = function(req, res) {
    
    model.findByIdAndUpdate(req.params.id, req.body)
    .then(function(foto) {

        res.json(foto);

    }, function(error) {
        
        console.log(error);
        res.sendStatus(500);
    })
};

module.exports = api;