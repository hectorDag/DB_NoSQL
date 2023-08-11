const express = require('express')
const router = express.Router()
const {getTareas, setTarea, updtaTarea, deleteTarea} = require('../controllers/tareasControllers')

//router.route('/').get(gettareas).post(setTarea)
router.get('/', getTareas)
router.post('/', setTarea)

//router.route('/:id').delete(deleteTarea).put(updatTarea)
router.put('/:id', updtaTarea)
router.delete('/:id', deleteTarea)


module.exports = router