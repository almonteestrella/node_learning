const dbConnection = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();
const notFound = require('./middlewares/notFound');
const errorHandlerMiddleware = require('./middlewares/error-handler');

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
    try {
        await dbConnection(process.env.DATABASE_URL);
        app.listen(port, console.log(`server listen on port: ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();
