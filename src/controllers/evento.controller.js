const Evento = require('../models/evento'); 
const eventoCtrl = {};

eventoCtrl.getEventos = async(req, res)=>{
       const eventos = await Evento.find();
       res.json(eventos);
    };

    eventoCtrl.createEvento = async(req, res)=>{
    const evento = new Evento({
        lugar: req.body.lugar,
        escenario: req.body.escenario,
        tipo: req.body.tipo,
        fecha: req.body.fecha
    });
    await evento.save();
    res.json({
        'status': 'Evento saved'
    });
};

eventoCtrl.getEvento = async (req, res)=>{
    const evento = await Evento.findById(req.params.id);
    res.json(evento);
};

eventoCtrl.editEvento = async(req, res)=>{
    const{id}=req.params;
    const evento = {
        lugar: req.body.lugar,
        escenario: req.body.escenario,
        tipo: req.body.tipo,
        fecha: req.body.fecha
    };
    await Evento.findByIdAndUpdate(id, {$set: evento}, {new: true});
    res.json({status: 'Evento Update'});
};

eventoCtrl.deleteEvento = async(req, res)=>{
    await Evento.findByIdAndRemove(req.params.id);
    res.json({status: 'Evento Delete'});
};

module.exports = eventoCtrl;