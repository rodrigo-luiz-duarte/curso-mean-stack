
module.exports = function(app) {

    var api = app.api.foto;

    // Configuração do endpoint para /v1/fotos
    app.get('/v1/fotos', api.lista);
    

}