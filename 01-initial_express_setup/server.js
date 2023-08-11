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

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;
    console.log(productID);

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );

    if (!singleProduct) {
        res.status(404).send('<h1>this product does not exist!');
    }

    res.json(singleProduct);
});
app.get('/api/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) =>
            product.name.startsWith(search)
        );
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
        return res.status(200).json({ success: true, data: [] }); //you need to use the return keyword if you are sending more than one res on a single request.
    }

    res.status(200).json(sortedProducts);
});

app.listen(5000, () => console.log('server is listening on port 5000'));
