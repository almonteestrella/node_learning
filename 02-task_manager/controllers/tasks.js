const getAllTasks = (req, res) => {
    res.send('getting all items');
};

const createTask = (req, res) => {
    res.send('create task');
};
const getSingleTask = (req, res) => {
    res.send('get single task');
};
const editTask = (req, res) => {
    res.send('edit task');
};
const deleteTask = (req, res) => {
    res.send('delete task');
};

module.exports = {
    getAllTasks,
    getSingleTask,
    editTask,
    deleteTask,
    createTask,
};
