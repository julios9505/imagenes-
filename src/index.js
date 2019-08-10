const express = require ('express');
const morgan = require ('morgan');
const cors = require('cors');
const app = express();
const path = require('path');
const multer = require('multer');
const uuid = require('uuid/v4');
const {format} = require('timeago.js');
const {mongoose} = require('./database');

//Configuraciones del servidor  SETTINGS
app.set('port', process.env.PORT.URLDB||3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Procesamientos de datos    MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename)=>{
        cb(null, uuid() + path.extname(file.originalname));
    }
});
app.use(multer({storage: storage}).single('image'));
app.use(cors({origin: 'http://localhost:4200'}));


//variables globales
app.use((req, res, next)=>{
    app.locals.format = format;
    next();
})

//ROUTES
app.use('/api/eventos',require('./routes/evento.routes'));
app.use('/api/precios',require('./routes/precio.routes'));
app.use('/api/canciones',require('./routes/cancion.routes'));
app.use('/api/productos',require('./routes/producto.routes'));
app.use(require('./routes/index'));


//static files
app.use(express.static(path.join(__dirname, 'public'))); 

//Iniciar servidor
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});
