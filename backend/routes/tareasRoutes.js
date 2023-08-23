const express = require('express')
const router = express.Router()
const {getTareas, setTarea, updtaTarea, deleteTarea} = require('../controllers/tareasControllers')
const {protect} = require('../middleware/authMiddleware')

//router.route('/').get(protect, gettareas).post(protect, setTarea)
router.get('/', protect, getTareas)
router.post('/', protect, setTarea)

//router.route('/:id').delete(deleteTarea).put(updatTarea)
router.put('/:id', protect, updtaTarea)
router.delete('/:id', protect, deleteTarea)


module.exports = router