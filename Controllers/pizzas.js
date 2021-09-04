const {request, response} = require ('express');
const Usuario = require('../models/pizza')


//GET
const pizzasGet =(req = request, res= response) =>{
        
        res.json({
            msg: "GET pizzas",
        });
      
      }

      
//POST
const pizzasPost = async (req = request, res= response) =>{

    const {nombre, estado, precio, detalle,categoria} =req.body;
    const pizza = new Pizza({nombre, estado, precio,detalle, categoria})
    await pizza.save()

        
    res.json({
        msg: "pizza creado",
        pizza
        
    });
  
  }

  
//PUT
const pizzasPut =(req = request, res= response) =>{
        
    res.json({
        msg: "PUT pizzas",
    });
  
  }

  
//DELETE
const pizzasDelete =(req = request, res= response) =>{
        
    res.json({
        msg: "DELETE pizzas",
    });
  
  }

  module.exports = {
      pizzasGet,
      pizzasPost,
      pizzasPut,
      pizzasDelete

  }