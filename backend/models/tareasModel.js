const mongoose = require('mongoose')
//mongo le pone automaticamente el id UUid

const tareaSchema = mongoose.Schema({
    texto: {
        type: String,
        require: [true, 'Por favor teclea la descripcion de la tarea']
    }
},{
    timestamps: true //La fecha de la creacion y de el update
})

module.exports = mongoose.model('Tarea', tareaSchema)//se va a llamar la coleccion tareas