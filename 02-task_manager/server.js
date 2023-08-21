const dbConnection = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('hello from server');
});

app.use('/api/v1/tasks', tasks);

const port = 5000;
const start = async () => {
    try {
        await dbConnection(process.env.DATABASE_URL);
        app.listen(port, console.log(`server listen on port: ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();
