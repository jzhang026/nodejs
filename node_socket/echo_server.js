var net = require('net');

var server = net.createServer(function(socket) {
  socket.write('echo\n')
  socket.pipe(socket);
})

server.listen(8088, function() {
  console.log('server started')
})