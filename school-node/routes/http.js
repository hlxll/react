var http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay')
})
server.checkContinue()
server.listen(8080, '127.0.0.1', () => {

})