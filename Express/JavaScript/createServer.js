const http = require('http');
const server = http.createServer((req,res)=>{
    res.write("Hello Yam Jam");
    res.end();
}).listen(8000); //127.0.0.1:8000