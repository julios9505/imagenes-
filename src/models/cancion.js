const mongoose = require('mongoose');
const {Schema} = mongoose;

const CancionSchema = new Schema({
    nombre: {type: String, required: true},
    artista:{type: String, required: true},
    album:{type: String, required: true},
    url: {type:String, required: true},
    fecha: {type: Date, required: true}
});

//Modelo de datos de mongoose
module.exports = mongoose.model('Cancion', CancionSchema);