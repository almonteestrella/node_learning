const express = require('express');
const app = express();

//setup static and middleware
app.use(express.static('./public'));

//home page
app.get('/', (req, res) => {
    res.status(200).send('home page');
});

//about page
app.get('/about', (req, res) => {
    res.status(200).send('about page');
});

//404
app.all('*', (req, res) => {
    res.status(404).send('page not found');
});

app.listen(5000, () => console.log('server is listening on port 5000'));

//most used methods
// app.get;
// app.post;
// app.put;
// app.patch;
// app.delete;
// app.all
