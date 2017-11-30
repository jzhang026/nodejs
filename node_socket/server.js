var net = require('net');
var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log(data.toString())
    socket.write('hello');
  });
  socket.on('end', function() {
    console.log('bye')
  });

  socket.write('this is a new start');
  
})
server.on('connection', function() {
  console.log('connectiond')
})
server.on('listening', function() {
  console.log('listening')
})
server.listen(8124, function() {
  console.log('connection established')
})

// server.listen('/tmp/echo.sock');