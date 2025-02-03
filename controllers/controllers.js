const user = require('../models/usuarios.js');
const equipos = require('../models/equipos.js');
//////////////////////////////////////////////////
const login = (req,res)=>{
    try{
        res.render('login');
    }catch(error){
        console.error(error.message);
    };
}
const index = (req,res)=>{
    try{
        res.render('index');
    }catch(error){
        console.error(error.message);
        res.status(500).json({status:false,error:error.message});;
    }
}
/////////////////////////////////////////////////////////////////
const dashboar = async(req,res)=>{
    try{
        const data = await user.findAll();        
        res.render('admin',{data});

    }catch(error){
        console.error(error.message);
        res.status(500).json({status:false,error:error.message})
    }
}
//////////////////////////////////////////////////////////////)
const usuarios = async(req,res)=>{
    try{
        const data = await user.findAll();
        res.render('usuarios',{data});
    }catch(error){
        console.error(error.message);
        res.status(500).json({status:false});
    }
}
//////////////////////////////////////////////
const crearUsuarioPost = async(req,res)=>{
    try{
        const role = req.params.role;
        const {nombre,email,telefono,password} = req.body;

        await user.create({nombre,email,telefono,password});
        if(role=="admin"){
            res.redirect('/usuarios');
        }else{
            res.redirect('/login');
        }
    }catch(error){
        console.error(error.message);
        res.status(500).json({status:false,error:error.message});
    }
}
//////////////////////////////////////////////////////
const updatePost = async(req,res)=>{
    try{
        const id = req.params.id;
        const {nombre,email,telefono,password,status} = req.body;
        await user.update({nombre,email,telefono,password,status},{where:{id}});
        res.redirect('/usuarios');
    }catch(error){
     console.error(error.message);
     res.status(500).json({status:false,error:error.message});
 }
}
///////////////////////////////////////////////////////
const update = async(req,res)=>{
    try{
        const id = req.params.id;
        const u = await user.findOne({where:{id}});
        res.render('./formularios/update',{u});
    }catch(error){
     console.error(error.message);
     res.status(500).json({status:false,error:error.message});
 }
}
////////////////////////////////////////////////////////////////
const eliminar = async(req,res)=>{
    try{
        const id = req.params.id;
        await user.destroy({where:{id}});
        res.redirect('/usuarios');
    }catch(error){
        console.error(error.message);
        res.status(500).json({status:false,error:error.message});
    }
}
////////////////////////////////////////////////////////////////
const loginPost = async(req,res)=>{
   try{
       let u = 'admin@gmail.com';
       let security = '1234567Admin.'
       const {email,password} = req.body;
       if( u == email && security == password){
            req.session.isAdmin = true;// Establecer propiedad en la sesión
            res.json({status:true});
        }else{
            res.json({status:false});
        }
    }catch(error){
        console.error(error.message);
        res.status(500).json({status:'X',error:error.message});
    }

}
////////////////////////////////////////////////////////////////
const eQuipos = async(req,res)=>{
    try{
        const data = await equipos.findAll();
        res.render('equipos',{data});
    }catch(error){
        console.error(error.message);
        res.status(500).json({status:false});
    }
}
/////////////////////////////////////////////////////////////////
const crearEquipo = async(req,res)=>{
    try{
     const {marca,modelo,catalogo,descripcion,cantidad} =req.body;
     await equipos.create({marca,modelo,catalogo,descripcion,cantidad});
     res.redirect('/equipos');
 }catch(error){
    console.log(error.message);
    res.status(500).json({status:false});
}
}
////////////////////////////////////////////////////////////////
const updateEquipo =async(req,res)=>{
    try{
        const id = req.params.id;
        const e = await equipos.findOne({where:{id}});
        res.render('./formularios/updateEquipo',{e});
    }catch(error){
      console.log(error.message);
      res.status(500).json({status:false});
  }
}
////////////////////////////////////////////////////////////////
const updateEquipoPost = async(req,res)=>{
    try{
        const id = req.params.id;
        const {marca,modelo,catalogo,descripcion,cantidad} = req.body;
        await equipos.update({marca,modelo,catalogo,descripcion,cantidad},{where:{id}});
        res.redirect('/equipos');
    }catch(error){
      console.log(error.message);
      res.status(500).json({status:false});
  }
}
///////////////////////////////////////////////////////////////
const deleteEquipo = async(req,res)=>{
    try{
      const id = req.params.id;
      await equipos.destroy({where:{id}});
      res.redirect('/equipos');
    }catch(error){
        console.log(error.message);
        res.status(500).json({status:false});
    }
}
////////////////////////////////////////////////////////////////
module.exports= {
    index,
    login,
    dashboar,
    usuarios,
    crearUsuarioPost,
    update,
    updatePost,
    eliminar,loginPost,eQuipos,crearEquipo,updateEquipo,updateEquipoPost,deleteEquipo

}