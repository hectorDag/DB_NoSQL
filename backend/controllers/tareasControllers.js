const asyncHandler = require('express-async-handler')//para manejar errores en las funciones async

const getTareas = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Obtener Tareas'})
})

const setTarea = asyncHandler( async (req, res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error('Por favor teclea una Tarea')
    }
    res.status(201).json({message: 'Crear Tarea'})
})

const updtaTarea = asyncHandler( async (req, res) => {
    res.status(200).json({message:`Modificar Tarea ${req.params.id}`})
})

const deleteTarea = asyncHandler( async (req, res) => {
    res.status(200).json({message:`Eiminar Tarea ${req.params.id}`})
})

module.exports = {
    getTareas,
    setTarea,
    updtaTarea,
    deleteTarea
}