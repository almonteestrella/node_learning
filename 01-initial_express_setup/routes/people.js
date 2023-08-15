const express = require('express');
const router = express.Router();
const {
    deletePeople,
    updatePeople,
    createPeople,
    getPeople,
} = require('../controllers/people');

// router.get('/', getPeople);

// router.post('/', createPeople);

// //update method
// router.put('/:id', updatePeople);

// //delete method
// router.delete('/:id', deletePeople);

router.route('/').get(getPeople).post(createPeople);
router.route('/:id').put(updatePeople).delete(deletePeople);

module.exports = router;
