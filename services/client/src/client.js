const greeterService = require('../grpc/greeting_grpc_pb.js');
const messages = require('../grpc/greeting_pb.js');
const grpc = require('@grpc/grpc-js');
const readline = require('readline');

// "Globals"
const SERVER_URI = '0.0.0.0:9090';

// Client
const client = new greeterService.GreeterClient(
  SERVER_URI,
  grpc.credentials.createInsecure()
);

// Console interface
const iface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for their name
iface.question('What is your name? ', (name) => {
  // User the user's name in the greeting
  const request = new messages.HelloRequest();
  request.setName(name);

  // Say hello in gRPC!
  client.sayHello(request, (err, response) => {
    if (err) {
      console.error(`Error: ${err.message}`);
    } else {
      console.log(`${response.getMessage()}!`);
    }
  });

  iface.close();
});
