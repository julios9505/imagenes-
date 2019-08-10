const Precio = require('../models/precio'); 
const precioCtrl = {};

precioCtrl.getPrecios = async(req, res)=>{
       const precios = await Precio.find();
       res.json(precios);
    };

    precioCtrl.createPrecio = async(req, res)=>{
    const precio = new Precio({
        municipio: req.body.municipio,
        comunidad: req.body.comunidad,
        escenario: req.body.escenario,
        precio: req.body.precio
    });
    await precio.save();
    res.json({
        'status': 'Precio saved'
    });
};

precioCtrl.getPrecio = async (req, res)=>{
    const precio = await Precio.findById(req.params.id);
    res.json(precio);
};

precioCtrl.editPrecio = async(req, res)=>{
    const{id}=req.params;
    const precio = {
        municipio: req.body.municipio,
        comunidad: req.body.comunidad,
        escenario: req.body.escenario,
        precio: req.body.precio
    };
    await Precio.findByIdAndUpdate(id, {$set: precio}, {new: true});
    res.json({status: 'Precio Update'});
};

precioCtrl.deletePrecio = async(req, res)=>{
    await Precio.findByIdAndRemove(req.params.id);
    res.json({status: 'Precio Delete'});
};

module.exports = precioCtrl;