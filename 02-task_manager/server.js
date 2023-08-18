const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('hello from server');
});

app.use('/api/v1/tasks', tasks);

const port = 5000;
app.listen(port, console.log(`server listen on port: ${port}...`));

// DATABASE_URL=mongodb+srv://first_mongoDB:developer1411809@nodeexpressprojects.5z0kyqv.mongodb.net/first_testingDB?retryWrites=true&w=majority
