const {Schema, model} = require('mongoose')

const PizzaSchema = new Schema ({

    nombre: {
        type: String,
        require:[true, "El nombre es obligatorio"],
        unique: true

    },

    estado:{
        type: Boolean,
        require:[true, "El estado es obligatorio"],
        
    },

    precio:{
        type: Number,
        require:[true, "El precio es obligatorio"]

    },

    detalle:{
        type: String,
        require:[true, "El detalle es obligatorio"]

    },

    categoria:{
        type: String,
        require:[true, "Categoria es obligatorio"]

    }

    
})

module.exports= model("Pizza", PizzaSchema)