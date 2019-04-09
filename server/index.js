const http = require('http');
let app  = require('./app');
let port = process.env.PORT || 3005
app.set('port', port);

let server = http.createServer(app);
server.listen(port);