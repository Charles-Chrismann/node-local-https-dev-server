let https = require('https');
let fs = require('fs');
let path = require('path');

https.createServer({
    key: fs.readFileSync('./localhost-key.pem'),
    cert: fs.readFileSync('./localhost.pem'),
  },
  function(request, response) {
    if(request.url === '/') request.url = '/index.html'
    fs.readFile(`./public${request.url}`, function (err, data) {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Erreur interne.');
      } else {
        switch(request.url.split('.')[request.url.split('.').length - 1]) {
          case 'html': response.writeHead(200, { 'Content-Type': 'text/html' }); break;
          case 'css': response.writeHead(200, { 'Content-Type': 'text/css' }); break;
          case 'js': response.writeHead(200, { 'Content-Type': 'text/javascript' }); break;
        }
        response.end(data);
      }
    });
})
.listen(3000);