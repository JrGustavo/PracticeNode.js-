const http = require('http')

http.createServer((request, response) =>{

    console.log(request.url)

    if (request.url === '/about'){
        response.write('acerca de ')
         return  response.end()
    }

    response.write(`<h1>Not found </h1>
    <p>Esta pagina no se encontro </p>`
    )
    response.end()
}).listen(3000)

console.log('Servidor Listengin in port 3000')