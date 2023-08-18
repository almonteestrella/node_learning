const express = require('express');
const {
    getAllTasks,
    getSingleTask,
    editTask,
    deleteTask,
    createTask,
} = require('../controllers/tasks');
const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').patch(editTask).delete(deleteTask).get(getSingleTask);

module.exports = router;
