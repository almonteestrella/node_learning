const express = require('express');
const logger = require('./middleware/logger');
const authorized = require('./middleware/authorized');

const app = express();

//middleware
// req => middleware => res

app.use([logger, authorized]); //apply the middleware functions in ALL my routes and should be on top of all the routes

app.get('/', (req, res) => {
    res.send('home page');
});
app.get('/about', (req, res) => {
    res.send('about page');
});

app.listen(5000, () => console.log('server is listening on port 5000'));
