const http = require('http');
const hostname = 'localhost';
const port = 5000;

const sever = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello word\n tuannhd');
});

sever.listen(port, hostname, () => {
    console.log(`sever running at http://${hostname}:${port}/`)
});