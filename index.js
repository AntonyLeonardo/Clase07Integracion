var http = require('http'); //Crea una variabe e importa una libreria HTTP 
http.createServer((request, response) => { //Crea un servidor y una funcion anonima
  response.writeHead(200, {
    'Content-Type' : 'text/plain' //mostrar texto simple
  });
  response.end('Hola de Node.js');
  console.log('Hello handler requested');
}).listen(8180, '127.0.0.1', () => { //Escuche en el puerto 8180
  console.log('Started Node.js http server at http://127.0.0.1:8180');
});