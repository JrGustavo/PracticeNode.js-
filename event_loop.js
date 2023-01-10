const http = require('http')

const server = http.createServer((req, res)=> {
    if (req.url === '/') {
        res.write('Welcome to the server')
        return res.end()
    }
    if (req.url === '/about') {

        //Blocking code
        for (let i = 0; i< 1000; i++){
            console.log(Math.random() * i)
        }

    }
    res.end('not found')
})

server.listen(8080)
console.log(`Server on port 8080`)

