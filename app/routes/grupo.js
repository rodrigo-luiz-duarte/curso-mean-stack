
module.exports = function(app) {

        var api = app.api.grupo;
    
        // endpoint para /v1/grupos    
        app.get('/v1/grupos', api.lista);
        
    
    }