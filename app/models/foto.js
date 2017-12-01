var mongoose = require('mongoose');

// cria o esquema
var schema = mongoose.Schema({
    
    titulo: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    grupo: {
        type: Number,
        required: true
    },
    descricao: {
        type: String
    }
});

 // compilando um modelo com base no esquema
 mongoose.model('Foto', schema);