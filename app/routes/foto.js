
module.exports = function(app) {

    var api = app.api.foto;

    // Configuração do endpoint para /v1/fotos
    app.route('/v1/fotos')
        .get(api.lista)
        .post(api.adiciona);
    
    // Configuração do endpoint para /v1/fotos/:id
    app.route('/v1/fotos/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);
    
}