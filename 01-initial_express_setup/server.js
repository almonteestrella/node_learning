const express = require('express');
const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>home page</h1><a href="/api/products">produts</a>');
});

app.get('/api/products', (req, res) => {
    const newProductList = products.map(({ id, name, price, image }) => {
        return { id, name, price, image };
    });

    res.json(newProductList);
});

app.listen(5000, () => console.log('server is listening on port 5000'));
