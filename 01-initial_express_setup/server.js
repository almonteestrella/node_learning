const express = require('express');
const app = express();

//home page
app.get('/', (req, res) => {
    res.send('home page');
});

//about page
app.get('/about', (req, res) => {
    res.send('about page');
});

//404
app.all('*', (req, res) => {
    res.send('page not found');
});

app.listen(5000, () => console.log('server is listening on port 5000'));

//most used methods
// app.get;
// app.post;
// app.put;
// app.patch;
// app.delete;
// app.all
