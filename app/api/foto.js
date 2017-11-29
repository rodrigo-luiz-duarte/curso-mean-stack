var api = {}

var fotos = [
    {_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
    {_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }
];

var CONTADOR_ID = 2;

// função que atenderá as requisições para o endpoint /v1/fotos
api.lista = function(req, res) {

    res.json(fotos);
}

// função que realizará a busca pelo ID da foto
api.buscaPorId = function(req, res) {
    
    var foto = fotos.find(function(foto) {
        return foto._id == req.params.id;
    });

    res.json(foto);
};

// função que realizará a exclusão pelo ID da foto
api.removePorId = function(req, res) {
    
    fotos = fotos.filter(function(foto) {
        return foto._id != req.params.id;
    });

    // enviando resposta, mas apenas código de status
    res.sendStatus(204);
};

// função que realizará a inclusão de uma nova foto
api.adiciona = function(req, res) {
    
    var foto = req.body;
    foto._id = ++CONTADOR_ID;
    fotos.push(foto);
    res.json(foto);
};

// função que realizará a atualização de uma foto pelo ID.
api.atualiza = function(req, res) {
    
    var fotoId = req.params.id;
    var foto = req.body;

    var indice = fotos.findIndex(function(foto) {
        return foto._id == fotoId;
    });

    fotos[indice] = foto;
    res.sendStatus(200);

};

module.exports = api;