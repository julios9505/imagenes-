const Producto = require('../models/producto'); 
const productoCtrl = {};

productoCtrl.getProductos = async(req, res)=>{
       const productos = await Producto.find();
       res.json(productos);
    };

    productoCtrl.createProducto = async(req, res)=>{
    const producto = new Producto({
        nombre: req.body.nombre,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        url: req.body.url,
        fecha: req.body.fecha
    });
    await producto.save();
    res.json({
        'status': 'Producto saved'
    });
};

productoCtrl.getProducto = async (req, res)=>{
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
};

productoCtrl.editProducto = async(req, res)=>{
    const{id}=req.params;
    const producto = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        url: req.body.url,
        fecha: req.body.fecha
    };
    await Producto.findByIdAndUpdate(id, {$set: producto}, {new: true});
    res.json({status: 'Producto Update'});
};

productoCtrl.deleteProducto = async(req, res)=>{
    await Producto.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto Delete'});
};

module.exports = productoCtrl;