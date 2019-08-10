const mongoose = require('mongoose');
const {Schema} = mongoose;

const PrecioSchema = new Schema({
    municipio: {type: String, required: true},
    comunidad:{type: String, required: true},
    escenario: {type:String, required: true},
    precio: {type: Number, required: true}
});

//Modelo de datos de mongoose
module.exports = mongoose.model('Precio', PrecioSchema);