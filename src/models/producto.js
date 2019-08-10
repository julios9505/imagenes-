const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductoSchema = new Schema({
    nombre: {type: String, required: true},
    precio:{type: Number, required: true},
    cantidad:{type: Number, required: true},
    url: {type:String, required: true},
    fecha: {type: Date, required: true}
});

//Modelo de datos de mongoose
module.exports = mongoose.model('Producto', ProductoSchema);