const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  const queryObject = url.parse(req.url,true).query;
  res.end('Hello ' + queryObject.name); // Potential XSS vulnerability
}).listen(8080);
