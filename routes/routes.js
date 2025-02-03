const express = require('express');
const upload = require('../utils/multer.js');

const verify = require('../middleware/verify.js');

const { index,login,dashboar,usuarios,crearUsuarioPost,update,updatePost,eliminar,loginPost,eQuipos,crearEquipo,updateEquipo,updateEquipoPost,deleteEquipo} = require('../controllers/controllers.js');

const routes = express.Router();

// Rutas
routes.get('/',index);
routes.get('/login',login);
routes.get('/dashboar',verify,dashboar);
routes.get('/usuarios',verify,usuarios);
routes.get('/equipos',eQuipos);
routes.post('/loginPost',loginPost);
//ruta post 
routes.post('/crearUsuario/:role',crearUsuarioPost);
routes.post('/crearEquipoPost',crearEquipo);
//////////////////////////////////////////////////////////
routes.get('/update/:id',verify,update);
routes.post('/updatePost/:id',updatePost);
/////////////////////////////////////////////////////////
routes.get('/delete/:id',verify,eliminar);
routes.get(`/deleteEquipo/:id`,deleteEquipo);
/////////////////////////////////////////////////////////
routes.get('/updateEquipo/:id',updateEquipo);
routes.post('/updateEquipoPost/:id',updateEquipoPost);
module.exports = routes;