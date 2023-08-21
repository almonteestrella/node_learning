const express = require('express');
const {
    getAllTasks,
    getSingleTask,
    updateTask,
    deleteTask,
    createTask,
} = require('../controllers/tasks');
const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').patch(updateTask).delete(deleteTask).get(getSingleTask);

module.exports = router;
