var net = require('net');

var client = net.connect({port: 8124}, function() {
  console.log('client connected')
  // client.write('hell i am No.1 client\n');
})

client.on('data', function(data) {
  console.log('[client received data]\n',data.toString());
  client.end();
})

client.on('end', function() {
  console.log('client disonnected');
})