const express = require('express');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth');

//parse form data
app.use(express.urlencoded({ extended: false })); // go to definition

//parse json
app.use(express.json());

//base route
app.use('/api/people', people);
app.use('/login', auth);

app.listen(5000, () => console.log('server is listening on port 5000'));
