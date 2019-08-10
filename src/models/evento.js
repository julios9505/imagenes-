const mongoose = require('mongoose');
const {Schema} = mongoose;

const EventoSchema = new Schema({
    lugar: {type: String, required: true},
    escenario:{type: String, required: true},
    tipo: {type:String, required: true},
    fecha: {type: Date, required: true}
});

//Modelo de datos de mongoose
module.exports = mongoose.model('Evento', EventoSchema);