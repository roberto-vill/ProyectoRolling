const {request, response} = require ('express');
const Pizza = require('../models/pizza')


//GET
const pizzasGet =(req = request, res= response) =>{
        
        res.json({
            msg: "GET pizzas",
        });
      
      }

      
//POST
const pizzasPost = async (req = request, res= response) =>{

    const {nombre, precio, detalle,categoria, img} =req.body;
    const pizza = new Pizza({nombre, precio,detalle, categoria, img})
    await pizza.save()

        
    res.json({
        msg: "pizza creada",
        pizza
        
    });
  
  }

  
//PUT
const pizzasPut = async (req = request, res= response) =>{

    const id = req.params.id;
    const {nombre, ...resto} = req.body;



    const pizza = await Pizza.findByIdAndUpdate(id,resto, {new:true});

        
    res.json({
        msg: "PUT pizzas",
        pizza
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