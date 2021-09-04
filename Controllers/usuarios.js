const {request, response} = require ('express');
const Usuario = require('../models/usuario')


//GET
const usuariosGet =(req = request, res= response) =>{
        
        res.json({
            msg: "GET usuarios",
        });
      
      }

      
//POST
const usuariosPost = async (req = request, res= response) =>{

    const {nombre, email, password, rol} =req.body;
    const usuario = new Usuario({nombre, email, password, rol})
    await usuario.save()

        
    res.json({
        msg: "Usuario creado",
        usuario
        
    });
  
  }

  
//PUT
const usuariosPut =(req = request, res= response) =>{
        
    res.json({
        msg: "PUT usuarios",
    });
  
  }

  
//DELETE
const usuariosDelete =(req = request, res= response) =>{
        
    res.json({
        msg: "DELETE usuarios",
    });
  
  }

  module.exports = {
      usuariosGet,
      usuariosPost,
      usuariosPut,
      usuariosDelete

  }
