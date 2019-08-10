const Cancion = require('../models/cancion'); 
const cancionCtrl = {};

cancionCtrl.getCanciones = async(req, res)=>{
       const canciones = await Cancion.find();
       res.json(canciones);
    };

    cancionCtrl.createCancion = async(req, res)=>{
    const cancion = new Cancion({
        nombre: req.body.nombre,
        artista: req.body.artista,
        album: req.body.album,
        url: req.body.url,
        fecha: req.body.fecha
    });
    await cancion.save();
    res.json({
        'status': 'Cancion saved'
    });
};

cancionCtrl.getCancion = async (req, res)=>{
    const cancion = await Cancion.findById(req.params.id);
    res.json(cancion);
};

cancionCtrl.editCancion = async(req, res)=>{
    const{id}=req.params;
    const cancion = {
        nombre: req.body.nombre,
        artista: req.body.artista,
        album: req.body.album,
        url: req.body.url,
        fecha: req.body.fecha
    };
    await Cancion.findByIdAndUpdate(id, {$set: cancion}, {new: true});
    res.json({status: 'Cancion Update'});
};

cancionCtrl.deleteCancion = async(req, res)=>{
    await Cancion.findByIdAndRemove(req.params.id);
    res.json({status: 'Cancion Delete'});
};

module.exports = cancionCtrl;