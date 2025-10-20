const http = require('http');

const sever = http.createServer((req,res) => {
    res.end(console.log('server created')
    )
})

const PORT = '3000';
sever.listeners(PORT,() => {
    console.log('listener');
})