const express = require('express');
let { people } = require('./data');

const app = express();

//static assets
app.use(express.static('./methods-public'));

//parse form data
app.use(express.urlencoded({ extended: false })); // go to definition

//parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).send({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({
            success: false,
            msg: 'please provide name value',
        });
    }
    res.status(201).json({ success: true, person: name });
});

app.post('/login', (req, res) => {
    const { name } = req.body;

    if (name) {
        res.status(200).send(`hello and welcome ${name}`);
    }
    res.status(401).send('please, provide credentials');
});

app.listen(5000, () => console.log('server is listening on port 5000'));
