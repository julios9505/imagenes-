const mongoose = require('mongoose');

//const URI = 'mongodb://localhost/BD_ESSOQUE_WEB';

mongoose.Promise = global.Promise;

mongoose.connect(process.env.URLDB, (err, res)=>{
    if(err){
        throw err;
    }else{
        console.log("La conexión a la base de datos esta corriendo correctamente...");

        app.listen(port, function(){
            console.log("Servidor de EssoQue WEB Music escuchando en http://localhost:", port);
        });
    }
});
    module.exports = mongoose;