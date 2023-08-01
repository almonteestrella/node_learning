const http = require('http');

const server = http.createServer((req, res) => {
    const URL = req.url;

    //home page
    if (URL === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>home page</h1>');
        res.end();
    }

    //about page
    else if (URL === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>about page</h1>');
        res.end();
    }
    //page not found
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>page not found</h1>');
        res.end();
    }
});

server.listen(5000);
