const asyncHandler = require('express-async-handler')//para manejar errores en las funciones async
const Tarea = require('../models/tareasModel')

const getTareas = asyncHandler( async (req, res) => {
    const tareas = await Tarea.find({user: req.user.id})
    res.status(200).json(tareas)
})

const setTarea = asyncHandler( async (req, res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error('Por favor teclea una Tarea')
    }
    const tarea = await Tarea.create({
        texto: req.body.texto,
        user: req.user.id
    })
    res.status(201).json(tarea)
})

const updtaTarea = asyncHandler( async (req, res) => {

  const tarea = await Tarea.findById(req.params.id)

  if(!tarea){
    res.status(404)
    throw new Error ('La Tarea no fue encontrada')
  }

  //verificamos que la tarea pertenesca al usuario logeado

  if(tarea.user.toString() !== req.user.id){
    res.status(401)
    throw new Error ('Usuario no autorizado')
  } else {
    const updatedTarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})
  }

    res.status(200).json(updatedTarea)
})

const deleteTarea = asyncHandler( async (req, res) => {

    const tarea = await Tarea.findById(req.params.id)

    if(!tarea){
      res.status(404)
      throw new Error ('La Tarea no fue encontrada')
    }


    if(tarea.user.toString() !== req.user.id){
        res.status(401)
        throw new Error ('Usuario no autorizado')
      } else {
        tarea.deleteOne()
      }

    //const deletedTarea = await Tarea.findByIdAndDelete(req.params.id) No deria necesario pues ya se encontro 

    res.status(200).json({id: tarea.id})
})

module.exports = {
    getTareas,
    setTarea,
    updtaTarea,
    deleteTarea
}